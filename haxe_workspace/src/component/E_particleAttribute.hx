package component;

/**
 * @author vic
 */
enum E_particleAttribute 
{
	LEFT_TIME;
	POSITION_X;
	POSITION_Y;
	VELOCITY_X;
	VELOCITY_Y;
	COLOR;
	MASS;
	SIZE;
}
/*
:formulaList (or formulaList nil) ; 改變函式
	:lifetime (or lifetime 10)        ; 生命
	:pos (or pos [0 0 0])             ; 位置
	:vel (or vel [0 0 0])             ; 速度
	:color (or color [1 0 0 1])       ; 顏色
	:mass (or mass 1)                 ; 質量（還沒有作用）
	:size (or size [10 10])           ; 大小

	發射器(emit裡面)
	:count 1      ; 一次射出幾層(prototype列表)
	:duration 1   ; 間隔（秒）
	:angle 0      ; 角度（弧度）
	:range 0      ; 範圍（弧度）
	:force 0      ; 發射力道
	*/