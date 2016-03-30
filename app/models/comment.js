import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  nickname: DS.attr('string'),
  post: DS.belongsTo('post'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
});
