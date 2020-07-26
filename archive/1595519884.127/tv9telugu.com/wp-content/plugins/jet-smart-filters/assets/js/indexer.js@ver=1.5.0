(function( $ ) {

	"use strict";

	var JetSmartFilterIndexerData = window.JetSmartFilterSettings.jetFiltersIndexedData;
	var xhr = null;

	var JetSmartFiltersIndexer = {

		is_ajax_action:  false,
		currentWidgetId: null,

		init: function() {

			var self = JetSmartFiltersIndexer;

			$( document ).ready( self.initFiltersIndexer );
			$( document ).on( 'jet-filter-before-loaded', self.updateFiltersIndexer );

		},

		initFiltersIndexer: function() {

			if ( $( 'body' ).hasClass( 'elementor-editor-active' ) ) {
				return;
			}

			var $filters = $( '.jet-filter.jet-filter-indexed' );

			$.each( $filters, function() {
				var $this          = $( this ),
					$indexerRule   = $this.data( 'indexer-rule' ),
					$showCounter   = $this.data( 'show-counter' ),
					$changeCounter = $this.data( 'change-counter' ),
					widgetId       = $this.closest( '.elementor-widget' ).data( 'id' );

				if ( JetSmartFiltersIndexer.is_ajax_action ) {

					if ( 'never' === $changeCounter ) {
						return;
					}

					if ( 'other_changed' === $changeCounter && widgetId === JetSmartFiltersIndexer.currentWidgetId ) {
						return;
					}

				}

				$.each( $this.find( 'input' ), function() {
					var $input  = $( this ),
						$item   = $input.closest( '.jet-filter-row' ),
						$args   = [$input.data( 'apply-provider' ), $input.data( 'query-id' ), $input.attr( 'name' ), $input.attr( 'value' )],
						$row    = $args.join( '/' ),
						$counts = 0;

					if ( 'undefined' !== typeof JetSmartFilterIndexerData[$row] ) {
						$counts = JetSmartFilterIndexerData[$row];
					}

					$input.siblings( '.jet-filters-counter' ).find( '.value' ).replaceWith( '<span class="value">' + $counts + '</span>' );

					if ( 'hide' === $indexerRule || 'disable' === $indexerRule ) {
						if ( 0 === $counts ) {
							$item.addClass( 'jet-filter-row-' + $indexerRule );
						} else {
							$item.removeClass( 'jet-filter-row-' + $indexerRule );
						}
					}

				} );

				$.each( $this.find( 'option' ), function() {
					var $option = $( this ),
						$select = $option.closest( '.jet-select__control' ),
						$args   = [$select.data( 'apply-provider' ), $select.data( 'query-id' ), $select.attr( 'name' ), $option.attr( 'value' )],
						$row    = $args.join( '/' ),
						$counts = 0;

					if ( 'undefined' !== typeof JetSmartFilterIndexerData[$row] ) {
						$counts = JetSmartFilterIndexerData[$row];
					}

					if ( '' !== $option.attr( 'value' ) ) {
						if ( 'yes' === $showCounter ) {
							$option.html( $option.data( 'label' ) + ' ' + $option.data( 'counter-prefix' ) + $counts + $option.data( 'counter-suffix' ) );
						}

						if ( 'disable' === $indexerRule ) {
							if ( 0 === $counts ) {
								$option.attr( 'disabled', "" );
							} else {
								$option.removeAttr( 'disabled' );
							}
						}

						if ( 'hide' === $indexerRule || 'disable' === $indexerRule ) {
							if ( 0 === $counts ) {
								$option.addClass( 'jet-filter-row-' + $indexerRule );
							} else {
								$option.removeClass( 'jet-filter-row-' + $indexerRule );
							}
						}
					}

				} );

			} );

		},

		updateFiltersIndexer: function( e, $scope, JetSmartFilters, provider, query, queryID, response ) {

			if ( $( 'body' ).hasClass( 'elementor-editor-active' ) ) {
				return;
			}

			JetSmartFiltersIndexer.is_ajax_action = true;
			JetSmartFiltersIndexer.currentWidgetId = $scope.closest( '.elementor-widget' ).data( 'id' );

			JetSmartFilterIndexerData = response.jetFiltersIndexedData;

			JetSmartFiltersIndexer.initFiltersIndexer();

			JetSmartFiltersIndexer.is_ajax_action = false;

		}

	};

	JetSmartFiltersIndexer.init();

	window.JetSmartFiltersIndexer = JetSmartFiltersIndexer;

}( jQuery ));
