let $buttons = $('#bottomBar > li')
let $tags = $('.main > section')
function watchTouchevent(){
  $([document.documentElement, document.body]).animate({
    scrollTop: $tags.eq(0).offset().top
  }, 1000)
  $buttons.on('touchstart',function(e){
     $('#bottomBar').addClass('stiky') 
     $('#bottomBar > li').addClass('highlight')
     if(a){
      window.clearTimeout(a)
      }
      a = setTimeout(function(){
      $('#bottomBar').removeClass('stiky')
      $('#bottomBar > li').removeClass('highlight')
      },4000)
     var index = $(e.currentTarget).index()
     $buttons.removeClass('active')
     $buttons.eq(index).addClass('active')
     $([document.documentElement, document.body]).animate({
      scrollTop: $tags.eq(index).offset().top

  }, 1000)
  })
  
  $($tags).on('touchstart',function(e){
    var index = $(e.currentTarget).index()
    $buttons.removeClass('active')
    $buttons.eq(index).addClass('active')
    $('#bottomBar').addClass('stiky') 
    $('#bottomBar > li').addClass('highlight')
    if(a){
      window.clearTimeout(a)
      }
      a = setTimeout(function(){
      $('#bottomBar').removeClass('stiky')
      $('#bottomBar > li').removeClass('highlight')
      },3000)
  })
  var a
  $($tags).on('touchmove',function(){
    $('#bottomBar').addClass('stiky')
    $('#bottomBar > li').addClass('highlight')
    if(a){
    window.clearTimeout(a)
    }
    a = setTimeout(function(){
    $('#bottomBar').removeClass('stiky')
    $('#bottomBar > li').removeClass('highlight')
    },2000)
  })
  // $($tags).on('touchend',function(){
  //   setTimeout(()=>{
  //     $('#bottomBar').removeClass('stiky')
  //     $('#bottomBar > li').removeClass('highlight')
  //   },2000)  
  // })
  $('#hoverme').on('touchstart',function (){
    $('#hoverme').addClass('hover') 
  })
  $('#hoverme').on('touchend',function (){
    $('#hoverme').removeClass('hover') 
  })
}
function watchMouseevent (){
  $([document.documentElement, document.body]).animate({
    scrollTop: $tags.eq(0).offset().top
  }, 1000)
  $buttons.on('click',function(e){
     var index = $(e.currentTarget).index()
     $buttons.removeClass('active')
     $buttons.eq(index).addClass('active')
     $([document.documentElement, document.body]).animate({
      scrollTop: $tags.eq(index).offset().top
  }, 1000)
  })
  $($tags).on('mouseenter',function(e){
    var index = $(e.currentTarget).index()
    $buttons.removeClass('active')
    $buttons.eq(index).addClass('active')
    
  })
  var a = 0;
var a;
$(window).on('scroll',function(){   
  $('#bottomBar').addClass('stiky')
  $('#bottomBar > li').addClass('highlight')
  if(a){
    window.clearTimeout(a)
  }
  a = setTimeout(function(){
    $('#bottomBar').removeClass('stiky')
    $('#bottomBar > li').removeClass('highlight')
  },800)


})
 
 
  
  
}


if(document.ontouchstart !== undefined){
  watchTouchevent()
}else{
  watchMouseevent ()
}
