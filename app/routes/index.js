import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      return Ember.RSVP.hash({
        questions: this.store.findAll('question')
        // reviews: this.store.findAll('review')
      });
    },
    actions: {
      saveQuestion3(params) {
        var newQuestion = this.store.createRecord('question', params);
        newQuestion.save();
        this.transitionTo('index');
      },
      // saveReview(params) {
      //   console.log("in saveReview - index");
      //   var newReview = this.store.createRecord('review', params);
      //   newReview.save();
      //   this.transitionTo('index');
      // },
      update(question, params) {
        Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            question.set(key,params[key]);
          }
        });
        question.save();
        this.transitionTo('index');
      },

    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    }
  }
});
