
<template>
  <div>
    <MainBar :firstName="firstName" :lastName="lastName" :avatar="avatar"/>
    <p>{{firstName}} {{lastName}} </p>
    <p> {{email}} {{gender}} {{phoneNum}} </p>
  </div>
</template>

<script>
import MainBar from '../components/MainBar.vue'

export default {
  name: 'Quiz',
  components: {
    MainBar
  },
  data(){
    return {
      firstName: this.$route.params.fname,
      lastName: this.$route.params.lname,
      gender: "",
      email: "",
      phoneNum: "",
      avatar: this.$route.params.avatar
    }
  },
  computed:{

    
  },
  methods:{

  },
  beforeMount(){
    this.gender = localStorage.gender
    this.email = localStorage.email
    this.phoneNum = localStorage.phoneNum
  }
}
</script>

<style scoped>

</style>
