import Ember from 'ember';

export default Ember.Route.extend({
  favoriteQuestion: Ember.inject.service('favorite-question'),
});
