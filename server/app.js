Meteor.publish(null, function() {
  if (!this.userId) { return this.ready(); }

  return Meteor.users.find({_id: this.userId}, {fields: {roles: 1, vendorStatus: 1}});
});
