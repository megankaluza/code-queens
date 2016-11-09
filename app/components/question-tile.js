import Ember from 'ember';

export default Ember.Component.extend({
  header: Ember.computed('question.title', 'question.user', function(){
    return this.get('question.title') + ' by: ' + this.get('question.user');
  }),

  updateQuestionForm: false,
  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    }
  }
});
