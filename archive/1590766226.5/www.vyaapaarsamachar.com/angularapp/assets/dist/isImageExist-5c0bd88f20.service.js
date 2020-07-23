'use strict';
/* Check if it's image by url Exist or not */
// http://stackoverflow.com/questions/22423057/angular-js-isimage-check-if-its-image-by-url
angular.module('vyaapaarSamachar.services')
	.factory('isImageExistService', function($q){		
		return {
			isImage:function(src){
				var deferred = $q.defer();
				var image = new Image();
				image.onerror = function() {
				    deferred.resolve(false);
				};
				image.onload = function() {
				    deferred.resolve(true);
				};
				image.src = src;
				return deferred.promise;
			}
		};
});