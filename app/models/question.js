import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  user: DS.attr(),
  city: DS.attr(),
  inquiry: DS.attr(),
  answer: DS.attr(),
  image: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
