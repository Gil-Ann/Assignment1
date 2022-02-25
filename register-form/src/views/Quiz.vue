
<template>
  <div class="quiz">
    <MainBar :firstName="firstName" :lastName="lastName" :avatar="avatar" 
              :score="correct" :timer="timer" :highScore="highScore" />
    <br>

    <StartButton :timer="timer" :running="running" @startCount="countDownTimer"
                  @restart="restart" :newHighScore="newHighScore" />

    <!-- <p>Press 'Start' to begin: </p>
    <input type="button" value="Start" @click="countDownTimer()"> <br><br> -->

    <h2>Answer the questions:</h2>
    <b class="index">{{counter}})</b>
    <span> {{number1}} + {{number2}} = </span>
    <input type="text" v-model="userAnswer" @keypress.enter="sbmitAnswer()"
     :disabled="!running">
    <br><br>

    <BottomBar :answers="answers"  />
  </div>
</template>

<script>
import MainBar from '../components/MainBar.vue'
import BottomBar from '../components/BottomBar.vue'
import StartButton from '../components/StartButton.vue'

export default {
  name: 'Quiz',
  components: {
    MainBar,
    BottomBar,
    StartButton
  },
  data(){
    return {
      firstName: this.$route.params.fname,
      lastName: this.$route.params.lname,
      gender: "",
      email: "",
      phoneNum: "",
      avatar: this.$route.params.avatar,
      counter: 1,
      number1 : Math.floor(Math.random() * 20),
      number2:  Math.floor(Math.random() * 20),
      userAnswer: "",
      correct: 0,
      worng: 0,
      highScore: 0,
      newHighScore: false,
      answers: [],
      timer: 60,
      running: false,
    }
  },
  computed:{
    answer: function(){
      return this.number1 + this.number2
    },

    
  },
  methods:{
    sbmitAnswer: function(){
      this.counter += 1
      if(this.userAnswer == this.answer){
        this.correct += 1
        this.answers.push("v")
      }else{
        this.worng += 1
        this.answers.push("x")
      }
      this.number1 = Math.floor(Math.random() * 20)
      this.number2 =  Math.floor(Math.random() * 20)
      this.userAnswer = ""
    },
    countDownTimer() {
      if(!this.running)
        this.restart()
      this.running = true
      if(this.timer > 0) {
        setTimeout(() => {
          this.timer -= 1
          this.countDownTimer()
        }, 1000)
      }
      else{
        this.running = false
        this.checkHighScore()
      }
    },
    checkHighScore(){
      if(this.correct > this.highScore){
        this.newHighScore = true
        this.highScore = this.correct
      }
      // else
      //   this.newHighScore = false

    },
    restart(){
      this.counter = 1
      this.answers = []
      this.correct = 0
      this.worng = 0
      this.number1 = Math.floor(Math.random() * 20)
      this.number2 =  Math.floor(Math.random() * 20)
      this.timer = 5
      this.newHighScore = false


    }
  },
  beforeMount(){
    this.gender = localStorage.gender
    this.email = localStorage.email
    this.phoneNum = localStorage.phoneNum
  },
  // created(){
  //       this.countDownTimer()

  // }
}
</script>

<style scoped>
.quiz{
  /* position: relative;
  height: 100%;
  width: 100%; */
  
}
  input{
    background-color: rgba(145, 79, 120, 0.2);
    width: 50px;
  }
  .index{

  }
</style>
