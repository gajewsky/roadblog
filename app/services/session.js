import Ember from 'ember';

export default Ember.Service.extend({
  currentUser: false,
  authToken: Ember.computed.alias('currentUser.authToken'),
  isSignedIn: Ember.computed.alias('currentUser'),

  pushCurrentUser: function(userAttributes) {
    let user = Ember.Object.create(userAttributes);
    this.set('currentUser', user);
  },

  create: function(username, password) {
    return Ember.$.ajax({
      url: '/auth_token',
      method: 'post',
      data: {
        username: username,
        password: password
      }
    }).done((response) => {
      this.pushCurrentUser(response.user);
      var authToken = response.user.auth_token;
      Ember.$.ajaxPrefilter('+*', function(options) {
        options.headers = { 'X-Token': authToken };
        return true;
      });
    });
  },

  destroy: function() {
    this.set('currentUser', false);
  }
});
