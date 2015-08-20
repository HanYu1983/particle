var defaultStock = {
	facebookId:'12233',
	stocks:[
		{
			id:'2330',
			count:200,
			offset:0,
			lines:[
			/*
				{
					id:1,
					type:'clock',
					deletable:false,
					needMove:false,
					sub:[]
				},
				{
					id:2,
					type:'volume',
					deletable:false,
					needMove:true,
					sub:[{
							show:true,
							type: 'ma', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
							value: {
								n: 5,
								m: 10,
								o: 20, 
								p: 40,
								color: ''
							}
						}]
				},
				*/
				{
					id:3,
					type:'kline',
					deletable:false,
					sub:[
						{
							show:true,
							type: 'ma', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
							value: {
								n: 5,
								m: 10,
								o: 20, 
								p: 40,
								color: ''
							}
						},
						{
							show:false,
							type: 'ema', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
							value: {
								n: 5,
								m: 10,
								o: 20, 
								p: 40,
								color: ''
							}
						},
						{
							show:false,
							type: 'bbi', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
							value: {
								n: 12,
								m: 0,
								o: 0, 
								p: 0,
								color: ''
							}
						},
						{
							show:false,
							type: 'yu-sd', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
							value: {
								n: 20,
								m: 0,
								o: 0, 
								p: 0,
								color: ''
							}
						},
						{
							show:false,
							type: 'yu-car', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
							value: {
								n: 1,
								m: .005,
								o: .7, 
								p: 0,
								color: ''
							}
						},
						{
							show:false,
							type: 'kd', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
							value: {
								n: 9,
								m: 1,
								o:3, 
								p:0,
								color: ''
							}
						},
						{
							show:false,
							type: 'macd', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
							value: {
								n: 12,
								m: 26,
								o: 0, 
								p: 0,
								color: ''
							}
						},
						{
							show:false,
							type: 'Chaikin', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
							value: {
								n: 3,
								m: 10,
								o: 9, 
								p: 0,
								color: ''
							}
						},
						{
							show:false,
							type: 'eom', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
							value: {
								n: 14,
								m: 3,
								o: 0, 
								p: 0,
								color: ''
							}
						},
						{
							show:false,
							type: 'yu-clock', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
							value: {
								n: 20,
								m: 20,
								o: 0, 
								p: 0,
								color: ''
							}
						},
						{
							show:false,
							type: 'yu-macd', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin | yu-macd | bbi | eom
							value: {
								n: 5,
								m: 12,
								o: 0, 
								p: 0,
								color: ''
							}
						}
					]
				}
			]
		}
	]
};