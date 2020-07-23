angular.module('vyaapaarSamachar').run(function($timeout, $interval, $rootScope, $state, $stateParams, $window, MetaService, GENERAL_CONFIG, $location) {
    //$FB.init('978195322278706');
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.facbook_app_ID = GENERAL_CONFIG.facebook_appid;
    $rootScope.viewLoading;
    $rootScope.isLoadedJS;
    $rootScope.stopLoadingData = true;
    $rootScope.loading = false;
    $rootScope.counter = 0;
    $rootScope.showAdvanceDeclineBlock = true;
    $rootScope.isArticlePage = false;
    $rootScope.metaservice = MetaService;
    $rootScope.more = function() {
        $rootScope.stopLoadingData = false;
        $rootScope.loading = true;
    }
    $rootScope.scroll = function() {
        window.scrollTo(0, 0);
    };


    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $rootScope.isArticlePage = false;
        $rootScope.stopLoadingData = true;
        $rootScope.loading = false;
        $rootScope.counter = 0;
        $rootScope.version = GENERAL_CONFIG.file_version;
            $rootScope.currentUrl = $location.absUrl();
        var currentWebUrl = $state.current.url;
        if(fromState.url == '^'){
            $rootScope.isArticlePage = true;
        }
        var currentState = $state.current.name;
        if(currentWebUrl.includes('/stats/') || currentState.includes('commodities') || currentWebUrl.includes('/future') || currentWebUrl.includes('/option') || currentState.includes('forex')){
            $rootScope.showAdvanceDeclineBlock = false;
        }else{
             $rootScope.showAdvanceDeclineBlock = true; 
        }
    });
});
angular.module('vyaapaarSamachar').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$ocLazyLoadProvider', '$httpProvider', '$base64', '$authProvider', 'GENERAL_CONFIG','$qProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider, $httpProvider, $base64, $authProvider, GENERAL_CONFIG,$qProvider) {
      $qProvider.errorOnUnhandledRejections(false);
    if (GENERAL_CONFIG.is_development && GENERAL_CONFIG.is_development != '') {
        var google_url = '/development/ws/portfolio/social_signup/google_signup',
            facebook_url = '/development/ws/portfolio/social_signup/facebook_signup',
            linkedin_url = '/development/ws/portfolio/social_signup/linkedin_signup',
            twitter_url = '/development/ws/portfolio/social_signup/twitter_signup'
    } else {
        var google_url = '/ws/portfolio/social_signup/google_signup',
            facebook_url = '/ws/portfolio/social_signup/facebook_signup',
            linkedin_url = '/ws/portfolio/social_signup/linkedin_signup',
            twitter_url = '/ws/portfolio/social_signup/twitter_signup'
    }
    $authProvider.google({
        url: google_url,
        redirectUri: GENERAL_CONFIG.app_base_url + 'ws/portfolio/social_signup/google_signup',
        clientId: '198754811299-h6d2f6fmjbm1e3snvaeocbdstlh9afsj.apps.googleusercontent.com'
    });
    $authProvider.facebook({
        url: facebook_url,
        redirectUri: GENERAL_CONFIG.app_base_url + 'ws/portfolio/social_signup/facebook_signup',
        clientId: '200928077061867'
    });
    $authProvider.linkedin({
        url: linkedin_url,
        redirectUri: GENERAL_CONFIG.app_base_url + 'ws/portfolio/social_signup/linkedin_signup',
        clientId: '81dl5z81iivrtl'
    });
    $authProvider.twitter({
        url: twitter_url,
        redirectUri: GENERAL_CONFIG.app_base_url + 'ws/portfolio/social_signup/twitter_signup',
        clientId: '736534969909137408-t8Rzrtawe553dmFpU32eMgSVh5Rfa5d'
    });
    var auth = $base64.encode("admin:1234");
    $httpProvider.defaults.headers.common['Authorization'] = 'Basic ' + auth;
    $locationProvider.html5Mode(true).hashPrefix('!');
    var currentActiveUrl = window.location.href;
    if (currentActiveUrl.includes('/vs-investigation-series/') == true ||   currentActiveUrl.includes('/top-head/') == true ||  currentActiveUrl.includes('/news/') == true || currentActiveUrl.includes('/whatsapp/') == true || currentActiveUrl.includes('/commodities/') == true || currentActiveUrl.includes('/current-affairs/') == true || currentActiveUrl.includes('/forex/') == true || 
        currentActiveUrl.includes('/mandi-bhav/') == true || currentActiveUrl.includes('/mutual-funds/') == true || currentActiveUrl.includes('/personal-finance/') == true ||
        currentActiveUrl.includes('/share-market/') == true || currentActiveUrl.includes('/small-business/') == true || currentActiveUrl.includes('/trends/') == true
        ) {
 
    }else{
        if(!currentActiveUrl.includes('googleusercontent')){
            $urlRouterProvider.otherwise('/404');
        }
        else{
        }
    } 

    var tplName ='angularapp/views/default.html';
    var marketWatchTplName ='angularapp/views/partial_views/marketWatch.html';
    if(angular.element('.homepage').length > 0)
    {
        tplName =  'angularapp/views/home.html';
        marketWatchTplName =  '';
    }
    var version = GENERAL_CONFIG.file_version;
    $stateProvider
        .state('root', {
            abstract: true,
            views: {
                '@': {
                    templateUrl: 'angularapp/views/partial_views/common.html' + version
                },
                'header@root': {
                    templateUrl: 'angularapp/views/partial_views/header.html' + version,
                    controller: 'headerController as vm'
                },
                'footer@root': {
                    templateUrl: 'angularapp/views/partial_views/footer.html' + version,
                    controller: 'footerController as vm'
                }
            },
            ncyBreadcrumb: {
                skip: true
            }
        })
        .state('categories', {
            url: '/:share/categories/:categoryID/:categoryName',
            parent: 'root',
            views: {
                '': {
                    templateUrl: 'angularapp/views/categories.html' + version,
                    controller: 'categoriesController'
                },
                'categoryMainArticle@categories': {
                    templateUrl: 'angularapp/views/partial_views/categoryMainArticle.html' + version
                },
                'popularNews@categories': {
                    templateUrl: 'angularapp/views/partial_views/popularNews.html' + version,
                    controller: 'popularNewsController'
                },
                'categoryArticleList@categories': {
                    templateUrl: 'angularapp/views/partial_views/categoryArticleList.html' + version
                },
                'Gallery@categories': {
                    templateUrl: 'angularapp/modules/stock/main/partial-views/gallary/gallery.html' + version,
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'angularapp/controllers/categoriesController.js' + version,
                            'angularapp/controllers/commonSliderOnRightSidebar.js' + version,
                        ]
                    });
                }] /*loadMyCtrl End*/
            },
            params: {
                /*Nonmandtory categoryName in url*/
               /* categoryName: {
                    value: null,
                    squash: true
                },*/
                share: { // Added for mobile application. They are passing one extra param while link share.
                    value: null,
                    squash: true
                }
            },
            data: {
                pageTitle: ''
            },
            ncyBreadcrumb: {
                label: "{{metaTitle}}"
            }
        })
        .state('blogger', {
            parent: 'root',
            url: '/author/:bloggerName',
            views: {
                '': {
                    templateUrl: 'angularapp/views/blogger.html' + version,
                    controller: 'bloggerController'
                },
                'bloggerContent@blogger': {
                    //templateUrl: 'angularapp/views/partial_views/bloggerContent.html' + version,
                    templateUrl: 'angularapp/views/partial_views/categoryMainArticle.html' + version
                    //controller: 'bloggerController'
                },
                'bloggerArticleList@blogger': {
                    templateUrl: 'angularapp/views/partial_views/categoryArticleList.html' + version,
                    //controller: 'bloggerController'
                },
                'popularNews@blogger': {
                    templateUrl: 'angularapp/views/partial_views/popularNews.html' + version,
                    controller: 'popularNewsController'
                },
                'Gallery@blogger': {
                    templateUrl: 'angularapp/modules/stock/main/partial-views/gallary/gallery.html' + version,
                }
            },
            data: { pageTitle: '' },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'angularapp/assets/libs/dirPagination.js' + version,
                            'angularapp/controllers/bloggerController.js' + version,
                            'angularapp/controllers/commonSliderOnRightSidebar.js' + version,
                        ]
                    });
                }] /*loadMyCtrl End*/
            },
        })
        .state('photogallary', {
            parent: 'root',
            url: '/photocategory/:categoryID',
            views: {
                '': {
                    templateUrl: 'angularapp/views/gallary.html' + version,
                    controller: 'gallaryListController'
                },
                'relatedGallary@photogallary': {
                    templateUrl: 'angularapp/views/partial_views/relatedGallary.html' + version
                },
                'relatedPhotoCategories@photogallary': {
                    templateUrl: 'angularapp/views/partial_views/relatedPhotoCategories.html' + version
                },
            },
            data: { pageTitle: '' },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'angularapp/controllers/photoGallaryController.js' + version,
                        ]
                    });
                }] /*loadMyCtrl End*/
            },
        })
        .state('photogallary.mainGallary', {
            url: '/gallary/:gallaryID',
            views: {
                'mainGallary': {
                    templateUrl: 'angularapp/views/partial_views/mainGallary.html' + version,
                    controller: 'mainGallaryController'
                },
            },
            data: { pageTitle: '' },
            ncyBreadcrumb: {
                label: "{{metaTitle}}"
            }
        })
        .state('videogallary', {
            parent: 'root',
            url: '/videocategory/:categoryID',
            views: {
                '': {
                    templateUrl: 'angularapp/views/gallary.html' + version,
                    controller: 'videoGallaryListController'
                },
                'relatedGallary@videogallary': {
                    templateUrl: 'angularapp/views/partial_views/relatedGallary.html' + version,
                },
                'relatedPhotoCategories@videogallary': {
                    templateUrl: 'angularapp/views/partial_views/relatedPhotoCategories.html' + version,
                },
            },
            data: { pageTitle: '' },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'angularapp/controllers/photoGallaryController.js' + version,
                        ]
                    });
                }] /*loadMyCtrl End*/
            },
        })
        .state('videogallary.mainVideoGallary', {
            url: '/gallary/:gallaryID',
            views: {
                'mainGallary': {
                    templateUrl: 'angularapp/views/partial_views/mainGallary.html' + version,
                    controller: 'mainVideoGallaryController'
                },
            },
            data: { pageTitle: '' },
            ncyBreadcrumb: {
                label: "{{metaTitle}}"
            }
        })
        .state('termsAndConditions', {
            url: '/terms-and-conditions',
            parent: 'root',
            data: { pageTitle: 'Terms And Conditions | ' },
            templateUrl: 'angularapp/views/terms-and-conditions.html' + version
        })
        .state('privacyPolicy', {
            url: '/privacy-policy',
            parent: 'root',
            data: { pageTitle: 'Privacy Policy | ' },
            templateUrl: 'angularapp/views/privacy-policy.html' + version
        })
        .state('not-found', {
            url: '/404',
            parent: 'root',
            data: { pageTitle: '404 | ' },
            templateUrl: 'angularapp/views/not-found.html' + version,
            controller: 'notFoundController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'angularapp/controllers/notFoundController.js' + version,
                        ]
                    });
                }]
            },
        })
        .state('rss-master', {
            url: '/rss-master',
            parent: 'root',
            data: { pageTitle: 'RSS | ' },
            templateUrl: 'angularapp/views/rss-master.html' + version,
            controller: 'rssMasterController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'angularapp/controllers/rssMasterController.js' + version,
                        ]
                    });
                }]
            },
        })
        .state('career', {
            parent: 'root',
            url: '/careers',
            views: {
                '': {
                    templateUrl: 'angularapp/views/career.html' + version,
                    controller: 'careerController as vm'
                },
            },
            data: { pageTitle: 'Career | ' },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'angularFileUpload',
                        name: 'ngGoogleRecaptcha',
                        files: [
                            'angularapp/assets/libs/angular-file-upload.min.js' + version,
                            'angularapp/assets/libs/ng-google-recaptcha.js' + version,
                            'angularapp/controllers/careerController.js' + version,
                        ]
                    });
                }]
            },
        })
        .state('home', {
            url: '/',
            views: {
                '': {
                    templateUrl: tplName  ,
                  //  controller: 'MainCtrl',
                },
                /*'Gallery@home': {
                    templateUrl: 'angularapp/modules/stock/main/partial-views/gallary/gallery.html' + version,
                },*/
            },
            data: { pageTitle: 'Stock/Share Market Investing - BSE/NSE, India Stock Market Recommendations and Tips,  Stock Markets, Sensex/Nifty, Commodity Market, Investment Portfolio, Financial News, Mutual Funds News | ' },
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load({
                        files: [
                              //'angularapp/controllers/mainController.js' + version, 
                        ]
                    });
                }],
                data: function(stockService, $stateParams) {
                }
            },
            params: {
                /*Nonmandtory flag in url*/
               /* flag: {
                    value: null,
                    squash: true
                }*/
            },
            ncyBreadcrumb: {
                skip: true
            }
        })
         
        .state('tagList', {
            url: '/tag/:tagName',
            parent: 'root',
            views: {
                '': {
                    templateUrl: 'angularapp/views/tagList.html' + version,
                    controller: 'tagListController'
                },
                'tagListMainArticle@tagList': {
                    templateUrl: 'angularapp/views/partial_views/categoryMainArticle.html' + version
                },
                'popularNews@tagList': {
                    templateUrl: 'angularapp/views/partial_views/popularNews.html' + version,
                    controller: 'popularNewsController'
                },
                'articleListByTag@tagList': {
                    templateUrl: 'angularapp/views/partial_views/categoryArticleList.html' + version
                },
                'Gallery@tagList': {
                    templateUrl: 'angularapp/modules/stock/main/partial-views/gallary/gallery.html' + version,
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'angularapp/assets/libs/dirPagination.js' + version,
                            'angularapp/controllers/tagListController.js' + version,
                            'angularapp/controllers/commonSliderOnRightSidebar.js' + version
                        ]
                    });
                }] /*loadMyCtrl End*/
            },
            params: {
                /*Nonmandtory categoryName in url*/
                categoryName: {
                    value: null,
                    squash: true
                },
                share: {
                    value: null,
                    squash: true
                }
            },
            data: {
                pageTitle: ''
            },
            ncyBreadcrumb: {
                label: '{{breadcrumbTitle}}'
            }
        });
}]);