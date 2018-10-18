var store = store || {};

(function(module){
  
  var local = true
 // var particleDir = local ? 5910974510923776 : 5738600293466112
  var particleDir = local ? 4665227836653568 : 5738600293466112
  /**
  data: {
    Name: string,
    Content: string,
    Override: bool
  }
  */
  function saveParticle( data, cb ){
    data.Parent = particleDir
    
    $.ajax({
      url: '../dbfile/particle/',
      type: 'post',
      dataType: 'json',
      data: data,
      success: function( ret ){
        cb( ret.Error, ret.Info )
      },
      error: function( xhr, res, err ){
        cb( err )
      }
    })
  }
  /**
  data: {
    Detail,
    Offset: int,
    Count: int
  }
  */
  function loadParticleList( data, cb ){
    $.ajax({
      url: '../dbfile/particle/' + particleDir,
      type: 'get',
      dataType: 'json',
      data: data,
      success: function( ret ){
        cb( ret.Error, ret.Info )
      },
      error: function( xhr, res, err ){
        cb( err )
      }
    })
  }
  
  function loadParticle( id, cb ){
    $.ajax({
      url: '../dbfile/particle/' + id,
      type: 'get',
      dataType: 'json',
      success: function( ret ){
        cb( ret.Error, ret.Info )
      },
      error: function( xhr, res, err ){
        cb( err )
      }
    })
  }
  
  function getParticleImageUrl( id ){
    return '../dbfile/particle/' + id + '?Content'
  }
  
  
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
        cb( ret.Error, ret.Info )
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
        cb( ret.Error, ret.Info )
      },
      error: function( xhr, res, err ){
        cb( err )
      }
    })
  }
  
  module.save = save
  module.load = load
  module.saveParticle = saveParticle
  module.loadParticleList = loadParticleList
  module.getParticleImageUrl = getParticleImageUrl
  module.loadParticle = loadParticle
  
}) (store)