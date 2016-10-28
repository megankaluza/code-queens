import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  user: DS.attr(),
  city: DS.attr(),
  question: DS.attr(),
  image: DS.attr()
});
