import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    saveQuestion1() {
      var params = {
        title: this.get('title'),
        user: this.get('user'),
        city: this.get('city'),
        question: this.get('question'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion2', params);
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this?')) {
        this.sendAction('destroyQuestion', question);
  }
  }
  }
});
