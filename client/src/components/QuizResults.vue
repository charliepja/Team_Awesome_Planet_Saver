<template lang="html">
  <div class="center">
    <div class="header-wrapper">
      <h2>Quiz Results</h2>
    </div>
    <div class="content">
      <h3>{{this.percentage}}%</h3>
      <p>{{this.passMessage}}</p>
      <button v-on:click="returnHome()">Return To Module List</button>
      <div v-if="passed">
    </div>
    <button v-else="passed" v-on:click="this.retakeQuiz">Retake Quiz</button>
    </div>


  </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
  name: 'quiz_results',
  props: ['result_object'],
  data(){
    return {
      'passed': null,
      'percentage': '',
      'show': false
    }
  },
  mounted(){
    eventBus.$on('calcResults', () => {
      this.calcData()
    })
  },

  computed: {
    passMessage: function(){
      if (this.passed === true){
        return "Congratulations you have passed"
      }
      else if (this.passed === false) {
        return "Sorry you haven't passed this time. Please try again"
      }
      else { return ""}
    },

    calcShow: function(){
      return "hidden"
    }
  },

  methods: {
    calcData(){
      let correct = 0;
      let number_questions = 0;
      for (let ans of this.result_object.results){
        number_questions += 1
        if (ans.result === true){
          correct += 1
        }
      }
      this.calcPassed(correct)
      this.calcPercentage(correct, number_questions)

    },

    calcPassed(num_correct){
      if (num_correct >= this.result_object.pass_mark)
        {this.passed = true}
        else {this.passed = false}
    },

    calcPercentage(num_correct, num_questions){
      let result = num_correct/num_questions*100
      return this.percentage = Math.round(result)
    },
    retakeQuiz(){
      eventBus.$emit('retakeQuiz')
    },

		returnHome() {
			this.$router.push({path: '/learning_library'})
		}
  }
}
</script>

<style lang="css" scoped>
</style>
