/* Source and licensing information for the line(s) below can be found at https://www.thenewsminute.com/sites/all/modules/custom/views_infinite_cached_scroll/views-infinite-cached-scroll.js. */
(function(i){'use strict';var n=i(window),c=200,e=0;i.fn.infiniteCachedScrollInsertView=function(e){var c=this,n=c.find('.view-content').children();e.find('.view-content').prepend(n);c.replaceWith(e);self.COMSCORE&&COMSCORE.beacon({c1:'2',c2:'20519288'});i(document).trigger('infiniteCachedScrollComplete',[e,n])};Drupal.behaviors.views_infinite_cached_scroll={attach:function(r,t){if(t&&t.views_infinite_cached_scroll&&t.views&&t.views.ajaxViews){i.each(t.views_infinite_cached_scroll.views,function(a,r){var f='.view-id-'+r.view_name+'.view-display-id-'+r.view_display_id,t=i(f+' .pager-next');n.bind('scroll.views_infinite_cached_scroll_'+e,function(){if(t.length<=0)return;if(window.innerHeight+window.pageYOffset >t.offset().top-c){t.find('a').click()}})})}}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.thenewsminute.com/sites/all/modules/custom/views_infinite_cached_scroll/views-infinite-cached-scroll.js. */
/* Source and licensing information for the line(s) below can be found at https://www.thenewsminute.com/sites/all/modules/views_load_more/views_load_more.js. */
(function(e){Drupal.ajax.prototype.commands.viewsLoadMoreAppend=function(t,i,l){console.log(i);var s=i.selector?e(i.selector):e(t.wrapper),c=i.method||t.method,d=i.targetList||'',n=t.getEffect(i),w=i.options.pager_selector?i.options.pager_selector:'.pager-load-more',v=e('<div></div>').html(i.data),o=v.contents();if(o.length!=1||o.get(0).nodeType!=1){o=v};var r=i.settings||t.settings||Drupal.settings;Drupal.detachBehaviors(s,r);if(e.waypoints!=undefined){e.waypoints('refresh')};var a=d&&!i.options.content?'> .view-content '+d:i.options.content||'> .view-content';if(n.showEffect!='show'){o.find(a).children().hide()};s.find(w).replaceWith(o.find(w));s.find(a)[c](o.find(a).children());s.find(a).children().removeClass('views-row-first views-row-last views-row-odd views-row-even').filter(':first').addClass('views-row-first').end().filter(':last').addClass('views-row-last').end().filter(':even').addClass('views-row-odd').end().filter(':odd').addClass('views-row-even').end();if(n.showEffect!='show'){s.find(a).children(':not(:visible)')[n.showEffect](n.showSpeed)};s.trigger('views_load_more.new_content',o.clone());var f=s.attr('class'),p=f.match(/jquery-once-[0-9]*-[a-z]*/);s.removeClass(p[0]);r=i.settings||t.settings||Drupal.settings;Drupal.attachBehaviors(s,r)};Drupal.behaviors.ViewsLoadMore={attach:function(t,i){var s={offset:'100%'};if(i&&i.viewsLoadMore&&i.views&&i.views.ajaxViews){e.each(i.viewsLoadMore,function(t,o){var a='.view-id-'+o.view_name+'.view-display-id-'+o.view_display_id+' .pager-next a',n={};e.extend(n,s,i.viewsLoadMore[t].opts);e(a).waypoint('destroy');e(a).waypoint(function(i,t){e(a).click()},n)})}},detach:function(t,i,s){if(i&&i.viewsLoadMore&&i.views&&i.views.ajaxViews){e.each(i.viewsLoadMore,function(s,i){var o='.view-id-'+i.view_name+'.view-display-id-'+i.view_display_id;if(e(t).is(o)){e('.pager-next a',o).waypoint('destroy')}
else{e(o,t).waypoint('destroy')}})}}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.thenewsminute.com/sites/all/modules/views_load_more/views_load_more.js. */
/* Source and licensing information for the line(s) below can be found at https://www.thenewsminute.com/sites/all/modules/views/js/ajax_view.js. */
(function(e){Drupal.behaviors.ViewsAjaxView={};Drupal.behaviors.ViewsAjaxView.attach=function(){if(Drupal.settings&&Drupal.settings.views&&Drupal.settings.views.ajaxViews){e.each(Drupal.settings.views.ajaxViews,function(e,t){Drupal.views.instances[e]=new Drupal.views.ajaxView(t)})}};Drupal.views={};Drupal.views.instances={};Drupal.views.ajaxView=function(t){var a='.view-dom-id-'+t.view_dom_id;this.$view=e(a);var s=Drupal.settings.views.ajax_path;if(s.constructor.toString().indexOf('Array')!=-1){s=s[0]};var i=window.location.search||'';if(i!==''){var i=i.slice(1).replace(/q=[^&]+&?|&?render=[^&]+/,'');if(i!==''){i=((/\?/.test(s))?'&':'?')+i}};this.element_settings={url:s+i,submit:t,setClick:!0,event:'click',selector:a,progress:{type:'throbber'}};this.settings=t;this.$exposed_form=e('#views-exposed-form-'+t.view_name.replace(/_/g,'-')+'-'+t.view_display_id.replace(/_/g,'-'));this.$exposed_form.once(jQuery.proxy(this.attachExposedFormAjax,this));this.links=[];this.$view.filter(jQuery.proxy(this.filterNestedViews,this)).once(jQuery.proxy(this.attachPagerAjax,this));var r=this.element_settings;r.event='RefreshView';this.refreshViewAjax=new Drupal.ajax(this.selector,this.$view,r)};Drupal.views.ajaxView.prototype.attachExposedFormAjax=function(){var t=e('input[type=submit], button[type=submit], input[type=image]',this.$exposed_form);t=t[0];e(t).click(function(){if(Drupal.autocompleteSubmit){Drupal.autocompleteSubmit()}});this.exposedFormAjax=new Drupal.ajax(e(t).attr('id'),t,this.element_settings)};Drupal.views.ajaxView.prototype.filterNestedViews=function(){return!this.$view.parents('.view').length};Drupal.views.ajaxView.prototype.attachPagerAjax=function(){this.$view.find('ul.pager > li > a, th.views-field a, .attachment .views-summary a').each(jQuery.proxy(this.attachPagerLinkAjax,this))};Drupal.views.ajaxView.prototype.attachPagerLinkAjax=function(t,a){var r=e(a),i={};var s=r.attr('href');e.extend(i,this.settings,Drupal.Views.parseQueryString(s),Drupal.Views.parseViewArgs(s,this.settings.view_base_path));e.extend(i,Drupal.Views.parseViewArgs(s,this.settings.view_base_path));this.element_settings.submit=i;this.pagerAjax=new Drupal.ajax(!1,r,this.element_settings);this.links.push(this.pagerAjax)};Drupal.ajax.prototype.commands.viewsScrollTop=function(i,s,r){var a =e(s.selector).offset(),t =s.selector;while(e(t).scrollTop()==0&&e(t).parent()){t =e(t).parent()};if(a.top-10<e(t).scrollTop()){e(t).animate({scrollTop:(a.top-10)},500)}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.thenewsminute.com/sites/all/modules/views/js/ajax_view.js. */
