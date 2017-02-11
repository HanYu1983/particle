var app = app || {};
app.utils = app.utils || {};
(function( module ){
	function getUid(){
		return leo.utils.generateUUID();
	}
	
	function keyToName( key ){
		switch( key ){
			case 'lifetime':return '生命毫秒'; break;
			case 'mass':return '質量'; break;
			case 'x':return '位置x';break;
			case 'y':return '位置y';break;
			case 'rot':return '角度';break;
			case 'vx':return '速度x';break;
			case 'vy':return '速度y';break;
			case 'vr':return '轉速';break;
			case 'fvx':return '作用力x';break;
			case 'fvy':return '作用力y';break;
			case 'fvr':return '作用力旋轉';break;
			case 'scale-x':return '寬度';break;
			case 'scale-y':return '高度';break;
			case 'r':return '紅';break;
			case 'g':return '綠';break;
			case 'b':return '藍';break;
			case 'a':return 'alpha';break;
			case 'emit-angle':return '發射角度';break;
			case 'emit-range':return '發射範圍';break;
			case 'emit-count':return '發射數目';break;
			case 'emit-force':return '發射力道';break;
			case 'emit-duration':return '發射週期';break;
			case 'const':return '常數';break;
			case 'constAdd':return '常數累加';break;
			case 'constMul':return '常數累乘';break;
			case 'linear':return '線性';break;
			case 'linearAdd':return '線性累加';break;
			case 'linearMul':return '線性累乘';break;
			case 'randStartAdd':return '亂數開始';break;
			case 'rand':return '亂數重設';break;
			case 'randAdd':return '亂數累加';break;
			case 'custom':return '自訂重設';break;
			case 'customAdd':return '自訂累加';break;
			case 'customMul':return '自訂累乘';break;
		}
	}
	
	module.getUid = getUid;
	module.keyToName = keyToName;
})( app.utils );