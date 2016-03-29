import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('post');
  },

  actions: {

    savePost(newPost) {
      newPost.save().then(() => this.transitionTo('posts'));
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});
