import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('post', params.post_id);
  },

  actions: {

    savePost(newPost) {
      newPost.save().then(() => this.transitionTo('posts'));
    },

    willTransition(transition) {

      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
