var channel = channel || {};

(function (module){

  /**
  建立socket通道
  name: string
  */
  function createChannel( name, cb ){
    cb(null, {name:name})
  }
  
  /**
  打開socket並且加入callback
  cbObj : {
    onopen: function(){},
    onmessage: function(path, option){
      path: {
        data: your message
      }
      option: ?
    },
    onerror: function(){},
    onclose: function(){}
  }
  */
  function addEventListenerAndOpenSocket( channel, cbObj ){
    // 聽自己的信箱
    var address = 'app/card/channel/'+channel.name
    var database = firebase.database();
    var channelRef = database.ref(address);
    
    console.log(address)
    setTimeout(function(){
      cbObj.onopen()
    }, 0)
  
    channelRef.on('value', function(snapshot) {
      console.log("value change")
      console.log(snapshot)
      if(snapshot == null){
        return
      }
      var value = snapshot.val()
      console.log(value)
      if(value == null){
        return
      }
      cbObj.onmessage(JSON.parse(value))
      /*
      var path = {data: value}
      var option = {}
      cbObj.onmessage(path, option)
      */
    });
  }
  
  
  /**
  傳送訊息
  */
  function sendChannelMessage( name, msg, cb ){
    // 送到指定的信箱
    var address = 'app/card/channel/'+name
    var database = firebase.database();
    var testRef = database.ref(address);
    testRef.set(msg)
    cb(null)
  }
  
  module.createChannel = createChannel
  module.addEventListenerAndOpenSocket = addEventListenerAndOpenSocket
  module.sendChannelMessage = sendChannelMessage
  
}) (channel)