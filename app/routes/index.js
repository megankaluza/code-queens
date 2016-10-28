import Ember from 'ember';

// var questions = [{
//   id: 1,
//   title: "Function",
//   user: "Alice Peyton",
//   city: "Portland",
//   question: "What does a function() mean?",
//   image: "https://s-media-cache-ak0.pinimg.com/originals/9f/34/89/9f3489488c6b7a94d5f5e0ed1dc298fe.jpg"
// }, {
//   id: 2,
//   title: "Bootstrap",
//   user: "Julia Reagan",
//   city: "Brooklyn",
//   question: "How do you create a navigation bar using bootstrap?",
//   image: "https://0.s3.envato.com/files/182743560/Screen-Shot/screen-shot-1.jpg"
// }, {
//   id: 3,
//   title: "PHP",
//   user: "Mary Julian",
//   city: "Seattle",
//   question: "How do I create a PHP database without any prior coding knowledge?",
//   image: "https://i.ytimg.com/vi/aZg81KjnBiI/maxresdefault.jpg"
// }, {
//   id: 4,
//   title: "Graphic Design",
//   user: "Riley Bailey",
//   city: "Missoula",
//   question: "I want to learn how to create a logo using Sketch and PhotoShop. How long would it take to create my own logo?",
//   image: "https://support.sketchbook.com/hc/article_attachments/203083627/Login_or_Signin_from_web.png"
// }];

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    saveQuestion3(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  // 
  //   update(question, params) {
  //     Object.keys(params).forEach(function(key) {
  //       if(params[key]!==undefined) {
  //         question.set(key,params[key]);
  //       }
  //     });
  //     question.save();
  //     this.transitionTo('index');
  //   },
  //
  //   destroyQuestion(question){
  //     question.destroyRecord();
  //     this.transitionTo('index');
  //   }
  // }
});
