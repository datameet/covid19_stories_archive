/* Services for Home page nested views */
app.factory('articeListData', function($resource, GENERAL_CONFIG) {
    return $resource('/ws/article/article_list', {}, { query: { method: 'get', isArray: false, cache: true } });
});
app.factory('topHeadStoryData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/article/article_list/top_head_story', {}, { query: { cache: true } });
});
app.factory('topStoryData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/article/article_list/top_story', {}, { query: { cache: true } });
});
app.factory('videoDataService', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/gallery/bulletin_video_list/:pageId', {}, { query: { cache: true } });
});
app.factory('videoDataDetailService', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/gallery/get_bulletin_video_details/:id', {}, { query: { cache: true } });
});
/*app.factory('videoDetailService', function($resource,GENERAL_CONFIG){
    return $resource(GENERAL_CONFIG.app_base_url+'/ws/gallery/get_bulletin_video_details/35',{},{query : {cache : true}});
});*/
app.factory('trendingNewsData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/article/article_list/trending_news', {}, { query: { cache: true } });
});
app.factory('economyBoxData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/article/article_list/economy_box', {}, { query: { cache: true } });
});
app.factory('financeBoxData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/article/article_list/finance_box', {}, { query: { cache: true } });
});
app.factory('buzzArticleData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/article/article_list/buzz_list', {}, { query: { cache: true } });
});
app.factory('entertainmentData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/article/article_list/is_entertainment', {}, { query: { cache: true } });
});
app.factory('recommendedForYouData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/article/recommended_for_you', {}, { query: { cache: true } });
});
app.factory('breakinNewsTickerData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/article/bracking_news_ticker');
});
app.factory('tickerData', function($resource, GENERAL_CONFIG) {
    var services = {
        topGujjuTickerData: topGujjuTickerData,
        nseNewsTickerData: nseNewsTickerData
    };

    function topGujjuTickerData(pageId) {
        return $resource(GENERAL_CONFIG.app_base_url + 'ws/ticker/top_gujju_ticker/' + pageId);
    }

    function nseNewsTickerData() {
        return $resource(GENERAL_CONFIG.app_base_url + 'ws/ticker/top_ticker', {}, { query: { method: 'get', cache: true } });
    }
    return services;
});
app.factory('topLoserData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/stock/stock_gainer_loser/LOSE/:name/:name/5');
});
app.factory('topGainersData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/stock/stock_gainer_loser/GAIN/:name/:name/5');
});
app.factory('marketWatchData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/stock/stock_sensex_nifty_box');
});

/* Services for Category page nested views */
app.factory('categoryListData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/article/article_list/category/:id/:category_name/:pageID');
});
app.factory('opinionArticlesData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/article/article_list');
});
app.factory('articleDetailData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/article/post_detail_page/:id');
});

app.factory('menuData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/category/category_list/top_menu');
});
app.factory('mobileMenuData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/category/mobile_menu');
});

app.factory('subCategoryMenuData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/category/sub_category_menu/:id');
});
app.factory('popularNewsData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/article/article_list/popular_news');
});

/* blogger details */
app.factory('bloggerData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/article/blogger_articles/:blogger_name');
});
app.factory('bloggerInfoData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/configuration/get_user_details/:reporterID');
});

/* Footer Services */
app.factory('footerData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/category/footer_tabs/:name');
});
/*Config Data*/
app.factory('configData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/configuration/configuration_log/:config_name');
});

/*Config Data all */
app.factory('configDataAll', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/configuration/configuration_log_all/all');
});


/* Photo Gallary */
app.factory('photoGallaryList', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/photo_gallery/photo_gallery');
});
app.factory('photoGalleryData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/gallery/photo_gallery/:id');
});
/*app.factory('photoGalleryData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/common/gstv_video');
});*/
app.factory('allCategoryGalleryData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/gallery/all_category_gallery');
});
app.factory('relatedGalleryData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/gallery/category_wise_gallery/:category_id');
});

/* Video Gallary */
app.factory('videoGalleryData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/gallery/video_gallery/:id');
});
app.factory('allVideoCategoryGalleryData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/gallery/all_category_gallery/video');
});
app.factory('relatedVideoGalleryData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/gallery/category_wise_video_gallery/:category_id');
});

/* E-paper Services */
app.factory('categoryWiseEpaperData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/epaper/category_wise_epaper/:date');
});
app.factory('sectionEpaperData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/epaper/section_epaper/:Epaper_id');
});
app.factory('epaperCategoryData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/epaper/epaper_category');
});
/*Convert to google short url*/
app.factory('googleConvertUrl', function($resource, GENERAL_CONFIG) {
    return $resource('https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyDjNf-tr9DhrSFY8IIiQUEM4QTROvQYc_g');
});
/*Stock search*/
app.factory('globleSearch', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/stock/search_master/');
});

app.factory('articleByTagData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'ws/article/meta_tags_articles/:tag/:pageID');
});

app.factory('rssData', function($resource, GENERAL_CONFIG) {
    return $resource(GENERAL_CONFIG.app_base_url + 'get-all-rss');
});

app.service('MetaService', function() {
    var title = 'Stock/Share Market Investing - BSE/NSE, India Stock Market Recommendations and Tips,  Stock Markets, Sensex/Nifty, Commodity Market, Investment Portfolio, Financial News, Mutual Funds News';
    var metaDescription = "Vyaapaarsamachar is India's leading financial information source.Stock Price, Stock Trading news, Share Market, Views and Analysis on Equity and Stock Markets Tips, sensex, nifty, Commodity Market, personal finance, mutual funds, insurance.";
    var metaKeywords = 'Stock Markets, Commodity Market, Sensex/Nifty,Stock Price, bombay stock exchange, Indian stock market, bse, finance, fund manager, national stock exchange, Nifty, nse, sensex, share, stock exchange, stock market, stock market rates, stock share value, Indian stock market chart, markets stocks, broker research reports, investment, ipo analysis, market map, market analysis, Bulk/Block Deals, market statistics';
    var metaImage = 'angularapp/assets/images/ms-icon-16x7.png';
    return {
        set: function(newTitle, newMetaDescription, newKeywords, newImage) {
            //console.log('service called')
            metaKeywords = newKeywords;
            metaDescription = newMetaDescription;
            title = newTitle;
            metaImage = newImage;
        },
        metaTitle: function() {
            //console.log(title);
            return title;
        },
        metaDescription: function() {
            return metaDescription;
        },
        metaKeywords: function() {
            return metaKeywords;
        },
        metaImage: function() { return metaImage; }
    }
});