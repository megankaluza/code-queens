import Ember from 'ember';

export default Ember.Component.extend({
  addNewResponse: false,
  actions: {
    responseFormShow() {
      this.set('addNewResponse', true);
    },
    saveResponse() {
      var params = {
      answer: this.get('answer'),
      user: this.get('user'),
      };
      this.set('addNewResponse', false);
      this.sendAction('saveResponse', params);
    }
  }
});
