import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', function() {
    this.route('new');
    this.route('show', { path: '/:post_id' });
    this.route('edit', { path: '/:post_id/edit' });
  });

  this.route('sign-in');
  this.route('sign-out');

  this.route('admin', function() {
    this.route('seeder');
  });
});

export default Router;
