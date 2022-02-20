
<template>
  <div>
    <label>First name:</label><br>
    <div style="display: flex">
    <input :class="{invalid: !valids.firstName & !firstTime}" type="text" v-model="inputs.firstName" >
    <span class="error" v-show="!valids.firstName & !firstTime">*First name must have atleast one letter.</span>
</div>
    <br>
    <!-- <span class="error" v-show="!valids.firstName & !firstTime">*First name must have atleast one letter.</span> -->
    <!-- <p class="error" v-show="!valids.firstName">*First name must have atleast one letter.</p> -->

    <label>Last name:</label><br>
    <input :class="{invalid: !valids.lastName & !firstTime}" type="text" v-model="inputs.lastName">
    <span class="error" v-show="!valids.lastName & !firstTime">*Last name must have atleast one letter.</span>
    <br>

    <label >Gender:</label> <br>
    <select :class="{invalid: !valids.gender & !firstTime}" v-model="inputs.gender">
      <option value="" selected>Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">other</option>
    </select> 
    <span class="error" v-show="!valids.gender & !firstTime">*Must chose a gender.</span>
    <br>  


    <label>Email:</label><br>
    <input :class="{invalid: !valids.email & !firstTime}" type="text" v-model="inputs.email">
    <span class="error" v-show="!valids.email & !firstTime">*Email must have the form: 'X@X.X'.</span>
    <br>

    <label>Phone number:</label><br>
    <input :class="{invalid: !valids.phoneNum & !firstTime}" type="text" v-model="inputs.phoneNum">
    <span class="error" v-show="!valids.phoneNum & !firstTime">*Phone number must have 10 digits.</span>
    <br>
    
    <p>Chose your power animal:</p>
    <label :class="{invalidAvatar: !valids.avatar & !firstTime}">
      <input type="radio" value="Elk" v-model="inputs.avatar">
      <img class="radio-img" src="..\assets\elk.svg" alt="Elk"> 
    </label>
    <label :class="{invalidAvatar: !valids.avatar & !firstTime}">
      <input  type="radio" value="Gorilla"  v-model="inputs.avatar">
      <img class="radio-img" src="..\assets\Gorilla.svg" alt="Gorilla"> 
    </label>
    <label :class="{invalidAvatar: !valids.avatar & !firstTime}" >
      <input type="radio" value="Snake"  v-model="inputs.avatar">
      <img class="radio-img" src="..\assets\snake.svg" alt="Snake"> 
    </label>
    <br>
    <span class="errorAvatar" v-show="!valids.avatar & !firstTime">*Must chose an avatar.</span>
    <br>

    <input type="button" value="Submit" @click="submitForm()">
      

  </div>
</template>

<script>
export default {
  name: 'RegForm',
  data(){
    return {
      // firstName: "",
      // lastName: "",
      // gender: "",
      // email: "",
      // phonNum: "",
      // avatar: "",
      inputs: {firstName: "", lastName: "", gender: "", 
                  email: "", phoneNum: "", avatar: ""},
      // valids: {firstName: true, lastName: true,
      //          gender: true, email: true, 
      //          phoneNum: true, avatar: true},
      firstTime: true
    }
  },
  computed:{
    allValid : function(){
      let areAllValid = true
      for(let key in this.valids){
        areAllValid = areAllValid & this.valids[key]
      }
      return areAllValid
    },
    isFirstNameValid: function(){
      return this.inputs.firstName.length > 0
    },
    isLastNameValid: function(){
      return this.inputs.lastName.length > 0
    },
    isGenderValid: function(){
      return this.inputs.gender.length > 0
    },
    isEmailValid: function(){
      let regexEmail =/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (this.inputs.email.match(regexEmail)) {
        return true; 
      } 
      return false; 
    },
    isPhoneNumberValid: function(){
      let phoneno = /^\d{10}$/;
      if(this.inputs.phoneNum.match(phoneno)){
        return true
      }
      return false
    },

    isAvatarValid: function(){
      return this.inputs.avatar.length > 0
    },

    valids: function(){
            return {firstName: this.isFirstNameValid, lastName: this.isLastNameValid,
               gender: this.isGenderValid, email: this.isEmailValid, 
               phoneNum: this.isPhoneNumberValid, avatar: this.isAvatarValid}
    },
    
  },
  methods:{
    submitForm: function(){
      this.firstTime = false
      if(this.allValid)
        console.log(this.inputs)
    },
    // updateValids: function(){
    //   this.valids = {firstName: this.isFirstNameValid, 
    //           lastName: this.inputs.lastName.length > 0,
    //           gender: this.inputs.gender.length > 0, email: this.validateEmail(), 
    //           phonNum: this.validatePhoneNum(), avatar: this.inputs.avatar.length > 0}
    // },
    // validateEmail: function(){
    //   let regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
    //   if (this.inputs.email.match(regexEmail)) {
    //     return true; 
    //   } 
    //   return false; 
    // },
    // validatePhoneNum: function(){
    //   let phoneno = /^\d{10}$/;
    //   if(this.inputs.phoneNum.match(phoneno)){
    //     return true
    //   }
    //   return false
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  input, select{
    margin: center;
    background-color: rgba(145, 79, 120, 0.2);
  }
  .invalid{
    /* display: inline-block; */
      background-color: rgba(255,0,0,0.2);
  }

  [type=radio] { 
    display: none;
  }
  
  /* IMAGE STYLES */
  [type=radio] + img {
    cursor: pointer;
  }
   
  .invalidAvatar {
    /* box-sizing: border-box;
     */
    border: none;
    outline: 1px solid rgba(255,0,0,0.5);
  }

  /* CHECKED STYLES */
  [type=radio]:checked + img {
    outline: 2px solid rgba(145, 79, 120, 0.5);
  }
  .radio-img{
    width:150px;
    height:150px;
}
#submit{
    background: rgba(145, 79, 120, 0.5);
    cursor: pointer;
}

#submit:active{
    background: rgba(145, 79, 120, 0.9);
}
.error{
  font-size: 13px;
  padding-left: 10px;
  /* position: absolute; */
  
  color: rgb(241, 36, 36);
}

.errorAvatar{
  font-size: 13px;
  padding-left: 10px;
  color: rgb(241, 36, 36);
}
</style>
