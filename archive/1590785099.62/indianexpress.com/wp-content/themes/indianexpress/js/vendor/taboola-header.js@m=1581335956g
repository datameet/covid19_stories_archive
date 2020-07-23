function load_taboola_script () {
	if ( 'undefined' !== typeof taboolaHeaderExports ) {

		window._taboola = window._taboola || [];
		_taboola.push( taboolaHeaderExports );

		! function ( e, f, u, i ) {
			if ( ! document.getElementById( i ) ) {
				e.async = 1;
				e.src   = u;
				e.id    = i;
				f.parentNode.insertBefore( e, f );
			}
		}(
			document.createElement( 'script' ),
			document.getElementsByTagName( 'script' )[0],
			'//cdn.taboola.com/libtrc/indianexpress-indianexpress/loader.js',
			'tb_loader_script'
		);

		if ( window.performance && typeof window.performance.mark === 'function' ) {
			window.performance.mark( 'tbl_ic' );
		}

	}
}

jQuery( window ).one(
	'scroll',
	function() {
		load_taboola_script();
	}
);
