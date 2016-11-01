import Ember from 'ember';

export default Ember.Component.extend({
  addNewResponse: false,
  actions: {
    responseFormShow() {
      this.set('addNewResponse', true);
    },
    saveResponse1() {
      var params = {
      answer: this.get('answer')
      };
      this.set('addNewResponse', false);
      this.sendAction('saveResponse', params);
    }
  }
});