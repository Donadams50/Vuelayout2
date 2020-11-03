<template>
  <div class="about">

      <v-snackbar
      v-model="snackbar"
      :bottom="y === 'bottom'"
      :color="color"
      :left="x === 'left'"
      
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      
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
      :bottom="y === 'bottom'"
      :color="color"
      :left="x === 'left'"
      
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      
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
    <v-dialog v-model="deletedialog" width="500" persistent>
            <v-card class="pa-12 mx-auto" id="login" max-width="500" elevation="7">
                <v-system-bar light color="#ffffff" class="mt-n5">
                    <v-spacer></v-spacer>
                    <v-btn icon @click="deletedialog=false">
                        <v-icon color="red">mdi-close</v-icon>
                    </v-btn>
                </v-system-bar>
                
                <v-card-text>
                  <div class="text-center mt-5 mb-4" style="">Are you sure you want to delete this exception?</div>
                </v-card-text>
                <v-card-actions>

                    <div class="mx-auto">
                       <v-btn   class="text-center" :loading="loading"  rounded  @click="finalDelete()">
                            <div style="font-size:13px; font-weight:400;  text-align:right;" class="  mx-3 text-capitalize"> 
                                Proceed  
                            </div>
                             </v-btn>
                        
                    </div>
                </v-card-actions>
            </v-card>
        </v-dialog>
    <div id="pagename">
               
  </div>
 
         <div class="mx-2">
        <v-tabs  class="mt-5 ">
    <v-tab>My exceptions</v-tab>
    <v-tab-item class="mx-2"> 
         <v-toolbar flat  color="">
                            
            <div>  </div>
                <v-spacer></v-spacer>
                <div  class="primary--text">
                  <v-text-field class=" mr-7 ml-3 primary--text" color="primary" placeholder="Search for exception" v-model="searchWord1" @keyup="searchComponent()" prepend-inner-icon="mdi-magnify" ></v-text-field>
                </div>
        </v-toolbar>     
       <v-data-table
                :headers="headers"
                :items="myException"
                :search="searchWord1"
                no-data-text='No recent exception'
              >
                  <template v-slot:item.action="{ item }">
                    <v-btn text  @click=" viewException(item.RequestID)" style="border: 1px #13095e solid; color:#13095e" class="text-none mr-3" small>View</v-btn>
                    <v-btn text  v-if="item.RequestStatus==='Awaiting-Review'" @click=" deleteException(item.RequestID)" style="border: 1px #13095e solid; color:#13095e" class="text-none" small>Delete</v-btn>
               </template>
                
              </v-data-table>
              
              
      </v-tab-item>
    
    <v-tab >All exceptions</v-tab>
    <v-tab-item class="mx-5"> 
     <v-toolbar flat  color="">
                            
       <div>  </div>
                <v-spacer></v-spacer>
                <div  class="primary--text">
                  <v-text-field class=" mr-7 ml-3 primary--text" color="primary" placeholder="Search for exception" v-model="searchWord" @keyup="searchComponent()" prepend-inner-icon="mdi-magnify" ></v-text-field>
                </div>
    </v-toolbar>

      <v-data-table  v-if="this.$store.state.LOGIN_SUCCESS[0].user_ROLE.S !=='Visitor'"
                :headers="headers1"
                :items="allException"
                :search="searchWord"
                no-data-text='No recent exception'
              >
                  <template v-slot:item.action="{ item }">
                    <v-btn text  @click=" viewExceptionRead(item.RequestID, item.RequestorID)" style="border: 1px #13095e solid; color:#13095e" class="text-none mr-3" small>View</v-btn>
                    <v-btn text v-if="item.role==='admin'" @click="deleteException(item.RequestID)" style="border: 1px #13095e solid; color:#13095e" class="text-none" small>Delete</v-btn>
               </template>
                
              </v-data-table>
        
        
              
      </v-tab-item>
  </v-tabs> 
  </div>
       

  </div> 
</template>

<script>
import  Navbar from '../components/Navbar'
//import { mapState }from 'vuex'
export default {
  components: {
        Navbar
    },
     

     computed: {
        
     },

     data () {
      return {
        snackbar: false,
        snackbar1: false,
        rid: '',
        searchWord:'',
        searchWord1: '',
        loading: false,
       deletedialog: false,
       headers: [
         
        {
         text: 'Exception id',
          align: 'left',
          sortable: false,
          value: 'RequestID',
        },
           { text: 'Exception type', value: 'ExceptionType' },
       //  { text: 'Requestor', value: 'RequestorName' },
          { text: 'Division', value: 'Division', sortable: false },
          { text: 'App Code', value: 'ApplicationCode' },
          
          { text: 'Exception Lifetime', value: 'ExceptionLifetime' },
          { text: 'Status', value: 'RequestStatus' },
            { text: '', value: 'action', sortable: false, }
        ],
         headers1: [
         
        {
         text: 'Exception id',
          align: 'left',
          sortable: false,
          value: 'RequestID',
        },
           { text: 'Exception type', value: 'ExceptionType' },
         { text: 'Requestor', value: 'RequestorName' },
          { text: 'Division', value: 'Division', sortable: false },
        
          
          { text: 'Exception Lifetime', value: 'ExceptionLifetime' },
          { text: 'Status', value: 'RequestStatus' },
            { text: '', value: 'action', sortable: false, }
        ],
       
         desserts: [
           
              

        ],
        desserts2: [
          

        ]
      }
    },
    mounted () { 
      
    if(this.$store.state.LOGIN_SUCCESS.length > 0){
          
      let userId =  this.$store.state.LOGIN_SUCCESS[0].user_ID.S
   
           this.$store.dispatch('loadallException')
       .then(()=>{
             console.log(this.$store.state.allException)
          
         })
          .catch((error)=>{
         
              console.log(error)
                 alert(error)
              
          }) 
          
            this.$store.dispatch('loadMyException', userId)
       .then(()=>{
            // console.log(this.$store.state.myException)
          
         })
          .catch((error)=>{
         
              console.log(error)
                 alert(error)
              
          }) 
   
      } else{
this.$router.push({
         path: "/",
        })
    } 
      
       

 
          },
          computed: {
             allException(){
    
                       return this.$store.state.allException
                              },

             myException(){
    
                       return this.$store.state.myException
                              }
            
                   },
    methods:{
          viewException(id){
            this.loading = true
            if(this.$store.state.LOGIN_SUCCESS[0].user_ROLE.S==='Visitor'){
               this.$router.push({ path: `/exceptionmanagementread/${id}`})
            }else{

              this.$router.push({ path: `/exceptionmanagement/${id}`})
            }
            
            
   //  this.$router.push({ path: "/exceptionmanagement/"})
          },
           viewExceptionRead(id, requestoid){
             this.loading = true
             if(    this.$store.state.LOGIN_SUCCESS[0].user_ID.S===requestoid || this.$store.state.LOGIN_SUCCESS[0].user_ROLE.S==='admin' || this.$store.state.LOGIN_SUCCESS[0].user_ROLE.S==='exception_manager' || this.$store.state.LOGIN_SUCCESS[0].user_ROLE.S==='role_developer'){
           
            this.$router.push({ path: `/exceptionmanagement/${id}`})
             }else{
                
            this.$router.push({ path: `/exceptionmanagementread/${id}`})
             }
   //  this.$router.push({ path: "/exceptionmanagement/"})
          },
          
          deleteException(reqid){
            this.rid = reqid
            this.deletedialog = true
          },

      finalDelete(){
        this.loading= true
           this.$store.dispatch('deleteRequest', this.rid)
       .then(()=>{
         let userId = this.$store.state.LOGIN_SUCCESS[0].user_ID.S
         this.$store.dispatch('loadMyException', userId)
         this.$store.dispatch('loadallException')
             this.loading= false
             this.deletedialog = false
                this.text ="Successfully deleted the request"
                this.snackbar = true
         })
          .catch((error)=>{
         
              console.log(error)
                   this.loading= false;
               this.text1 ="An error occurred"
                this.snackbar1 = true
              
          }) 

      }
      
      
      
    
    }
  
}
</script>

<style scoped>

#dashboard{
    background-color: #FDF8F8;
    font-family: 'Lato', sans-serif;
}
#pagename h3{
  text-align:left;
  padding-left: 30px;
  padding-top: 13px;
  color: #111;
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 22px;
}

</style>

