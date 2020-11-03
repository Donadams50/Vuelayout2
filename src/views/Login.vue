<template>
  <div id="loginform">
     <v-snackbar
      v-model="snackbar"
      
    >
      {{ text }}
      <v-btn
        color="green"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
     <v-snackbar
      v-model="snackbar1"
     
    >
      {{ text1 }}
      <v-btn
        color="red"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
    <v-form ref="form" id="logform" >
      <div >
            <div id="loginheader">
             
                <h2>Exception portal</h2>
            </div>
            <div id="loginfields">
                <p style="text-align:left; color: white; font-family:Lato; margin-bottom:-1px">Email</p>
                <v-text-field :rules='emailRules' solo v-model="userId"  style="border-radius:0px;"  placeholder="Email" ></v-text-field>
                <p style="text-align:left; color: white; font-family:Lato; margin-bottom:-1px">User name</p>
                <v-text-field solo v-model="name"  :rules="[inputRule]" style="border-radius:0px;"  placeholder="User name" ></v-text-field>

               
                <!-- <p style="text-align:right; color: black; font-size: 12px; font-weight: 200px; font-family:Lato; margin-top:-20px">Forgot Password?</p> -->
            </div>
            <div id="loginbutton">   
                    <v-btn rounded :loading ="loading"  @click="Login()" color="rgb(40, 31, 71)" class="text-capitalize pl-7 pr-7 " style="font-family: Lato;" dark large>Login</v-btn>
                
            </div>
             </div>
        </v-form>

   


</div>
  
</template>

<script>


export default {
  name: 'Login',

   data () {
      return {
        numberRule: val => {
      if(val < 0 || val=== "") return 'Please enter a positive number'
      return true
    },
      inputRule: val1 => {
      if( val1 === "") return 'Field cannot be empty'
      return true
    },
    emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
        loading: false,
           text: "",
      text1: "",
       mode: '',
        snackbar: false,
         snackbar1: false,
        timeout: 6000,
        x: null,
        y: 'top',
        name:"",  
        show3: false,
        userId: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 5 || 'Min 5 characters',
        },
      }
    },
computed: {
             userdetails(){
    
                       return this.$store.state.LOGIN_SUCCESS[0]
                              }
            
                   },
    methods :{
       Login(){
         if (this.$refs.form.validate()){
  this.loading = true
     

    let userId = this.userId
         
           this.$store.dispatch('Login', userId)
          .then((success)=>{
              console.log(success.data);
                         
            // alert(this.userId);
              let newusid = this.$store.state.LOGIN_SUCCESS[0].user_ID.S;
           //   alert(this.name);
              let newusname= this.$store.state.LOGIN_SUCCESS[0].user_NAME.S;
               this.loading= false;
            if(this.userId === newusid && this.name === newusname ){
              
               this.text ="Login succesful"
              //  this.snackbar= true
                   setTimeout(() => {
        this.$router.push({
         path: "/home",
        });
      }, 10)
                //  this.$router.push({ path: "/exceptionmanagement"})
            }else{


                this.text1 ="Invalid user id/ email"
                this.snackbar1 = true
            }
                  
             
          })
          .catch((error)=>{
             this.text ="Logging in  as visitor"
            //    this.snackbar= true
   setTimeout(() => {
        this.$router.push({
         path: "/home",
        });
      }, 10)
                 let user_ID= {
                   S: this.userId
                 }
                 let user_NAME= {
                   S: this.name
                 }
                 let user_ROLE= {
                   S: 'Visitor'
                 }
                  let details = []
                 let details1 = {
                   user_ID: user_ID,
                   user_NAME: user_NAME,
                   user_ROLE: user_ROLE

                 }
                 details.push(details1)
                 
                this.$store.dispatch('LoginVisitor', details) 
                    

                  this.loading= false;
              //  this.text1 ="An error occurred"
              //   this.snackbar1 = true
              
               
          })

         
         }        
          }
      }   
 
}
</script>
<style scoped>
#logform{
    background-color : white; 
     max-width: 500px;
    margin: auto;
    padding: 3.125rem;
    border-radius: 6px;
    height:460px;
}
#loginform{
    background: url(/backgroundLogin.png);
    background-size: cover;
    background-position: center;
    min-height:60vh;
    padding: 7.375rem;
}
#loginheader{
    padding-bottom: 30px;
    text-align: center;
}
#loginbutton{
    padding-bottom: 0px;
    text-align: center;
    margin-top: 70px;
}
#loginheader h2{
    color:rgb(40, 31, 71);
  
}

#loginfields{
    width:90%;
    margin-left: 10px;
}
/* @media only screen and (max-width: 480px) {
  #loginform {
    padding: 5.975rem;
  }
} */
@media only screen and (max-width: 768px) {
  #loginform {
    padding: 1.175rem;
  }
}
</style>
