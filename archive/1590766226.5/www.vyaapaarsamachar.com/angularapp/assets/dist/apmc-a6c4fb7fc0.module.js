(function() {
    angular.module('vyaapaarSamachar.apmc', [
            'ngResource',
            'vyaapaarSamachar.services'
        ])
        .config(routerConfig)

    routerConfig.$inject = ['$stateProvider', '$locationProvider', '$ocLazyLoadProvider', 'GENERAL_CONFIG'];

    function routerConfig($stateProvider, $locationProvider, $ocLazyLoadProvider, GENERAL_CONFIG) {
        var version = GENERAL_CONFIG.file_version;
        $stateProvider
            /*
             * Parent state of apmc page
             */
            .state('root.apmc', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: 'angularapp/modules/apmc/main/apmc.html' + version,
                        controller: 'apmcController as vm'
                    },
                     'popularNews@root.apmc': {
                        templateUrl: 'angularapp/views/partial_views/popularNews.html' + version,
                        controller: 'popularNewsController'
                    },
                    'quickLinks@root.apmc': { templateUrl: 'angularapp/modules/apmc/main/partial-views/quick-links.html' + version },
                },
                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // lazy load files for an existing module
                        return $ocLazyLoad.load({
                            files: [
                                'angularapp/modules/apmc/main/apmc.controller.js' + version,
                            ]
                        });
                    }]
                },
                ncyBreadcrumb: {
                    skip: true
                }
            })
            
            /*
             * apmc market center Page
             */
            .state('root.apmc.market', {
                url: '/apmc/market-centre/:marketName',
                views: {
                    '': {
                        templateUrl: 'angularapp/modules/apmc/main/apmc-market.html' + version,
                        controller: 'apmcMainController as vm'
                    },
                },
                data: {
                    pageTitle: 'APMC PRICES | '
                },
                /*redirectTo: 'root.apmc.home.gainer',*/
                ncyBreadcrumb: {
                    label: 'APMC'
                }
            })

            /*
             * apmc Home Page
             */
            .state('root.apmc.home', {
                url: '/apmc/:categoryName/:commodityName',
                views: {
                    '': {
                        templateUrl: 'angularapp/modules/apmc/main/apmc-home.html' + version,
                        controller: 'apmcMainController as vm'
                    },
                    'apmcDetails@root.apmc.home': {
                        templateUrl: 'angularapp/modules/apmc/main/apmc-table-data.html'+version
                    },
                },
                data: {
                    pageTitle: 'APMC PRICES | '
                },
                /*redirectTo: 'root.apmc.home.gainer',*/
                ncyBreadcrumb: {
                    label: 'APMC'
                }
            });
    }
})();