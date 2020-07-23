app.controller('headerController', function($filter, $rootScope, $q, $log, $scope, $stateParams, $timeout, menuData, mobileMenuData,configDataAll, configData, subCategoryMenuData, GENERAL_CONFIG, categoryListData, $state, globleSearch, $http, toastr, $cookies, userService, isImageExistService) {
    var vm = this;
    vm.globalSearchName = "";
    $scope.scroll = $rootScope.scroll;
    $scope.baseUrl = GENERAL_CONFIG.app_base_url;
    $scope.s3_base_url = GENERAL_CONFIG.s3_base_url;
    $scope.s3_article_1610 = GENERAL_CONFIG.s3_article_1610;
    $scope.is_home_page_url = false;
    if(angular.element('.homepage').length > 0)
    {
        $scope.is_home_page_url = true;
    }
    vm.logout = logout;
    var googleCode2 = '\
    <ins class="adsbygoogle"\
         style="display:block"\
         data-ad-client="ca-pub-8319278784249076"\
         data-ad-slot="4711145363"\
         data-ad-format="auto"\
         data-full-width-responsive="true"></ins>';
    $scope.headerAdv = {imageUrl:'angularapp/assets/images/2.3.png',adLink:'https://www.sv-projects.org/adinathabodes',description:googleCode2}

    var headerAdListner = $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $scope.headerAdv = '';
        $scope.showHeaderAdd = true;
        $timeout(function(){
            $scope.headerAdv = {imageUrl:'angularapp/assets/images/2.3.png',adLink:'https://www.sv-projects.org/adinathabodes',description:googleCode2};
            $scope.showHeaderAdd = false;
        },100)
    });
    $scope.$on("$destroy", headerAdListner);

    var date = new Date();
    $scope.today = $filter('date')(date, "yyyy-MM-dd");
    var token = $cookies.get('token');
    $rootScope.token = token;
    if (navigator.userAgent.toString().search('Android') >= 0 || navigator.userAgent.toString().search('iPhone') >= 0 || navigator.userAgent.toString().search('iPad') >= 0) {
        $scope.isMobile = true;
    } else {
        $scope.isMobile = false;
    }
    if($state.current.url == '^'){
         if ($rootScope.token != null && $rootScope.token != "" && $rootScope.token != undefined) {
            $scope.isLoggedinUser = true
            vm.user = userService.getLoggedinUserInfo();
            if (vm.user.profile_pic !== '') {
                vm.userImg = GENERAL_CONFIG.app_base_url + GENERAL_CONFIG.profileImg_base_url + vm.user.profile_pic;
            }
            isImageExistService.isImage(vm.userImg).then(function(isExist) {
                if (!isExist) {
                    vm.userImg = 'angularapp/assets/images/profile_avt106_106.png';
                }
            });
        } else {
            $scope.isLoggedinUser = false
        }
    }
    /* Update username and profile pic in header on state change after login */
    $scope.$on("$stateChangeSuccess", function() {
        if ($rootScope.token != null && $rootScope.token != "") {
            $scope.isLoggedinUser = true
            vm.user = userService.getLoggedinUserInfo();
            if (vm.user.profile_pic !== '') {
                vm.userImg = GENERAL_CONFIG.app_base_url + GENERAL_CONFIG.profileImg_base_url + vm.user.profile_pic;
            }
            isImageExistService.isImage(vm.userImg).then(function(isExist) {
                if (!isExist) {
                    vm.userImg = 'angularapp/assets/images/profile_avt106_106.png';
                }
            });
        } else {
            $scope.isLoggedinUser = false
        }
    })

    /* Update username and profile pic in header on user profile update */
    $rootScope.$on('refreshUserHeaderDetail', function(event, data) {
        if (data) {
            vm.user = userService.getLoggedinUserInfo();
            if (vm.user.profile_pic !== '') {
                vm.userImg = GENERAL_CONFIG.app_base_url + GENERAL_CONFIG.profileImg_base_url + vm.user.profile_pic;
            }
        }
    });

    $scope.redirectToHeader = function() {
        window.open($scope.baseUrl, '_self');
        
    }

    /*For toggle global search input box*/
    $scope.toggleSearchBox = function($event, name) {
        vm.globalSearchName = "";
        if (vm.addSearchBox) {
            angular.element($event.target.previousElementSibling).addClass('ng-hide');
            vm.addSearchBox = false;
        } else {
            vm.addSearchBox = true;
        }
        //$scope.$apply();
        angular.element('#stockFundSearch').focus();
    };
    /*For api search add $http call method, call back issue , service not work for this search functionality.*/
    /*Return stock search result*/
    vm.showHistory = true;
    $scope.searchStock = function(searchName) {
        $scope.curretUrl = $state.current.url;
        if (searchName && searchName.length > 2)
            return $http.get(GENERAL_CONFIG.app_base_url + 'ws/stock/search_master_tags/?search=' + searchName).then(function(data) {
                var resArray = data.data.response;
                var stockArr = [];
                var fundArr = [];
                var newsArr = [];
                var getFund = [];
                var getStock = [];
                var getNews = [];
                angular.forEach(resArray, function(value, key){
                    if (resArray[key].type == 'stock'){
                        stockArr.push(value);
                    }else if(resArray[key].type == 'fund'){
                        fundArr.push(value);
                    }else{
                        newsArr.push(value);
                    }
                });
               
                if(stockArr.length == 0 && fundArr.length == 0){
                    data.data.response = newsArr.slice(0, 9);
                }else if(newsArr.length == 0 && fundArr.length == 0){
                    data.data.response = stockArr.slice(0, 9);
                }else if(newsArr.length == 0 && stockArr.length == 0){
                    data.data.response = fundArr.slice(0, 9);
                }else if(stockArr.length == 0){
                    if(fundArr.length > 3){
                        getFund  = fundArr.slice(0, 4);
                        getNews = newsArr.slice(0, 5);
                        data.data.response = getFund.concat(getNews);
                    }else if(fundArr.length <= 3){
                        getFund  = fundArr;
                        getNews = newsArr.slice(0, 10 - parseInt(fundArr.length));
                        array_merge(getFund, getNews);
                        data.data.response = getFund;
                    }
                }else if(fundArr.length == 0){
                    if(stockArr.length > 3){
                        getStock  = stockArr.slice(0, 4);
                        getNews = newsArr.slice(0, 5);
                        data.data.response = getStock.concat(getNews);
                    }else if(stockArr.length <= 3){
                        getStock  = stockArr;
                        getNews = newsArr.slice(0, 10 - parseInt(fundArr.length));
                        data.data.response = getStock.concat(getNews);
                    }
                }else if(newsArr.length == 0){
                    if(stockArr.length > 3){
                        getStock  = stockArr.slice(0, 4);
                        getFund = fundArr.slice(0, 5);
                        data.data.response = getStock.concat(getFund);
                    }else if(stockArr.length <= 3){
                        getStock  = stockArr;
                        getFund = getFund.slice(0, 10 - parseInt(stockArr.length));
                        data.data.response = getStock.concat(getFund);
                    }
                }else{
                    if(stockArr.length > 3 && fundArr.length < 3 && newsArr.length < 3){
                        getFund = fundArr.slice(0, 3);
                        getNews = newsArr.slice(0, 3);
                        var remainResult = parseInt(getFund.length) + parseInt(getNews.length);
                        getStock  = stockArr.slice(0, 10 - parseInt(remainResult));
                        data.data.response = getStock.concat(getFund,getNews);
                    }else if(stockArr.length < 3 && fundArr.length > 3 && newsArr.length < 3){
                        getStock = stockArr.slice(0, 3);
                        getNews = newsArr.slice(0, 3);
                        var remainResult = parseInt(getStock.length) + parseInt(getNews.length);
                        getFund  = fundArr.slice(0, 10 - parseInt(remainResult));
                        data.data.response = getStock.concat(getFund,getNews);
                    }else if(stockArr.length < 3 && fundArr.length < 3 && newsArr.length > 3){
                        getStock = stockArr.slice(0, 3);
                        getFund = fundArr.slice(0, 3);
                        var remainResult = parseInt(getStock.length) + parseInt(getFund.length);
                        getNews  = newsArr.slice(0, 10 - parseInt(remainResult));
                        data.data.response = getStock.concat(getFund,getNews);
                    }else if(stockArr.length > 3 && fundArr.length > 3 && newsArr.length < 3){
                        getNews = newsArr.slice(0, 3);
                        if(getNews.length == 1){
                            getFund = fundArr.slice(0, 4);
                            getStock = stockArr.slice(0, 4);
                        }
                        else{
                            getFund = fundArr.slice(0, 4);
                            getStock = stockArr.slice(0, 3);
                        }
                        data.data.response = getStock.concat(getFund,getNews);
                    }else if(stockArr.length < 3 && fundArr.length > 3 && newsArr.length > 3){
                        getStock = stockArr.slice(0, 3);
                        if(getStock.length == 1){
                            getFund = fundArr.slice(0, 4);
                            getNews = newsArr.slice(0, 4);
                        }
                        else{
                            getFund = fundArr.slice(0, 3);
                            getNews = newsArr.slice(0, 4);
                        }
                        data.data.response = getStock.concat(getFund,getNews);
                    }else if(stockArr.length > 3 && fundArr.length < 3 && newsArr.length > 3){
                        getFund = fundArr.slice(0, 3);
                        if(getStock.length == 1){
                            getStock = stockArr.slice(0, 4);
                            getNews = newsArr.slice(0, 4);
                        }
                        else{
                            getStock = stockArr.slice(0, 3);
                            getNews = newsArr.slice(0, 4);
                        }
                        data.data.response = getStock.concat(getFund,getNews);
                    }else{
                        getStock  = stockArr.slice(0, 3);
                        getFund = fundArr.slice(0, 3);
                        getNews = newsArr.slice(0, 3);
                        data.data.response = getStock.concat(getFund,getNews);
                    }
                }
                    if(data.data.response.length == 0){
                        $scope.noSearchResult = true;
                    }else{
                        $scope.noSearchResult = false;
                    }
                return data.data.response.map(function(item) {
                    if (item.type == 'stock')
                        item.result = item.company_name.substring(0, 30) + '  ' + item.symbol + ' ' + item.bse_code + ' ' + item.isin_number;
                    else
                        item.result = item.company_name.substring(0, 50);
                    return item;
                });
            });
        else {
            var favoriteCookie = $cookies.get('recentlySearch');
            if (favoriteCookie && vm.addSearchBox && vm.showHistory) {
                return JSON.parse(favoriteCookie).reverse().slice(0, 5);
            } else {
                return false;
            }
        }
    }
    /*Goto stock, commodity, fund details page*/
    $scope.goToSearchContent = function(param, $event) {
        vm.showHistory = false;
        var favoriteCookie = $cookies.get('recentlySearch');
        if (favoriteCookie && vm.addSearchBox) {
            var test = JSON.parse(favoriteCookie);
            if (test.length > 0) {
                var push = false;
                test.forEach(function(item) {
                    if (item.company_code == param.company_code) {
                        push = true;
                    }
                });
                if (!push && param.type != 'news') {
                    test.push(param);
                }
                $cookies.put('recentlySearch', JSON.stringify(test));
            } else {
                var newarray = [];
                if(param.type != 'news'){
                   newarray.push(param); 
                }
                $cookies.put('recentlySearch', JSON.stringify(newarray));
            }
        } else {
            var newarray = [];
            if(param.type != 'news'){
               newarray.push(param); 
            }
            $cookies.put('recentlySearch', JSON.stringify(newarray));
        }

        vm.globalSearchName = "";
        if($state.current.url == '^'){
            if (param.type == 'news') {
                $rootScope.scroll();
                if(param.article_url=='')
                {
                    
                    window.location.href = $scope.baseUrl +'tag/'+ param.company_name.toLowerCase();
                }
                else
                {
                    window.location.href = $scope.baseUrl + param.article_url;
                }
            } else if (param.type == 'stock') {
                $rootScope.scroll();
                window.location.href = $scope.baseUrl +'stock/graphic-overview/bse/'+ param.company_code;
            }else if(param.type == 'fund'){
                $rootScope.scroll();
                window.location.href = $scope.baseUrl +'fund/nav/' + param.company_code;
            }else if(param.type == 'blogger'){
                $rootScope.scroll();
                window.location.href = $scope.baseUrl +'author/' + encodeURI(param.company_name);
            } 
        }else{
            if (param.type == 'fund') {
                $rootScope.scroll();
                $state.go('root.parent.fund.nav', ({ 'Mf_ID': param.company_code }));
            } else if (param.type == 'stock') {
                $rootScope.scroll();
                $state.go('root.marketGraphOverview.bse', ({ 'CategoryId': param.company_code }), { reload: true });
            }else if(param.type == 'news'){
                $rootScope.scroll();
                if(param.article_url=='')
                {
                    $state.go('tagList',({ 'tagName': param.company_name }), {reload: true});
                }
                else
                {
                    window.location.href = $scope.baseUrl + param.article_url;
                }
                
            }else if(param.type == 'blogger'){
                $rootScope.scroll();
                $state.go('blogger',({ 'bloggerName': param.company_name }), {reload: true});
            } 
        }
        
        /*hide drop down*/
        angular.element(angular.element($event)[0].currentTarget.nextElementSibling).addClass('ng-hide');
    }
    /*Show dropdown when mouseout from menu*/
    $scope.getElement = function(eventName, event) {
        var isClass = $('header').hasClass('.sticky-header');
        if (eventName == "click") {
            angular.element(".hide-dropdown-menu").css('display', 'none');
        } else {
            angular.element(".hide-dropdown-menu").css('display', 'none');
            if (event.target.parentNode.nextElementSibling) {
                event.target.parentNode.nextElementSibling.style.display = "block";
            }
        }
    };
    /*Hide dropdown when mouseout from menu*/
    $scope.hideElement = function(event) {
       // $('body').removeClass('disable-scroll');
        angular.element("#dropdown-menu").css('display', 'none');
        angular.element(".hide-dropdown-menu").css('display', 'none');
    }
    /* Top Menu */
    $scope.baseUrl = GENERAL_CONFIG.app_base_url;
    if(!angular.element('.homepage').length && !angular.element('.article-page-details').length) 
    {
        var shareLinkData = configDataAll.get({}, function() {
        var result = shareLinkData.response;
        //console.log( result );
        angular.forEach(result, function(value, key){
            if (result[key].name == 'facebook_page'   ){
                $scope.facebookLink =result[key].value;
            }
            if ( result[key].name == 'tweeter_account' ){
                $scope.twitterLink =result[key].value;
            } 
            });
        });

    }
    
    $scope.googlePlusLink = '';
    $scope.linkedInLink = '';
    /*Form mutual fund menu item*/
    $scope.mutualFundSubMenuDesk = [{
            'id': 1,
            'name': 'Mutual Funds',
            'state': 'categories({categoryID: 177, categoryName: "mutual-funds"})',
            'stateName': 'categories',
            'satateParam': { categoryID: 177 }
        },
        {
            'id': 2,
            'name': 'MF Tracker',
            'state': 'root.parent.tracker.id.return({"id":2})',
            'stateName': 'root.parent.tracker.id.return',
            'satateParam': { "id": 2 }
        },
    ]
    var mutualFundSubMenuMobile = [{
            'child_id': 1,
            'name': 'Mutual Funds',
            'state': 'categories({categoryID: 177, categoryName:"mutual-funds"})',
            'stateName': 'categories',
            'satateParam': { categoryID: 177 }
        },
        {
            'child_id': 2,
            'name': 'MF Tracker',
            'state': 'root.parent.tracker.id.return({"id":2})',
            'stateName': 'root.parent.tracker.id.return',
            'satateParam': { "id": 2 }
        },
    ];
    $scope.deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if ($scope.deviceWidth < 768) {
        $scope.mobileMenu = true;
        /*var data = mobileMenuData.get(function() {
            $scope.menuList = data.respnose.Categories;
            angular.forEach($scope.menuList, function(item) {
                if (item[0].parent_id == '177') {
                    item.push(mutualFundSubMenuMobile[0]);
                    item.push(mutualFundSubMenuMobile[1]);
                }
                if (item[0].parent_id == '125') {
                    // Push Market Hone, News Home for mobile menu
                    //item.splice(1, 0, customHomeSubMenuMobile[1]);
                    //item.splice(1, 0, customHomeSubMenuMobile[0]);
                }
            });
        });*/
    } else {
        //console.log("Desktop");
        $scope.mobileMenu = false;
        /*var data = menuData.get(function() {
            $scope.menuList = data.respnose;
            $scope.menuList = $scope.menuList.map(function(item) {
                if (item.id == '177') {
                    item.subMenu = $scope.mutualFundSubMenuDesk;
                    item.is_subcategory = "1";
                }
                return item;
            });
        });*/
    }
    //var promises = [];
    $scope.todayDate = new Date();
    /* Sub Menu */
    $scope.category_id = $stateParams.categoryID;
    $scope.showSubMenu = function(categoryID) {
        if (!this.isLoaded) {
            $scope.loadSubMenu(categoryID);
        }
        this.isLoaded = true;
    };
    $scope.loadSubMenu = function(categoryID) {
        if (categoryID == '177') {
            categoryListData.get({
                id: categoryID
            }, function(resObject) {
                //$log.log("newsObject : ", resObject);
                if (resObject.response) {
                    if (resObject.response.length > 0) {
                        /* Show only first 5 news */
                        $scope.subCategoryArticle = resObject.response.slice(0, 4);
                        for (var i = 0; i < $scope.menuList.length; i++) {
                            if ($scope.menuList[i].id == categoryID) {
                                $scope.menuList[i].subMenuArticle = $scope.subCategoryArticle;
                            }
                        }
                    } else {
                        $scope.subCategoryArticle = [];
                    }
                } else {
                    $scope.subCategoryArticle = [];
                }
            }, function(error) {
                $log.log(error);
            });
        } else if (categoryID == '125') {
            subCategoryMenuData.get({
                id: categoryID
            }, function(resObject) {
                if (resObject.message != "No record Found") {
                    var subCategoryList = resObject.response.sub_category_list;
                    $scope.subCategoryList = subCategoryList;
                    $scope.subCategoryArticle = resObject.response.sub_category_article;
                    /* Match categoryId from top menu and append subCategoryList to match item*/
                    for (var i = 0; i < $scope.menuList.length; i++) {
                        //console.log($scope.menuList[i].id);
                        if ($scope.menuList[i].id == categoryID) {
                            //console.log("match");
                            $scope.menuList[i].subMenu = $scope.subCategoryList;
                            $scope.menuList[i].subMenuArticle = $scope.subCategoryArticle;
                        }
                    }
                }
            });
        } else {
            var subMenudata = subCategoryMenuData.get({
                id: categoryID
            }, function() {
                if (subMenudata.message != "No record Found") {
                    $scope.subCategoryList = subMenudata.response.sub_category_list;
                    $scope.subCategoryArticle = subMenudata.response.sub_category_article;
                    /* Match categoryId from top menu and append subCategoryList to match item*/
                    for (var i = 0; i < $scope.menuList.length; i++) {
                        //console.log($scope.menuList[i].id);
                        if ($scope.menuList[i].id == categoryID) {
                            //console.log("match");
                            $scope.menuList[i].subMenu = $scope.subCategoryList;
                            $scope.menuList[i].subMenuArticle = $scope.subCategoryArticle;
                        }
                    }
                }
            });
        }

    };

    $scope.showMarketSubMenu = function(categoryID) {

        $scope.marketCategoryList = [{
                'id': 1,
                'name': 'Overview',
                'state': 'root.marketHome'
            },
            {
                'id': 2,
                'name': 'Stock',
                'state': 'root.stock.home.gainer'
            },
            {
                'id': 3,
                'name': 'Indices', // 'Index Page' renamed to 'Indices'
                'state': 'root.stock.index.id({exchangeType:"BSE",indexId:20558})'
            },
            {
                'id': 4,
                'name': 'Announcements',
                'state': 'root.stock.corporateActions.splits'
            },
            {
                'id': 4,
                'name': 'F&O',
                'state': 'root.stock.future'
            }
        ]
        categoryListData.get({
            id: 131
        }, function(resObject) {
            //$log.log("newsObject : ", resObject);
            if (resObject.response) {
                if (resObject.response.length > 0) {
                    /* Show only first 5 news */
                    $scope.subCategoryArticle = resObject.response.slice(0, 4);
                } else {
                    $scope.subCategoryArticle = [];
                }
            } else {
                $scope.subCategoryArticle = [];
            }
            //$log.log("$scope.subCategoryArticle : ",$scope.subCategoryArticle);
        }, function(error) {
            $log.log(error);
        });
    };

    $scope.showNewsSubMenu = function(category_id) {
        $scope.newsCategoryList = [{
                'id': 1,
                'name': 'Stock',
                'categoryID': 131,
                'category_name': 'stock-news'
            },
            {
                'id': 2,
                'name': 'Commodities',
                'categoryID': 129,
                'category_name': 'commodities'
            },
            {
                'id': 3,
                'name': 'Mutual Funds',
                'categoryID': 177,
                'category_name': 'mutual-funds'
            },
            {
                'id': 4,
                'name': 'Taxation', // 'Index Page' renamed to 'Indices'
                'categoryID': 185,
                'category_name': 'taxation'
            },
            {
                'id': 5,
                'name': 'Global',
                'categoryID': 191,
                'category_name': 'global'
            },
            {
                'id': 6,
                'name': 'Current Affairs',
                'categoryID': 126,
                'category_name': 'current-affairs'
            },
            {
                'id': 7,
                'name': 'F&O',
                'categoryID': 178,
                'category_name': 'f-o'
            },
            {
                'id': 8,
                'name': 'Forex',
                'categoryID': 175,
                'category_name': 'forex'
            }
        ]
        categoryListData.get({
            id: category_id
        }, function(resObject) {
            //$log.log("newsObject : ", resObject);
            if (resObject.response) {
                if (resObject.response.length > 0) {
                    /* Show only first 5 news */
                    $scope.subCategoryArticle = resObject.response.slice(0, 4);
                } else {
                    $scope.subCategoryArticle = [];
                }
            } else {
                $scope.subCategoryArticle = [];
            }
            //$log.log("$scope.subCategoryArticle : ",$scope.subCategoryArticle);
        }, function(error) {
            $log.log(error);
        });
    };

    $scope.showPlusSubMenu = function(categoryID) {

        $scope.plusCategoryList = [{
                'id': 1,
                'name': 'Technologies',
                'categoryID': 179,
                'category_name': 'technologies'
            },
            {
                'id': 2,
                'name': 'Gadgets',
                'categoryID': 180,
                'category_name': 'gadgets'
            },
            {
                'id': 3,
                'name': 'Auto', // 'Index Page' renamed to 'Indices'
                'categoryID': 181,
                'category_name': 'auto'
            },
            {
                'id': 4,
                'name': 'Life Style',
                'categoryID': 182,
                'category_name': 'life-style'
            },
            {
                'id': 5,
                'name': 'Astrology',
                'categoryID': 193,
                'category_name': 'Astrology'
            },
        ]
        categoryListData.get({
            id: categoryID
        }, function(resObject) {
            //$log.log("newsObject : ", resObject);
            if (resObject.response) {
                if (resObject.response.length > 0) {
                    /* Show only first 5 news */
                    $scope.subCategoryArticle = resObject.response.slice(0, 4);
                } else {
                    $scope.subCategoryArticle = [];
                }
            } else {
                $scope.subCategoryArticle = [];
            }
            //$log.log("$scope.subCategoryArticle : ",$scope.subCategoryArticle);
        }, function(error) {
            $log.log(error);
        });
    };

    $scope.showMfSubMenu = function(categoryID) {

        $scope.mfCategoryList = [{
                'id': 1,
                'name': 'Mutual Funds',
                'state': 'root.parent.fundHome({type:"equity",categoryId:"all",return:"all"})',
                'stateName': 'categories',
                'satateParam': { categoryID: 177 }
            },
            {
                'id': 2,
                'name': 'MF Tracker',
                'state': 'root.parent.tracker.id.return({"id":2})',
                'stateName': 'root.parent.tracker.id.return',
                'satateParam': { "id": 2 }
            }
        ]
        categoryListData.get({
            id: categoryID
        }, function(resObject) {
            //$log.log("newsObject : ", resObject);
            if (resObject.response) {
                if (resObject.response.length > 0) {
                    /* Show only first 5 news */
                    $scope.subCategoryArticle = resObject.response.slice(0, 4);
                } else {
                    $scope.subCategoryArticle = [];
                }
            } else {
                $scope.subCategoryArticle = [];
            }
            //$log.log("$scope.subCategoryArticle : ",$scope.subCategoryArticle);
        }, function(error) {
            $log.log(error);
        });
    };



    function logout() {
        return userService.logout();
    }
});

app.controller('footerController', function($timeout,$stateParams, MetaService, $state, $rootScope, $scope, entertainmentData, footerData, configDataAll ,configData, GENERAL_CONFIG, $cookies) {
    var vm = this;
    vm.showLink = false;
    vm.openDeepLink = openDeepLink;
    vm.closeDeeplink = closeDeeplink;
    $rootScope.metaService = MetaService;
    $scope.todayDate = new Date();
    var userAgent = navigator.userAgent;
    if (navigator.userAgent.toString().search('Android') >= 0 || navigator.userAgent.toString().search('iPhone') >= 0) {
        var downloadApplink = $cookies.get('downloadApplink');
        if (downloadApplink && downloadApplink != '') {
            vm.showLink = false;
        } else {
            vm.showLink = true;
        }
    } else {
        vm.showLink = false;
    }
    if ($state.current.url == '/privacy-policy') {
        var metaTitle = 'Privacy Policy - Vyaapar Samachar';
        var metaDiscription = 'Privacy Policy';
        var metaKeyword = 'Privacy Policy';
        var metaImage = 'angularapp/assets/images/ms-icon-16x7.png';
        $rootScope.metaService.set(metaTitle, metaDiscription, metaKeyword, metaImage);
    } else if ($state.current.url == '/terms-and-conditions') {
        var metaTitle = 'Terms and Condition - Vyaapaar Samachar';
        var metaDiscription = 'Terms and Conditions';
        var metaKeyword = 'Terms and Conditions, terms, condition';
        var metaImage = 'angularapp/assets/images/ms-icon-16x7.png';
        $rootScope.metaService.set(metaTitle, metaDiscription, metaKeyword, metaImage);
    }

    $scope.scroll = $rootScope.scroll;
    $scope.twitter_loading = false;
    if (navigator.userAgent.toString().search('Android') >= 0 || navigator.userAgent.toString().search('iPhone') >= 0 || navigator.userAgent.toString().search('iPad') >= 0) {
        $scope.twitterTimer = 12000;
    } else {
        $scope.twitterTimer = 5000;
    }
    $timeout(function() {
        $scope.twitter_loading = true;
    }, $scope.twitterTimer);
    if(!angular.element('.homepage').length && !angular.element('.article-page-details').length)
    {
        var shareLinkData = configDataAll.get({}, function() {
            var result = shareLinkData.response;
            angular.forEach(result, function(value, key){
                if (result[key].name == 'facebook_page'   ){
                    $scope.facebookLink =result[key].value;
                }
                if ( result[key].name == 'tweeter_account' ){
                    $scope.twitterLink =result[key].value;
                    $timeout(function() {
                        $scope.twitter_loading = true;
                    }, $scope.twitterTimer);
                } 
            });
        });
    }
    
    /*var generalData = footerData.get({
        name: 'general'
    }, function() {
        $scope.generalTab = generalData.response;
    });
    var marketUpdateData = footerData.get({
        name: 'market'
    }, function() {
        $scope.marketUpdateTab = marketUpdateData.response;
    });*/
    $scope.personalTab ='';

    $scope.googlePlusLink ='';

    $scope.footerMenuSection1 = [
        {
            'id': 9,
            'name': 'Share Market',
            'state': 'share-market/share-market-news-india'
        },
        {
            'id': 10,
            'name': 'Commodities',
            'state': 'commodities/commodity-news-india'
        },
        {
            'id': 12,
            'name': 'Mutual Fund',
            'state': 'mutual-funds/mutual-fund-news-india'
        },
        {
            'id': 13,
            'name': 'Krishi News',
            'state': 'mandi-bhav/krishi-news-gujarat'
        },

    ];

    $scope.footerCurrentAffairsMenuSection = [
        {
            'id': 14,
            'name': 'Gujarat Samachar',
            'state': 'current-affairs/gujarat-samachar-news'
        },
        {
            'id': 15,
            'name': 'India News',
            'state': 'current-affairs/india-news'
        },
        {
            'id': 16,
            'name': 'World News',
            'state': 'current-affairs/world-news'
        },
        {
            'id': 17,
            'name': 'Mandi Bhav',
            'state': 'apmc/cereals/all'
        },
    ];

    $scope.footerPersonalFinanceMenuSection = [
        {
            'id': 17,
            'name': 'Insurance',
             'state': 'personal-finance/insurance'
        },
        {
            'id': 18,
            'name': 'Mutual Funds',
             'state': 'personal-finance/mutual-fund'
        },
        {
            'id': 19,
            //'name': 'Taxation',
            'name': 'Tax Savings',
            'state': 'personal-finance/tax-savings'
        },
        {
            'id': 20,
            'name': 'Small Savings',
            'state': 'personal-finance/small-savings'
        },
    ];
    $scope.footerTrendsMenuSection = [
        {
            'id': 22,
            'name': 'Lifestyle',
            'state': 'trends/lifestyle-news-india'
        },
        {
            'id': 23,
            'name': 'Box Office',
            /*'name': 'Entertainment',*/
            'state': 'trends/entertainment-news-india'
        },
        {
            'id': 24,
            'name': 'Cricket',
            'state': 'trends/cricket-news-india'
        },
        {
            'id': 25,
            'name': 'Sports',
            'state': 'trends/sports-news-india'
        },
        {
            'id': 26,
            'name': 'Rashifal',
            'state': 'trends/astrology-news-india'
        },
        {
            'id': 27,
            'name': 'Gadgets',
            'state': 'trends/gadget-news-india'
        },
        {
            'id': 28,
            'name': 'Technology',
            'state': 'trends/technology-news-india'
        },
        {
            'id': 29,
            'name': 'Auto',
            'state': 'trends/auto-news-india'
        },
        {
            'id': 30,
            'name': 'Health',
            'state': 'trends/health-news-india'
        },
    ];

    $scope.footerSmallBusinessMenuSection = [
        {
            'id': 31,
            'name': 'GST',
            'state': 'small-business/gst'
        },
        {
            'id': 32,
            'name': 'Start Ups',
            'state': 'small-business/startup'
        },
        {
            'id': 33,
            'name': 'MSME',
            'state': 'small-business/msmes'
        },
        {
            'id': 34,
            'name': 'Money and Banking',        
            'state': 'small-business/money-and-banking'
        },
        {
            'id': 35,
            'name': 'Opinion',
            'state': 'small-business/business-opinion'

        }
    ];

    $scope.footerMenuSection3 = [{
            'id': 9,
            'name': 'News',
            'state': 'categories({categoryID: 125, categoryName:"news"})'
        },
        {
            'id': 10,
            'name': 'Plus',
            'state': 'categories({categoryID: 134, categoryName:"plus"})'
        },
        {
            'id': 11,
            'name': 'Taxation',
            'state': 'categories({categoryID: 185, categoryName:"taxation"})'
        },
        {
            'id': 12,
            'name': 'Global',
            'state': 'categories({categoryID: 191, categoryName:"global"})'
        },
        {
            'id': 13,
            'name': 'Current Affairs',
            'state': 'categories({categoryID: 126, categoryName:"current-affairs"})'
        },
        {
            'id': 14,
            'name': 'F&O',
            'state': 'categories({categoryID: 178, categoryName:"f-o"})'
        },
        {
            'id': 15,
            'name': 'Personal Finance',
            'state': 'categories({categoryID: 192, categoryName:"personal-finance"})'
        },
        {
            'id': 16,
            'name': 'Opinion',
            'state': 'root.opinion'
        },

    ]

    function openDeepLink() {
        var id = '';
        if ($rootScope.$state.params && $rootScope.$state.params.articleID) {
            id = $rootScope.$state.params.articleID;
        }
        //console.log($state.current.url);
        if ($state.current.url == '^') {
            var currentCategoryUrl = window.location.href;
            var splitUrl = currentCategoryUrl.split('/');
            if (splitUrl[2] == 'www.vyaapaarsamachar.com' && splitUrl[3] != 'development') {
                id = splitUrl[6];
            }else if(splitUrl[3] == 'development'){
                id = splitUrl[7];
            } else {
                id = splitUrl[7];
            }
        }  
        var options = {
            fallback: GENERAL_CONFIG.app_base_url,
            url: 'myvyaaparapp://newsId=' + id,
            ios_store_link: 'https://itunes.apple.com/us/app/vyaapaar-samachar/id1247814420?mt=8',
            android_package_name: 'com.vyaapaarsamachar'
        };
        /*set cookie for show only one time deeplink/download app model*/
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);
        $cookies.put('downloadApplink', 'true', { 'expires': expireDate });
        vm.showLink = false;
        deeplink.deepone(options);
    }

    function closeDeeplink() {
        /*set cookie for show only one time deeplink/download app model*/
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);
        $cookies.put('downloadApplink', 'true', { 'expires': expireDate });
        vm.showLink = false;
    }
});