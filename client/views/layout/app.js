
Template.app.events({
  'click [data-action="user-signup"]'() {
    $('.zenmarket-iframe-wrapper').fadeIn();
  },
  /* 'keyup, click': function() {
    $('.collapse.navbar-collapse').collapse('hide');
  }*/
});


Template.app.onRendered(function(){
  $(function(){
    $(document).on( 'scroll', function(){
      if ($(window).scrollTop() > 400) {
        $('.scroll-top-wrapper').addClass('show');
      } else {
        $('.scroll-top-wrapper').removeClass('show');
      }
    });

    $('.scroll-top-wrapper').on('click', scrollToTop);
  });

  function scrollToTop() {
    var verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    var element = $('html');
    var offset = element.offset();
    var offsetTop = offset.top;
    $('html, body').animate({scrollTop: offsetTop}, 300, 'linear');
  }

});

