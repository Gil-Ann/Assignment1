
<template>
  <div class="BottomBar">
    <b>Your answers:</b> <br>
    <div class="answer" v-for="(answer, index) in answers" :key="index">
        <b>{{index + 1}}: </b>
        <img v-if="answer == 'v'" src="../assets/V-icon.svg" alt="v">
        <img v-else src="../assets/X-icon.svg" alt="x">
        <b>, </b>
    </div>
  </div>
</template>

<script>
// import _ from "lodash"
export default {
  name: 'BottomBar',

  props:['answers'],

  data(){
    return {
      a: []
    }
  },
  computed:{
    //   answers: function(){
    //     if(!this.answer)
    //         return []
    //     return this.a.push(this.answer) 
    //   } 
  },
  methods:{
        
  }
}
</script>

<style scoped>
    img{
        height: 30px;
        margin-top: 50;
    }
    .BottomBar{
        position: relative;
        bottom: 0;
        min-height: 55px;
        /* margin: auto; */
        /* align-items: center; */
        justify-content: center;
        background-color: rgba(61, 18, 85, 0.3);
    }
    .answer{
        display: contents;
        align-items: center;   
        margin-right: 100;
    }
</style>
