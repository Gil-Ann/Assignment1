
<template>
  <div class="mainBar">
    <div class="score">
        <br>
        <h2>Score:</h2>
        <p>10</p>
    </div>
    <h1 class="QuizTitle">Quiz</h1>
    <div class="userAvatar">
        <img class="avatar" :src="avatarSrc" :alt="avatar">
        <figcaption>{{firstName}} {{lastName}} the {{avatar}}   </figcaption> <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainBar',

  props:{
      firstName: String,
      lastName: String,
      avatar: String
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
          text-align: center;
        flex: auto;
        
    }

    .score{
        width: 145px;
        height: 175px;
        border-right: thin #c0c0c0 solid;
        
    }
    .userAvatar {
    border-left: thin #c0c0c0 solid;
    display: flex;
    flex-flow: column;
    padding: 5px;
    max-width: 220px;
    margin: auto;
    float: right;

}

img {
    /* padding-top: 10px; */
    margin-top: 20px;
    width: 135px;
    max-height: 100px;
}

p {
    /* background-color: rgba(61, 18, 85, 0.568); */
    /* color: #fff; */
    /* font: italic smaller sans-serif; */
    padding: 3px;
    text-align: center;
    
}
</style>
