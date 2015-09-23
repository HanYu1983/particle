var channel = channel || {};

(function (module){

  /**
  建立socket通道
  name: string
  */
  function createChannel( name, cb ){
    $.ajax({
      url: '../fn/createChannel',
      type: 'get',
      dataType: 'json',
      data:{ Name: name },
      success: function( ret ){
        if( ret.Error != null ){
          cb( ret.Error )
        } else {
          var token = ret.Info
          var channel = new goog.appengine.Channel(token);
          cb( null, channel )
        }
      },
      error: function( xhr, res, err ){
        cb( err )
      }
    })
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
    var socket = channel.open()
    socket.onopen = cbObj.onopen
    socket.onmessage = cbObj.onmessage
    socket.onerror = cbObj.onerror
    socket.onclose = cbObj.onclose
  }
  
  
  /**
  傳送訊息
  */
  function sendChannelMessage( name, msg, cb ){
    $.ajax({
      url: '../fn/sendChannelMessage',
      type: 'post',
      dataType: 'json',
      data:{ Name: name, Message: msg },
      success: function( ret ){
        cb( ret.Error, ret )
      },
      error: function( xhr, res, err ){
        cb( err )
      }
    })
  }
  
  module.createChannel = createChannel
  module.addEventListenerAndOpenSocket = addEventListenerAndOpenSocket
  module.sendChannelMessage = sendChannelMessage
  
}) (channel)