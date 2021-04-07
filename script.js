new Vue({
  el: "#flashcards-app",
  data: {
    newSide1:"",
    newSide2:"",
    newCategory:"",
    cards: [
      {
        question: "What year was IUPUI founded?",
        answer: "1969",
        category: "history",
        flipped: false
      },
      {
        question: "What is 2+2?",
        answer: "Fish",
        category: "math",
        flipped: false
      },
      {
        question: "Is mayonnaise an instrument?",
        answer: "No",
        category: "science",
        flipped: false
      }
    ]
  },
  methods: {
    submit: function () {
      this.cards.push({
        question: this.newSide1,
        answer: this.newSide2,
        category: this.newCategory,
        flipped: false
      });
      this.newSide1 = "";
      this.newSide2 = "";
      this.newCategory = "";
    },
    flipCard: function (index) {
      this.cards[index].flipped = !this.cards[index].flipped;
    }
  }
});