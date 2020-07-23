
/**** Recommended For You Directive ****/
app.directive('recommendedForYou', function($sce, topStoryData, recommendedForYouData, $timeout, $rootScope, GENERAL_CONFIG) {
    return {
        restrict: 'EA',
        //replace: true,
        templateUrl: $sce.trustAsResourceUrl('angularapp/views/directive_views/recommendedForYouDirective.html' + GENERAL_CONFIG.file_version),
        scope: {
            data: '=',
        },
        controller: function($scope, $resource) {
            if (navigator.userAgent.toString().search('Android') >= 0 || navigator.userAgent.toString().search('iPhone') >= 0) {
                            $scope.isMobile = true;
                            $scope.slidesToShow = 1;
                        } else {
                            $scope.isMobile = false;
                            $scope.slidesToShow = 6;
                        }
                        $scope.slickConfig = {
                            method: {},
                            prevArrow: false,
                            nextArrow: false,
                            dots: false,
                            infinite: true,
                            speed: 300,
                            slidesToShow: $scope.slidesToShow,
                            slidesToScroll: 1,
                            responsive: [{
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 1,
                                        infinite: true,
                                        dots: false
                                    }
                                },
                                {
                                    breakpoint: 600,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 1
                                    }
                                },
                                {
                                    breakpoint: 480,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1
                                    }
                                }
                            ]
                        };
            $scope.dataLoaded = false;
            $scope.scroll = $rootScope.scroll;
            $scope.s3_base_url = GENERAL_CONFIG.s3_base_url;
            $scope.s3_article_1612 = GENERAL_CONFIG.s3_article_1612;
            $scope.baseUrl = GENERAL_CONFIG.app_base_url;
            var apiData = recommendedForYouData.get({
                id: $scope.category_id
            }, function() {
                $scope.recommendedData = apiData.response;
                $scope.scroll = $rootScope.scroll;
                //console.log($scope.recommendedData);
                if($scope.isMobile)
                {
                    $scope.slider_timer = 10000;
                }
                else
                {
                    $scope.slider_timer = 10000;
                }
                $timeout(function() {
                    $scope.dataLoaded = true;
                }, $scope.slider_timer);

            });
        },
        link: function(scope, element, attrs) {
            //console.log("recomCarousal");
        }
    };
});
  
/* Dirctive for spinner */
app.directive('myLoadingSpinner', function($sce, GENERAL_CONFIG) {
    return {
        restrict: 'A',
        replace: true,
        transclude: true,
        scope: {
            loading: '=myLoadingSpinner'
        },
        templateUrl: $sce.trustAsResourceUrl('angularapp/views/directive_views/loadingSpinnerDirective.html' + GENERAL_CONFIG.file_version),
        link: function(scope, element, attrs) {
            var spinner = new Spinner().spin();
            //console.log(spinner.el);
            var loadingContainer = $(element).find('.my-loading-spinner-container')[0];
            //console.log(loadingContainer);
            loadingContainer.appendChild(spinner.el);
        }
    };
});
/* Dirctive for spinner */
app.directive(
            "bnLazySrc",
            function( $window, $document ) {
                // I manage all the images that are currently being
                // monitored on the page for lazy loading.
                var lazyLoader = (function() {
                    // I maintain a list of images that lazy-loading
                    // and have yet to be rendered.
                    var images = [];
                    // I define the render timer for the lazy loading
                    // images to that the DOM-querying (for offsets)
                    // is chunked in groups.
                    var renderTimer = null;
                    var renderDelay = 100;
                    // I cache the window element as a jQuery reference.
                    var win = $( $window );
                    // I cache the document document height so that 
                    // we can respond to changes in the height due to
                    // dynamic content.
                    var doc = $document;
                    var documentHeight = doc.height();
                    var documentTimer = null;
                    var documentDelay = 2000;
                    // I determine if the window dimension events 
                    // (ie. resize, scroll) are currenlty being 
                    // monitored for changes.
                    var isWatchingWindow = false;
                    // and then render it when necessary.
                    function addImage( image ) {
                        images.push( image );
                        if ( ! renderTimer ) {
                            startRenderTimer();
                        }
                        if ( ! isWatchingWindow ) {
                            startWatchingWindow();
                        }
                    }
                    // I remove the given image from the render queue.
                    function removeImage( image ) {
                        // Remove the given image from the render queue.
                        for ( var i = 0 ; i < images.length ; i++ ) {
                           if ( images[ i ] === image ) {
                                images.splice( i, 1 );
                                break;
                            }
                        }
                        // If removing the given image has cleared the
                        // render queue, then we can stop monitoring 
                        // the window and the image queue.
                        if ( ! images.length ) {
                            clearRenderTimer();
                            stopWatchingWindow();
                        }
                    }
                    // I check the document height to see if it's changed.
                    function checkDocumentHeight() {
                        // If the render time is currently active, then 
                        // don't bother getting the document height - 
                        // it won't actually do anything.
                        if ( renderTimer ) {
                            return;
                        }
                        var currentDocumentHeight = doc.height();
                        // If the height has not changed, then ignore - 
                        // no more images could have come into view.
                        if ( currentDocumentHeight === documentHeight ) {
                            return;
                        }
                        // Cache the new document height.
                        documentHeight = currentDocumentHeight;
                        startRenderTimer();
                    }
                    // I check the lazy-load images that have yet to 
                    // be rendered. 
                    function checkImages() {
                        // Log here so we can see how often this 
                        // gets called during page activity.
                        //console.log( "Checking for visible images..." );
                        var visible = [];
                        var hidden = [];
                        // Determine the window dimensions.
                        var windowHeight = win.height();
                        var scrollTop = win.scrollTop();
                        // Calculate the viewport offsets.
                        var topFoldOffset = scrollTop;
                        var bottomFoldOffset = ( topFoldOffset + windowHeight );
                        // Query the DOM for layout and seperate the
                        // images into two different categories: those
                        // that are now in the viewport and those that
                        // still remain hidden.
                        for ( var i = 0 ; i < images.length ; i++ ) {
                            var image = images[ i ];
                            if ( image.isVisible( topFoldOffset, bottomFoldOffset ) ) {
                               visible.push( image );
                            } else {
                                hidden.push( image );
                            }
                        }
                        // Update the DOM with new image source values.
                        for ( var i = 0 ; i < visible.length ; i++ ) {
                            visible[ i ].render();
                        }
                        // Keep the still-hidden images as the new 
                        // image queue to be monitored.
                        images = hidden;
                        // Clear the render timer so that it can be set
                        // again in response to window changes.
                        clearRenderTimer();
                        // If we've rendered all the images, then stop
                        // monitoring the window for changes.
                        if ( ! images.length ) {
                            stopWatchingWindow();
                        }
                    }
                    // I clear the render timer so that we can easily 
                    // check to see if the timer is running.
                    function clearRenderTimer() {
                        clearTimeout( renderTimer );
                        renderTimer = null;

                    }
                    // I start the render time, allowing more images to
                    // be added to the images queue before the render 
                    // action is executed.
                    function startRenderTimer() {
                        renderTimer = setTimeout( checkImages, renderDelay );
                    }
                    // I start watching the window for changes in dimension.
                    function startWatchingWindow() {
                        isWatchingWindow = true;
                        // Listen for window changes.
                        win.on( "resize.bnLazySrc", windowChanged );
                        win.on( "scroll.bnLazySrc", windowChanged );
                        // Set up a timer to watch for document-height changes.
                        documentTimer = setInterval( checkDocumentHeight, documentDelay );
                    }
                    // I stop watching the window for changes in dimension.
                    function stopWatchingWindow() {
                        isWatchingWindow = false;
                        // Stop watching for window changes.
                        win.off( "resize.bnLazySrc" );
                        win.off( "scroll.bnLazySrc" );
                        // Stop watching for document changes.
                        clearInterval( documentTimer );
                    }
                    // I start the render time if the window changes.
                    function windowChanged() {
                        if ( ! renderTimer ) {
                            startRenderTimer();
                        }
                    }
                   // Return the public API.
                    return({
                        addImage: addImage,
                        removeImage: removeImage
                    });
                })();
                // I represent a single lazy-load image.
                function LazyImage( element ) {
                    // I am the interpolated LAZY SRC attribute of 
                    // the image as reported by AngularJS.                  
                    var source = null;

                    // I determine if the image has already been 
                    // rendered (ie, that it has been exposed to the
                    // viewport and the source had been loaded).
                    var isRendered = false;

                    // I am the cached height of the element. We are 
                    // going to assume that the image doesn't change 
                    // height over time.
                    var height = null;
                    // I determine if the element is above the given 
                     // fold of the page.
                    function isVisible( topFoldOffset, bottomFoldOffset ) {
                       // If the element is not visible because it 
                        // is hidden, don't bother testing it.
                        if ( ! element.is( ":visible" ) ) {
                            return( false );
                        }
                        // If the height has not yet been calculated, 
                        // the cache it for the duration of the page.
                        if ( height === null ) {

                            height = element.height();

                        }
                        // Update the dimensions of the element.
                        var top = element.offset().top;
                        var bottom = ( top + height );
                        // Return true if the element is:
                        // 1. The top offset is in view.
                        // 2. The bottom offset is in view.
                        // 3. The element is overlapping the viewport.
                        return( 
                                (
                                    ( top <= bottomFoldOffset ) &&
                                    ( top >= topFoldOffset )
                                )
                            ||
                                (
                                    ( bottom <= bottomFoldOffset ) &&
                                    ( bottom >= topFoldOffset )
                                )
                            ||
                                (
                                    ( top <= topFoldOffset ) &&
                                    ( bottom >= bottomFoldOffset )
                                )
                        );
                        
                    }
                    // I move the cached source into the live source.
                    function render() {
                        isRendered = true;
                        renderSource();
                    }
                    // I set the interpolated source value reported
                     // by the directive / AngularJS.
                    function setSource( newSource ) {
                        source = newSource;
                        if ( isRendered ) {
                            renderSource();
                        }
                    }
                    // I load the lazy source value into the actual 
                    // source value of the image element.
                    function renderSource() {
                        element[ 0 ].src = source;
                    }
                    // Return the public API.
                    return({
                        isVisible: isVisible,
                        render: render,
                        setSource: setSource
                    });
                }
                // I bind the UI events to the scope.
                function link( $scope, element, attributes ) {
                    var lazyImage = new LazyImage( element );
                    // Start watching the image for changes in its
                    // visibility.
                    lazyLoader.addImage( lazyImage );
                    // Since the lazy-src will likely need some sort
                    // of string interpolation, we don't want to 
                    attributes.$observe(
                        "bnLazySrc",
                        function( newSource ) {
                            lazyImage.setSource( newSource );
                        }
                    );
                   // When the scope is destroyed, we need to remove
                    // the image from the render queue.
                    $scope.$on(
                        "$destroy",
                        function() {
                            lazyLoader.removeImage( lazyImage );
                        }
                    );
                }
                // Return the directive configuration.
                return({
                    link: link,
                    restrict: "A"
                });

            }
        );

/* Directive for missing file path */
app.directive('errSrc', function() {
    return {
        link: function(scope, element, attrs) {
            element.bind('error', function() {
                if (attrs.src != attrs.errSrc) {
                    attrs.$set('src', attrs.errSrc);
                }
            });
        }
    }
});

// we create a simple directive to modify behavior of <ul>
app.directive("whenScrolled", function($window) {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            raw = elem[0];
            var checkBounds = function(evt) {
                var rectObject = raw.getBoundingClientRect();
                //console.log(rectObject);
                if ($window.innerHeight > rectObject.bottom + 100) {
                    scope.loading = true;
                    scope.$apply(attrs.whenScrolled);
                }
            };
            angular.element($window).bind('scroll load', checkBounds);
        }
    };
});

app.filter('htmlToPlaintext', function() {
    return function(text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
});
app.filter('oldWordToNewWord', function() {
    return function(text) {
        return text ? String(text).replace('&nbsp', '') : '';
    };
});

app.filter('dateToISO', function() {
    return function(input) {
        return new Date(input.replace(/-/g, "/")).toISOString();
    };
});


app.directive('master', function($timeout) {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            element.ready(function() {
                scope.$watch(function() {
                    $timeout(function() {
                        scope.style = {
                            height: element[0].offsetHeight + 'px', //set the height in style to our elements height
                            //width:element[0].offsetWidth+'px' //same with width
                        };
                    }, 500);
                });
            });
        }
    }
});

app.directive('bindUnsafeHtml', ['$compile', function($compile) {
    return function(scope, element, attrs) {
        scope.$watch(
            function(scope) {
                // watch the 'bindUnsafeHtml' expression for changes
                return scope.$eval(attrs.bindUnsafeHtml);
            },
            function(value) {
                // when the 'bindUnsafeHtml' expression changes
                // assign it into the current DOM
                element.html(value);

                // compile the new DOM and link it to the current
                // scope.
                // NOTE: we only compile .childNodes so that
                // we don't get into infinite loop compiling ourselves
                $compile(element.contents())(scope);
            }
        );
    };
}]);
'use strict';
app.directive('customecopy', function($timeout) {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            if (element[0]) {
                element[0].addEventListener('copy', function() {
                    var selection = window.getSelection(),
                        pagelink = '<br /><br /> Read more at: ' + document.location.href,
                        copytext = selection + pagelink,
                        newdiv = document.createElement('div');
                    //hide the newly created container
                    newdiv.style.position = 'absolute';
                    newdiv.style.left = '-99999px';

                    //insert the container, fill it with the extended text, and define the new selection
                    document.body.appendChild(newdiv);
                    newdiv.innerHTML = copytext;
                    selection.selectAllChildren(newdiv);

                    window.setTimeout(function() {
                        document.body.removeChild(newdiv);
                    }, 100);
                });
            }
        }
    }
});