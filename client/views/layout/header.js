Template.header.onRendered(function() {
  this.autorun(() => {
    const user = Meteor.user();

    if (user && !user.vendorStatus) {
      const id = setInterval(function() {
        const elm = $('.zenmarket-iframe-wrapper');
        if (elm.length > 0) {
          elm.fadeIn();
          clearInterval(id);
        }
      }, 2000);
    }
  });
});

Template.header.helpers({
  loggingIn: function() {
    return Meteor.loggingIn();
  }
});

Template.header.events({
  'click a[href*="#"]:not([href="#"])'(event) {
    var a = event.target;
    if (location.pathname.replace(/^\//,'') == a.pathname.replace(/^\//,'') && location.hostname == a.hostname) {
      var target = $(a.hash);
      target = target.length ? target : $('[name=' + a.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  }
});
