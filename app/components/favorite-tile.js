import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestion: Ember.inject.service(),

  actions: {
    addToFavorites(question) {
      this.get('favoriteQuestion').add(question);
    }
  }
});
