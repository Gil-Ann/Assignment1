<template>
  <div>    
    <label :for="name">  {{ formal }}:</label><br>
    <input type="text" v-bind:id="{name}" :name="name" v-model="value"><br>
    <p>{{value}}</p>
  </div>
</template>

<script>
export default {
  props: ['formal', 'name', 'value'],

  name: 'RegInput',
  // data(){
  //   return {
  //     title: title
  //   }
  // }
}
</script>

<style scoped>

    input, select{
        background-color: rgba(145, 79, 120, 0.2);
    }
    input:invalid{
        background-color: rgba(255,0,0,0.2);
    }

    input:valid {
        background-color: rgba(145, 79, 120,0.2);
    }

    input:invalid + img  {
        border: 1px dashed rgba(255,0,0,0.8);
    }
</style>
