import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      comments: this.store.peekAll('comment')
    });
  },

  setupController(controller, model) {
    controller.set('posts', model.posts);
    controller.set('comments', model.comments);
  }
});
