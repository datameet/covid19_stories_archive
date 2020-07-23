var app = angular.module('vyaapaarSamachar', [
        'ui.router',
        'ngResource',
        'ngSanitize',
        'ngAnimate',
        'vyaapaarSamachar.config', // vyaapaarSamachar Module config info refarding image and base URL
        '720kb.socialshare',
        'ngtweet',
        'ui.bootstrap',
        'ui.select',
        'oc.lazyLoad',
        'base64',
        /*'vyaapaarSamachar.user',*/
        'vyaapaarSamachar.apmc',
        'sun.scrollable',
        'nvd3',
        'ngCookies',
        'localytics.directives',
        'toastr',
        'satellizer',
        'slickCarousel',
        'angularUtils.directives.dirPagination',
        'infinite-scroll'
    ])
    .config(routerConfig)
    .run(run);

function routerConfig() {}

function run($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(evt, to, params) {
        if (to.redirectTo) {
            evt.preventDefault();
            $state.go(to.redirectTo, params);
        }
    })
}
angular.module('vyaapaarSamachar.services', []);