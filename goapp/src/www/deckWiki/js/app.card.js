var app = app || {};
app.card = app.card || {};
(function( module ){

	function showAlert( msg ){
		$.messager.alert('錯誤', msg );
	}
	
	function showDeckList( retModel, sort ){
		var mc_deckContainer = $("#mc_deckContainer");
		var oldtop = mc_deckContainer.parent().parent().scrollTop();
		mc_deckContainer.empty();
		
		if( sort != undefined && sort ){
			retModel.cardSuit.sort( function( aobj, bobj ){
				return aobj.game.localeCompare( bobj.game );
			});
		}
		
		_.each( retModel.cardSuit, function( deck ){
			var copyDeck = JSON.parse( JSON.stringify( deck ) );
			if( copyDeck.backId == undefined ){
				copyDeck.backId = "0";
			}
			addDeck( copyDeck, retModel );
		});
		mc_deckContainer.parent().parent().scrollTop( oldtop );
	}
	/*
	$('#btn_saveDeck' ).linkbutton( {
		onClick:function(){
			//showLoading( '存檔中...' );
			
			if( admin.beta ){
				cardSuit.save2( fbid, token, loadModel, handleModel( function( ret ){
					showMessage( '存檔成功' );
					$('#btn_saveDeck' ).linkbutton( 'disable' );
					
					//closeLoading();
				}));
			}else{
				cardSuit.save( fbid, token, loadModel, handleModel( function( ret ){
					showMessage( '存檔成功' );
					$('#btn_saveDeck' ).linkbutton( 'disable' );
					
					//closeLoading();
				}));
			}
		}
	});
	*/
	function editAndShow( loadModel ){
		showDeckList( loadModel );
		$('#btn_saveDeck' ).linkbutton( 'enable' );
	}
	
	function addDeck( _model, loadModel ){
		var dom = $("#tmpl_deck" ).tmpl( _model );
		dom.find( '#txt_name' ).textbox( {
			value:_model.name
		});
		$('#mc_deckContainer').append( dom );
		dom.find( '.easyui-combobox' ).combobox({
			value: _model.game,
			onSelect:(function( __model ){
				return function( record ){
					__model.game = record.value;
					cardSuit.editCardSuit( loadModel, __model );
					var tid = setTimeout( function(){
						clearTimeout( tid );
						editAndShow( loadModel );
					}, 10 );
				}
			})( _model )
		});
		
		dom.find( '.easyui-textbox' ).textbox({
			onChange:(function( __model ){
				return function( nv, ov ){
					switch( $( this ).attr( 'id' )){
						case 'txt_name':
							__model.name = nv;
							cardSuit.editCardSuit( loadModel, __model );
							cardSuit.removeCardSuit( loadModel, ov );
							editAndShow( loadModel );
							break;
						case 'txt_cards':
							try{
								__model.cards = JSON.parse( '[' + nv + ']' );
							}catch( e ){
								showAlert("格式輸入錯誤，請檢查");
							}
							cardSuit.editCardSuit( loadModel, __model );
							editAndShow( loadModel );
							break;
						case 'txt_back':
							__model.backId = nv + "";
							cardSuit.editCardSuit( loadModel, __model );
							editAndShow( loadModel );
					}
					
				}
			})( _model )
		});
		var cardstr = (function(){
			var str = JSON.stringify( _model.cards );
			str = str.substr( 1, str.length - 2 );
			return str;
		})();
		dom.find( '#txt_cards' ).textbox( {
			value:cardstr
		});
		dom.find( '.easyui-linkbutton' ).linkbutton();
		dom.find( '#btn_remove' ).click( function(){
			var deckName = $(this).parent().find( '#txt_name' ).textbox( 'getValue' );
			cardSuit.removeCardSuit( loadModel, deckName );
			editAndShow();
		});
	}
	
	module.showDeckList = showDeckList;
})( app.card );