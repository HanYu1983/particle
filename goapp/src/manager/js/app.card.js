var app = app || {};
app.card = app.card || {};
(function( module ){
	function showDeckList( retModel ){
		$("#mc_deckContainer").empty();
		_.each( retModel.cardSuit, function( deck ){
			var copyDeck = JSON.parse( JSON.stringify( deck ) );
			if( copyDeck.backId == undefined ){
				copyDeck.backId = "0";
			}
			addDeck( copyDeck );
		});
	}
	
	$('#btn_saveDeck' ).linkbutton( {
		onClick:function(){
			showLoading( '存檔中...' );
			cardSuit.save( fbid, token, loadModel, handleModel( function( ret ){
				showMessage( '存檔成功' );
				$('#btn_saveDeck' ).linkbutton( 'disable' );
				
				closeLoading();
			}));
		}
	});
	
	function editAndShow(){
		showDeckList( loadModel );
		$('#btn_saveDeck' ).linkbutton( 'enable' );
	}
	
	function addDeck( _model ){
		var dom = $("#tmpl_deck" ).tmpl( _model );
		$('#mc_deckContainer').append( dom );
		dom.find( '.easyui-linkbutton' ).linkbutton({
			group:_model.name,
			onClick:(function( __model ){
				return function(){
					switch( this.id ){
						case 'btn_army':__model.game = 'army';break;
						case 'btn_fighter':__model.game = 'fighter';break;
						case 'btn_magic':__model.game = 'magic';break;
						case 'btn_gundamWar':__model.game = 'gundamWar';break;
						case 'btn_sangoWar':__model.game = 'sangoWar';break;
						case 'btn_yugioh':__model.game = 'yugioh';break;
					}
					cardSuit.editCardSuit( loadModel, __model );
					editAndShow();
				}
			})( _model )
		});
		dom.find( '.easyui-textbox' ).textbox();
		dom.find( '.easyui-textbox' ).textbox({
			onChange:(function( __model ){
				return function( nv, ov ){
					switch( $( this ).attr( 'id' )){
						case 'txt_name':
							__model.name = nv;
							cardSuit.editCardSuit( loadModel, __model );
							cardSuit.removeCardSuit( loadModel, ov );
							editAndShow();
							break;
						case 'txt_cards':
							try{
								__model.cards = JSON.parse( '[' + nv + ']' );
							}catch( e ){
								showAlert("格式輸入錯誤，請檢查");
							}
							cardSuit.editCardSuit( loadModel, __model );
							editAndShow();
							break;
						case 'txt_back':
							__model.backId = nv + "";
							cardSuit.editCardSuit( loadModel, __model );
							editAndShow();
					}
					
				}
			})( _model )
		});
		
		var cardstr = (function(){
			var str = JSON.stringify( _model.cards );
			str = str.substr( 1, str.length - 2 );
			return str;
		})();
		switch( _model.game ){
			case 'army':
				dom.find( '#btn_army' ).linkbutton( 'select' );
				break;
			case 'fighter':
				dom.find( '#btn_fighter' ).linkbutton( 'select' );
				break;
			case 'magic':
				dom.find( '#btn_magic' ).linkbutton( 'select' );
				break;
			case 'gundamWar':
				dom.find( '#btn_gundamWar' ).linkbutton( 'select' );
				break;
			case 'sangoWar':
				dom.find( '#btn_sangoWar' ).linkbutton( 'select' );
				break;
			case 'yugioh':
				dom.find( '#btn_yugioh' ).linkbutton( 'select' );
		}
		
		dom.find( '#txt_cards' ).textbox( {
			value:cardstr
		});
		
		dom.find( '#btn_remove' ).click( function(){
			cardSuit.removeCardSuit( loadModel, $(this).attr( 'group' ) );
			editAndShow();
		});
	}
	
	module.showDeckList = showDeckList;
})( app.card );