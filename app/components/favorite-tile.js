import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestion: Ember.inject.service('favorite-question'),

  actions: {
    add(favorite) {
      console.log('hi');
      this.get('favoriteQuestion').add(favorite);
    }
  }
});
