$(function () {
  function nn_layer(selDom){
    selDom.on('click', function () {
      $('.layer-wrapper').fadeIn();
      $('.layer-container').css({
        'margin-top': -$('.layer-container').outerHeight() / 2,
        'margin-left': -$('.layer-container').outerWidth() / 2
      });

      var sel = $(this).index();
      var sel_con = $(this).data('layer-target');
      var sel_item = $('#' + sel_con).children('.layer-item').eq(0);
      if(!sel_item.find('iframe').attr('allowfullscreen')){
        if($(window).width() < 768){
            sel_item.show().html(sel_item.html()).siblings().hide();
        }else{
            sel_item.show().siblings().hide();
        }
      }
    })
  
    function hideLayer() {
      $('.layer-wrapper').fadeOut();
      $('.layer-item').hide();
    }
  
    $('.layer-wrapper').on('click', function (event) {
      if (event.target == this) {
        hideLayer();
      }
    });
    $(document).keyup(function (event) {
      if (event.keyCode == 27) {
        hideLayer();
      }
    });
  }
  new nn_layer($('.home-choose .s-video .video-play'))
})
