
<template>
  <div class="">
      <div v-if="!running">
        <!-- <p>Press 'Start' to begin: </p> -->
        
        <h1 v-if="timer == 0"> Game Over!</h1>
        <h1 v-else> Get ready..</h1>

        <!-- <br> -->
        <input type="button" class="submit" value="Start Game" @click="startCount()"> 
        <br>
        <h1 v-if="newHighScore">New High Score!!!</h1>
        <br>

      </div>  
      <div v-else>
        <!-- <p>Press 'Restart' to begin a new quiz: </p> -->
        
        <h1>Start!</h1>
        <input type="button" class="submit" value="Restart" @click="restart()">
        <br><br>

      </div>  
  </div>
</template>

<script>
// import _ from "lodash"
export default {
  name: 'StartButton',

  props:{
      timer: Number,
      running: Boolean,
      newHighScore: Boolean

  },

  data(){
    return {

    }
  },
  computed:{

  },
  methods:{
    startCount() {
      this.$emit("startCount")
    
    },
    restart() {
        this.$emit("restart")
    }
  }
}
</script>

<style scoped>
  .submit{
    font-family: Comic Sans MS, Comic Sans, cursive;
    color: rgb(19, 5, 66);
    background: rgba(145, 79, 120, 0.5);
    cursor: pointer;
  }

  .submit:active{
      background: rgba(145, 79, 120, 0.9);
  }
</style>
