import Ember from 'ember';

export default Ember.Component.extend({
  counter: 0,
  actions: {
    generateAction() {
      this.sendAction('generateAction');
    },

    deleteAction() {
      this.sendAction('deleteAction');
    },

    updateCounter(value) {
      this.set(this.counter,value);
    },
  },
  isCounterHigh: Ember.computed.gte('counter', 20)
});
