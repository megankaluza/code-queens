import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    update(question, params) {
     this.sendAction('question', question, params);
   }
  }
});
