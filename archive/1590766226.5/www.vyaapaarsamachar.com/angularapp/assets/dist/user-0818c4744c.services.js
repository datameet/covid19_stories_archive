'use strict';

angular.module('vyaapaarSamachar.services')
    .factory('userService', function($resource, GENERAL_CONFIG, $cookies, $http, $q, $state, $location, $rootScope, toastr) {
        /****************************************
         *  userService : User module services		 
         ****************************************/

        // Serivce object definition
        var services = {
            registerUser: registerUser,
            careerUser: careerUser,
            login: login,
            logout: logout,
            isLoggedIn: isLoggedIn,
            forgotPassword: forgotPassword,
            changePassword: changePassword,
            resetPassword: resetPassword,
            isTokenExist: isTokenExist,
            getToken: getToken,
            deleteToken: deleteToken,
            getLoggedinUserInfo: getLoggedinUserInfo,
            updateLoggedinUserInfo: updateLoggedinUserInfo,
            isChangePwdLinkExpired: isChangePwdLinkExpired,
            getUserInfo: getUserInfo,
            updateUser: updateUser,
            isPwdExist: isPwdExist
        }

        /* Register User */
        function registerUser() {
            return $resource(GENERAL_CONFIG.app_base_url + 'ws/portfolio/user/registration');
        }
        /* Register for career */
        function careerUser() {
            return $resource(GENERAL_CONFIG.app_base_url + 'ws/career/job_apply');
        }

        function logout() {
            NProgress.start();
            var logoutUrl = $resource(GENERAL_CONFIG.app_base_url + 'ws/portfolio/summary/logout');
            var loggedInUser = getLoggedinUserInfo();
            logoutUrl.save({ user_id: loggedInUser.id }, function(resObj) {
                NProgress.done();
                delete $http.defaults.headers.common['token'];
                $cookies.remove('token');
                $cookies.remove('userInfo');
                $cookies.remove('watchList');
                $cookies.remove('stockData');
                $rootScope.token = undefined;
                toastr.success('You are successfully logged out.', "", {
                    closeButton: true,
                    timeOut: 3000,
                    preventOpenDuplicates: true
                });
                if($state.current.url == '^'){
                    window.location.href = GENERAL_CONFIG.app_base_url + 'portfolio';
                }else{
                    $state.go('root.user.portfolio');  
                }
            })
        }

        function login() {
            return $resource(GENERAL_CONFIG.app_base_url + 'ws/portfolio/user/login');
        }

        function isLoggedIn() {
            var token = $cookies.get('token');
            if (token != null && token != "") {
                return true;
            } else {
                return false;
            }
        }

        function forgotPassword() {
            return $resource(GENERAL_CONFIG.app_base_url + 'ws/portfolio/user/forgot_password');
        }

        function changePassword() {
            return $resource(GENERAL_CONFIG.app_base_url + 'ws/portfolio/summary/change_password');
        }

        function resetPassword() {
            return $resource(GENERAL_CONFIG.app_base_url + 'ws/portfolio/user/reset_password');
        }

        function verifyChangePwdLink() {
            return $resource(GENERAL_CONFIG.app_base_url + 'ws/portfolio/user/change_password_link');
        }

        function getUserInfo(userId, token) {
            //$http.defaults.headers.common['token'] = token;
            return $resource(GENERAL_CONFIG.app_base_url + 'ws/portfolio/summary/user_info/' + userId);
        }

        function updateUser(token) {
            //$http.defaults.headers.common['token'] = token;
            return $resource(GENERAL_CONFIG.app_base_url + 'ws/portfolio/summary/user_update');
        }

        function getToken() {
            var token = $cookies.get('token');
            return token;
        }

        function deleteToken() {
            delete $http.defaults.headers.common['token'];
            $cookies.remove('token');
        }

        function getLoggedinUserInfo() {
            var user = $cookies.getObject('userInfo');
            return user;
        }

        function updateLoggedinUserInfo(updateUser) {
            $cookies.remove('userInfo');
            $cookies.putObject('userInfo', updateUser);
        }
        // Check token exist in cookie or not, else redirect page to login(Mostly used on router resolve)
        function isTokenExist() {
            var deferred = $q.defer();
            var token = $cookies.get('token');
            if (typeof token != 'undefined') {
                $http.defaults.headers.common['token'] = token;
            } else {
                $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
                //$http.defaults.headers.common = { Accept: "application/json, text/plain, */*" };
                //$http.defaults.headers.post['Content-Type'] = "application/json";
            }
            var apiURL = $resource(GENERAL_CONFIG.app_base_url + 'ws/portfolio/user/valide_token');
            if (token != null && token != "") {
                apiURL.get(function(resObj) {
                    if (resObj.is_token_valide) {
                        deferred.resolve(true);
                    } else {
                        deferred.reject('Unauthenticated User');
                    }
                })
            } else {
                deferred.reject('Unauthenticated User');
            }
            return deferred.promise;
        }

        /* Check if email link of change password expire or not */
        function isChangePwdLinkExpired() {
            var deferred = $q.defer();
            var queryStrings = {
                "email": $location.search().email,
                "reset_password_token": $location.search().token,
            };
            verifyChangePwdLink().save(queryStrings, function(resObj) {
                if (resObj.result != 'success') {
                    $state.go('root.display-information-message', { 'msg': 'Reset password link has been expired' });
                }
                return deferred.resolve(true)
            });
            return deferred.promise;
        }

        function isPwdExist() {
            return $resource(GENERAL_CONFIG.app_base_url + 'ws/portfolio/summary/check_password');
        }

        return services;
    });