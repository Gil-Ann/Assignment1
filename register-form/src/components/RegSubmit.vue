<template>
  <div >
    <input type="button" value="Submit" id="submit" >
  </div>
</template>

<script>
export default {
  name: 'RegSubmit',
//   data(){
//     return {
//       inputs: []
//     }
//   }
}
</script>

<style scoped>
  #submit{
    background: rgba(145, 79, 120, 0.5);
    cursor: pointer;
}

#submit:active{
    background: rgba(145, 79, 120, 0.9);
}

</style>