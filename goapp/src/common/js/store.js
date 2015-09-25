var store = store || {};

(function(module){
  
  /**
  data: {
    FBID: string,
    AccessToken: string,
    FileName: string,
    Data: string
  }
  cb: function( err, ret ){}
  */
  function save( data, cb ){
    $.ajax({
      url: '../fn/saveUser',
      type: 'post',
      dataType: 'json',
      data: data,
      success: function( ret ){
        cb( ret.Error, ret )
      },
      error: function( xhr, res, err ){
        cb( err )
      }
    })
  }
  
  /**
  data: {
    FBID: string,
    AccessToken: string,
    FileName: string
  }
  cb: function( err, ret ){}
  */
  function load( data, cb ){
    $.ajax({
      url: '../fn/loadUser',
      type: 'post',
      dataType: 'json',
      data: data,
      success: function( ret ){
        cb( ret.Error, ret )
      },
      error: function( xhr, res, err ){
        cb( err )
      }
    })
  }
  
  module.save = save
  module.load = load
  
}) (store)