
import Ember from 'ember';

export function initialize(container, application) {
  let ajaxPrefilter = function(options, originalOptions, xhr) {
    let authToken = "CnR4Ksfk8avUGd7BY9A4b6Jo";

    if (authToken) {
        options.headers = { 'X-Token' : authToken };
    }

    return true;
  };

  Ember.$.ajaxPrefilter('+*', ajaxPrefilter);
}

export default {
  session: Ember.inject.service('session'),
  name: 'session-ajax-prefilter',
  initialize: initialize
};
