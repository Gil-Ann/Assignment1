
<template>
  <div class="mainBar">
    <div class="score box">
        <h4>High Score:</h4>
        <p>{{highScore}} </p>
        <h2>Score:</h2>
        <p>{{score}}</p>
    </div>
    <div class="QuizTitle">
    <h1 >Quiz</h1>
    <h2 >{{timer}} sec</h2>
    </div>
    <div class="userAvatar box">
        <img class="avatar" :src="avatarSrc" :alt="avatar">
        <p>{{firstName}} {{lastName}}   </p>
        <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainBar',

  props:{
      firstName: String,
      lastName: String,
      avatar: String,
      score: Number,
      timer: Number,
      highScore: Number
  },

  data(){
    return {
      
    }
  },
  computed:{
      avatarSrc: function(){ 
        if(this.avatar === "Elk")
            return require(`..\\assets\\Elk.svg`)
        if(this.avatar === "Gorilla")
            return require(`..\\assets\\Gorilla.svg`)
        return require(`..\\assets\\Snake.svg`)
          },
    
  },
  methods:{
        
  }
}
</script>

<style scoped>
    .mainBar{
        /* display: inline;
        background: rgba(145, 79, 120, 0.5);
        background: black; */

        background-color: rgba(61, 18, 85, 0.568);
        overflow: hidden;
        display: flex;
        flex-flow: row;
    

        align-items: center;
        height: 175px;
        
    }
    /* .mainBar .avatar{
        width:50px;
        height:50px;
        float: right;
        padding-right: 50px;
        padding-top: 10px;

    }
    .mainBar figcaption{
        float: right;
        margin-bottom: 10px;
        padding-right: 10px;
    } */
    .QuizTitle{
        position: relative;
        width: 60%;
        min-width: 100px;
        /* top: 0px;
        right: 0px; */
        text-align: center;
        /* flex: auto; */
        /* flex-grow: 7; */
            /* flex: 8 7 220px; */

    }

    .score{
        /* width: 145px;
        height: 175px; */
        position: relative;
        height: inherit;
        /* width: inherit; */
        top: 0px;
        right: 0px;
        
        border-right: thin rgba(61, 18, 85, 0.568) solid;
        text-align: center;
        flex-grow: 1;

    }
    .userAvatar {
    border-left: thin rgba(61, 18, 85, 0.568) solid;
    box-sizing: border-box;
    /* display: flex; */
    flex-flow: column;
    /* padding: 5px; */
    /* max-width: 220px; */
    /* margin: auto; */
    float: right;
    position: relative;
        height: inherit;

    /* flex-grow: 1; */

}

img {
    /* padding-top: 10px; */
    padding-top: 20px;
    max-width: 135px;
    max-height: 100px;
}

p ,h2, h4{
    /* background-color: rgba(61, 18, 85, 0.568); */
    /* color: #fff; */
    /* font: italic smaller sans-serif; */
    /* padding: 3px; */
    text-align: center;
    padding: 0px;
    margin-top: 10px;
    
}
.box{
    box-sizing: border-box;
    position: relative;
    height: inherit;
    width: 20%;
    min-width: 105px;


}
</style>
