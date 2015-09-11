var leo = leo || {};
leo.utils = leo.utils || {};
(function(){
	function checkValidName( name, error ) {
		if( name.length < 2 ){
			alert( error );	
			return false;
		}
		return true;
	}

	function checkValidEmail( email, error ){
		var reg = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/;
		if( reg.test( email ) )	return true;
		alert( error );
		return false;
	}
	
	function checkValidNumber( number, error ){
		if( number.length > 5 )	return true;
		alert( error );
		return false;
	}

	function checkValidPhoneNumber( number, error ){
		var reg = /^[09]{2}[0-9]{8}$/;
		if( reg.test( number ) )	return true;
		alert( error );
		return false;
	}

	function checkValidAddress( address, error ){
		if( address.length < 7 ){
			alert( error );	
			return false;
		}
		return true;
	}
	
	function getHash() {
		var tmpv = {};
		var tmp = window.location.search.substring(1);
		var tmpary = tmp.split("&");
		for (var i = 0; i < tmpary.length; i++) {
			var pair = tmpary[i].split("=");
			if (typeof tmpv[pair[0]] === "undefined") {
				tmpv[pair[0]] = pair[1];
			} else if (typeof tmpv[pair[0]] === "string") {
				var arr = [tmpv[pair[0]], pair[1]];
				tmpv[pair[0]] = arr;
			} else {
				tmpv[pair[0]].push(pair[1]);
			}
		}
		return tmpv;
	}
	
	function getScreenWidth(){
		var asize = window.screen.availWidth;
		var bsize = window.innerWidth;
		var csize = document.documentElement.clientWidth;
		var min = Math.min( asize, bsize );
		min = Math.min( asize, csize );
		return min;
	}
	
	function getScreenHeight(){
		var asize = window.screen.availHeight;
		var bsize = window.innerHeight;
		var csize = document.documentElement.clientHeight;
		var min = Math.min( asize, bsize );
		min = Math.min( asize, csize );
		return min;
	}
	
	function addMouseWheelEvent( jdom, func ){
		jdom.on( 'DOMMouseScroll mousewheel wheel', function( event ){
			var delta  = event.originalEvent.deltaY ||
						event.originalEvent.wheelDelta  ||
						event.originalEvent.detail;
			
			if( detectBrowser().isSafari || isIE8Browser() ) delta *= -1;
			func( {delta :delta } );
		});
	}
	
	function removeMouseWheelEvent( jdom ){
		jdom.off( 'DOMMouseScroll mousewheel wheel' );
	}
	
	function detectBrowser(){
		var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
			// Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
		var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
		var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
			// At least Safari 3+: "[object HTMLElementConstructor]"
		var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
		var isIE = /*@cc_on!@*/false || !!document.documentMode; // At least IE6
		return {
			isOpera:isOpera,
			isFirefox:isFirefox,
			isSafari:isSafari,
			isChrome:isChrome,
			isIE:isIE
		}
	}
	
	function isIE8Browser() {
		var rv = -1;
		var ua = navigator.userAgent;
		var re = new RegExp("Trident\/([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null) {
			rv = parseFloat(RegExp.$1);
		}
		return (rv == 4);
	}
	
	function isMobile(){
		var mobiles = new Array
            (
                "midp", "j2me", "avant", "docomo", "novarra", "palmos", "palmsource",
                "240x320", "opwv", "chtml", "pda", "windows ce", "mmp/",
                "blackberry", "mib/", "symbian", "wireless", "nokia", "hand", "mobi",
                "phone", "cdm", "up.b", "audio", "sie-", "sec-", "samsung", "htc",
                "mot-", "mitsu", "sagem", "sony", "alcatel", "lg", "eric", "vx",
                "NEC", "philips", "mmm", "xx", "panasonic", "sharp", "wap", "sch",
                "rover", "pocket", "benq", "java", "pt", "pg", "vox", "amoi",
                "bird", "compal", "kg", "voda", "sany", "kdd", "dbt", "sendo",
                "sgh", "gradi", "jb", "dddi", "moto", "iphone", "android",
                "iPod", "incognito", "webmate", "dream", "cupcake", "webos",
                "s8000", "bada", "googlebot-mobile"
            )
 
		var ua = navigator.userAgent.toLowerCase();
		var isMobile = false;
		for (var i = 0; i < mobiles.length; i++) {
			if (ua.indexOf(mobiles[i]) > 0) {
				isMobile = true;
				break;
			}
		}
		return isMobile;
	}
	
	function getAge(year,month,date){
		var today = new Date();
		var dob = new Date();
		dob.setFullYear(year);
		dob.setMonth(month-1);
		dob.setDate(date);
		var timeDiff = today.valueOf() - dob.valueOf();
		var milliInDay = 24*60*60*1000;
		var noOfDays = timeDiff / milliInDay;
		var daysInYear = 365.242;
		return noOfDays / daysInYear;
	}
	
	function csvJSON(csv){
		var lines=csv.split("\n");
		var result = [];
		var headers=lines[0].split(",");
		for(var i=1;i<lines.length;i++){
			var obj = {};
			var currentline=lines[i].split(",");
			for(var j=0;j<headers.length;j++){
				obj[headers[j]] = currentline[j];
			}
			result.push(obj);
		}
		return result; //JSON
	}
	
	function generateUUID() {
		var d = new Date().getTime();
		var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = (d + Math.random()*16)%16 | 0;
			d = Math.floor(d/16);
			return (c=='x' ? r : (r&0x3|0x8)).toString(16);
		});
		return uuid;
	};
	
	
	leo.utils.obj = { onSelectFn:undefined }
		
	function initRectSelect( onSelectFn ){
		leo.utils.obj.onSelectFn = onSelectFn;
		
		$("#grid").mousedown(function (e) {
			$("#big-ghost").remove();
			$(".ghost-select").addClass("ghost-active");
			$(".ghost-select").css({
				'left': e.pageX,
				'top': e.pageY
			});
			
			initialW = e.pageX;
			initialH = e.pageY;
			
			$(document).bind("mouseup", selectElements);
			$(document).bind("mousemove", openSelector);
			
		});
	}
	
	function selectElements(e) {
			$(document).unbind("mousemove", openSelector);
			$(document).unbind("mouseup", selectElements);
			var maxX = 0;
			var minX = 5000;
			var maxY = 0;
			var minY = 5000;
			var totalElements = 0;
			var elementArr = [];
			$(".elements").each(function () {
				var aElem = $(".ghost-select");
				var bElem = $(this);
				var result = doObjectsCollide(aElem, bElem);
				
				if (result == true) {
					elementArr.push( this );
				  var aElemPos = bElem.offset();
						var bElemPos = bElem.offset();
						var aW = bElem.width();
						var aH = bElem.height();
						var bW = bElem.width();
						var bH = bElem.height();

						var coords = checkMaxMinPos(aElemPos, bElemPos, aW, aH, bW, bH, maxX, minX, maxY, minY);
						maxX = coords.maxX;
						minX = coords.minX;
						maxY = coords.maxY;
						minY = coords.minY;
						var parent = bElem.parent();
						if (bElem.css("left") === "auto" && bElem.css("top") === "auto") {
							bElem.css({
								'left': parent.css('left'),
								'top': parent.css('top')
							});
						}
						
						/*
				  $("body").append("<div id='big-ghost' class='big-ghost' x='" + Number(minX - 20) + "' y='" + Number(minY - 10) + "'></div>");
					
					$("#big-ghost").css({
						'width': maxX + 40 - minX,
						'height': maxY + 20 - minY,
						'top': minY - 10,
						'left': minX - 20
					});
				  */
				  
				}
			});
			
			if( leo.utils.obj.onSelectFn != undefined )
				leo.utils.obj.onSelectFn( elementArr );
			
			$(".ghost-select").removeClass("ghost-active");
			$(".ghost-select").width(0).height(0);

			////////////////////////////////////////////////

		}

		function openSelector(e) {
			var w = Math.abs(initialW - e.pageX);
			var h = Math.abs(initialH - e.pageY);

			$(".ghost-select").css({
				'width': w,
				'height': h
			});
			if (e.pageX <= initialW && e.pageY >= initialH) {
				$(".ghost-select").css({
					'left': e.pageX
				});
			} else if (e.pageY <= initialH && e.pageX >= initialW) {
				$(".ghost-select").css({
					'top': e.pageY
				});
			} else if (e.pageY < initialH && e.pageX < initialW) {
				$(".ghost-select").css({
					'left': e.pageX,
					"top": e.pageY
				});
			}
		}
		  
		  
		function doObjectsCollide(a, b) { // a and b are your objects
			var aTop = a.offset().top;
			var aLeft = a.offset().left;
			var bTop = b.offset().top;
			var bLeft = b.offset().left;

			return !(
				((aTop + a.height()) < (bTop)) ||
				(aTop > (bTop + b.height())) ||
				((aLeft + a.width()) < bLeft) ||
				(aLeft > (bLeft + b.width()))
			);
		}  

		function checkMaxMinPos(a, b, aW, aH, bW, bH, maxX, minX, maxY, minY) {
			'use strict';

			if (a.left < b.left) {
				if (a.left < minX) {
					minX = a.left;
				}
			} else {
				if (b.left < minX) {
					minX = b.left;
				}
			}

			if (a.left + aW > b.left + bW) {
				if (a.left > maxX) {
					maxX = a.left + aW;
				}
			} else {
				if (b.left + bW > maxX) {
					maxX = b.left + bW;
				}
			}
			////////////////////////////////
			if (a.top < b.top) {
				if (a.top < minY) {
					minY = a.top;
				}
			} else {
				if (b.top < minY) {
					minY = b.top;
				}
			}

			if (a.top + aH > b.top + bH) {
				if (a.top > maxY) {
					maxY = a.top + aH;
				}
			} else {
				if (b.top + bH > maxY) {
					maxY = b.top + bH;
				}
			}

			return {
				'maxX': maxX,
				'minX': minX,
				'maxY': maxY,
				'minY': minY
			};
		}
	
	leo.utils.checkValidName = checkValidName;
	leo.utils.checkValidEmail = checkValidEmail;
	leo.utils.checkValidNumber = checkValidNumber;
	leo.utils.checkValidPhoneNumber = checkValidPhoneNumber;
	leo.utils.checkValidAddress = checkValidAddress;
	leo.utils.isMobile = isMobile;
	leo.utils.getHash = getHash;
	leo.utils.getScreenWidth = getScreenWidth;
	leo.utils.getScreenHeight = getScreenHeight;
	leo.utils.addMouseWheelEvent = addMouseWheelEvent;
	leo.utils.removeMouseWheelEvent = removeMouseWheelEvent;
	leo.utils.isIE8Browser = isIE8Browser;
	leo.utils.detectBrowser = detectBrowser;
	leo.utils.getAge = getAge;
	leo.utils.csvJSON = csvJSON;
	leo.utils.generateUUID = generateUUID;
	leo.utils.initRectSelect = initRectSelect;
})();