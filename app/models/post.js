import DS from 'ember-data';
import Faker from 'faker';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  comments: DS.hasMany('comment'),

  randomize() {
    this.set('title', Faker.name.findName() + ' Library');
    this.set('body', Faker.lorem.text());
    return this;
  }
});
