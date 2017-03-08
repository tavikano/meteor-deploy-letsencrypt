import { Template } from 'meteor/templating';
import { Dochead } from 'meteor/kadira:dochead';
import Player  from '@vimeo/player';

Template.adblocking.onCreated(function() {
  const title = 'Detect any Adblock on any browser.';
  const metaDescription = {
    name: 'description',
    content: 'Recover up to 50% of lost revenue with our user-friendly Adblock detector.'
  };

  DocHead.setTitle(title);
  DocHead.addMeta(metaDescription);
});

Template.adblocking.onRendered(function() {
  const video = $('#video');
  this.player = new Player(video);
});

Template.adblocking.events({
  'click #playVideo'(event, template) {
    template.player.play();
    template.$('#videoOverlay').fadeOut();
    template.$('#video').css('opacity', 1);
  }
})
