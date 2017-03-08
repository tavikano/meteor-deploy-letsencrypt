import { Template } from 'meteor/templating';
import { Dochead } from 'meteor/kadira:dochead';

Template.userFeatures.onCreated(function() {
  const title = 'Get more paying customers today.';
  const metaDescription = {
    name: 'description',
    content: 'Drizzle is a free platform to sell premium content and increase sales in the most user-friendly way.'
  };

  DocHead.setTitle(title);
  DocHead.addMeta(metaDescription);
});
