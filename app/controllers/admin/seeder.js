import Ember from 'ember';

export default Ember.Controller.extend({

  posts: [],

  actions: {

    generatePosts() {
      const counter = parseInt(this.get('postsCounter'));

      for (let i = 0; i < counter; i++) {
        this.store.createRecord('post').randomize().save().then(this._updateCounter(i, counter));
      }
    },

    deletePosts() {
      this._destroyAll(this.get('posts'));

      this.set('libDelDone', true);
    },
  },

  // Private methods

  _destroyAll(records) {
    records.forEach((item) => {
      item.destroyRecord();
    });
  },

  _updateCounter(elem, counter) {
    if (elem === counter-1) {
      this.set('postsCounter', 0);
      this.set('libDone', true);
    }
  }
});
