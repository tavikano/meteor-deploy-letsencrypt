FlowRouter.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render('app', { area: 'websiteOwners' });
  }
});

FlowRouter.route('/adblocking', {
  name: 'adblocking',
  action: function() {
    BlazeLayout.render('app', { area: 'adblocking' });
  }
});

FlowRouter.route('/terms', {
  name: 'terms',
  action: function() {
    BlazeLayout.render('app', { area: 'terms' });
  }
});


FlowRouter.route('/visitors', {
  name: 'websiteOwners',
  action: function() {
    BlazeLayout.render('app', { area: 'userFeatures'});
  }
});


FlowRouter.notfound = {
  action: function() {
    BlazeLayout.render('app', {area: 'notFound'});
  }
};

