/*
 * jQuery.autopager v1.0.0
 *
 * Copyright (c) lagos
 * Dual licensed under the MIT and GPL licenses.
 */
(function($) {
	var window = this, options = {},
		content, currentUrl, nextUrl,
		active = false,
		defaults = {
			autoLoad: true,
			page: 1,
			runscroll: false,
			content: '.content',
			link: 'a[rel=next]',
			insertBefore: null, 
			appendTo: null, 
			start: function() {},
			load: function() {},
			disabled: false
		};

	$.autopager = function(_options) {
		var autopager = this.autopager;
		//console.log('function call' + typeof _options);
		//alert('biz');
		if (typeof _options === 'string' && $.isFunction(autopager[_options])) {
			var args = Array.prototype.slice.call(arguments, 1),
				value = autopager[_options].apply(autopager, args);
			//console.log('function call condition True');
			//console.log("**" + value + "**");
			return value === autopager || value === undefined ? this : value;
		}

		_options = $.extend({}, defaults, _options);
		autopager.option(_options);

		content = $(_options.content).filter(':last');
		//runscroll = _options.runscroll;
		//alert(runscroll);
		if (content.length){
			//console.log('Content Found' + content.text());
			if (!_options.insertBefore && !_options.appendTo) {
				//console.log('Content Found condition-1');
				var insertBefore = content.next();
				if (insertBefore.length) {
					//console.log('Content Found condition-2');
					set('insertBefore', insertBefore);
				} else {
					//console.log('Content Found condition-3');
					set('appendTo', content.parent());
				}
			}
		}
		setUrl();
		return this;
	};

	$.extend($.autopager, {
		option: function(key, value) {			
			var _options = key;

			if (typeof key === "string") {
				if (value === undefined) {
					return options[key];
				}
				_options = {};
				_options[key] = value;
			}

			$.each(_options, function(key, value) {
				set(key, value);
			});
			return this;
		},

		enable: function() {
			set('disabled', false);
			return this;
		},

		disable: function() {
			set('disabled', true);
			return this;
		},

		destroy: function() {
			this.autoLoad(false);
			options = {};
			content = currentUrl = nextUrl = undefined;
			return this;
		},

		autoLoad: function(value) {
			return this.option('autoLoad', value);
		},

		load: function() {
			//console.log('Load content found. nextUrl:' + nextUrl + ' - options.disabled:' + options.disabled);
			if (active || !nextUrl || options.disabled) {
				return;
			}
			active = true;
			options.start(currentHash(), nextHash());
			$.get(nextUrl, insertContent);
			return this;
		}
	});

	function set(key, value) {
		//console.log('key=' + key + ' value=' + value);
		switch (key) {
			case 'autoLoad':				
				if (value && !options.autoLoad) {
					//$(window).scroll(loadOnScroll);   //Comment this to stop autoloading-Vaibbav
				} else if (!value && options.autoLoad) {
					//$(window).unbind('scroll', loadOnScroll);   //Comment this to stop autoloading-Vaibbav
				}
				break;
			case 'insertBefore':				
				if (value) {
					options.appendTo = null;
				}
				break
			case 'appendTo':				
				if (value) {
					options.insertBefore = null;
				}				
				break
			/*case 'disable':
					$(window).unbind('scroll', loadOnScroll);				
					break;
			case 'enable':
					$(window).scroll(loadOnScroll);				
					break;*/
		}
		options[key] = value;
	}

	function setUrl(context) {
		currentUrl = nextUrl || window.location.href;
		nextUrl = $(options.link, context).attr('href');
	}

	function loadOnScroll() {
		//alert("content" + content.offset().top + ' contentheight' + content.height() + ' document' + $(document).scrollTop() + ' window' + $(window).height());
		//console.log(options.runscroll + 'get');
		if ((content.offset().top + content.height() < $(document).scrollTop() + $(window).height())) {
			//alert("get");
			var _options = options;
			//alert(_options.runscroll + 'get');
			$.autopager.load();
		}
	}

	function insertContent(res) {
		//console.log(res);
		//console.log("ID: " + $(res).html());
		var _options = options,
			nextPage = $('<div/>').append(res.replace(/<script(.|\s)*?\/script>/g, "")),
			nextContent = nextPage.find(_options.content); 
			//console.log("%%" + _options.content + "$$" + nextPage + "%%");
			
			//contents = $.parseJSON(nextPage);
			//mainC = content.newsDetail;
			//console.log("$$$" + mainC.newsID + "&&&&&");
			//console.log("nextContent.length:" + nextContent.length);
			//console.log("+++" + nextPage.length + '+++' +  nextPage.text);
		set('page', _options.page + 1);
		setUrl(nextPage);
		if (nextContent.length) {
			//console.log("Enter in condition");
			$(nextContent).find('.col-right').empty();
			if (_options.insertBefore) {
				//console.log("Enter in condition Insertbefore");
				nextContent.insertBefore(_options.insertBefore);
			} else {
				//console.log("Enter in condition else");
				nextContent.appendTo(_options.appendTo);
			}
			_options.load.call(nextContent.get(), currentHash(), nextHash());
			content = nextContent.filter(':last');
			//console.log(content.text);
		}
		active = false;
	}

	function currentHash() {
		return {
			page: options.page,
			url: currentUrl
		};
	}

	function nextHash() {
		return {
			page: options.page + 1,
			url: nextUrl
		};
	}
})(jQuery);
