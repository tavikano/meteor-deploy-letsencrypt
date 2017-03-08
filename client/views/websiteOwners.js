import { Template } from 'meteor/templating';
import { Dochead } from 'meteor/kadira:dochead';
import Player  from '@vimeo/player';

Template.websiteOwners.onCreated(function() {
  const title = 'Get more paying customers today. Detect any Adblock.';
  const metaDescription = {
    name: 'description',
    content: 'Drizzle is a user-friendly way to sell premium content or ask visitors to disable Adblock.'
  };

  DocHead.setTitle(title);
  DocHead.addMeta(metaDescription);
});

Template.websiteOwners.onRendered(function() {
  const video = $('#video');
  this.player = new Player(video);
});

Template.websiteOwners.events({
  'click #playVideo'(event, template) {
    template.player.play();
    template.$('#videoOverlay').fadeOut();
    template.$('#video').css('opacity', 1);
  }
})
