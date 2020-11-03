<template>
<div>
  <nav>
     
 <!-- class="hidden-md-and-up " -->
   <v-app-bar class="mx-2" clipped app color="white">
       <v-app-bar-nav-icon color="#313639" @click="drawer = !drawer" ></v-app-bar-nav-icon>
      
    <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link">Home</a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link">Contact</a>
      </li>

      <v-toolbar-title class="headline ">
        
          <form class="form-inline ml-3">
      <div class="input-group input-group-sm">
        <input class="form-control form-control-navbar" prepend-inner-icon="mdi-magnify" type="search" placeholder="Search" aria-label="Search">
        <div class="input-group-append">
          <button class="btn btn-navbar" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>
      </v-toolbar-title>
      <v-spacer></v-spacer> 
         
      <!-- Messages Dropdown Menu -->
      <div class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <!-- <i class="far fa-comments"></i> -->
          <v-icon style="margin-right:-30px ; margin-top:10px" color="rgb(40, 31, 71)">comments</v-icon>
          <span  class=" badge badge-danger navbar-badge">3</span>
          
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <a href="#" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
               <v-avatar size="30" class=""> 
                 <v-img  src="/fakeimg.jpg" alt="/fakeimg.jpg" lazy-src="/fakeimg.jpg" contain></v-img>
                    
                  </v-avatar> 
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Brad Diesel
                  <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">Call me whenever you can...</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
            <!-- Message End -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
               <v-avatar size="30" class=""> 
                 <v-img  src="/fakeimg.jpg" alt="/fakeimg.jpg" lazy-src="/fakeimg.jpg" contain></v-img>
                    
                  </v-avatar> 
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  John Pierce
                  <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">I got your message bro</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
            <!-- Message End -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
              <v-avatar size="30" class=""> 
                 <v-img  src="/fakeimg.jpg" alt="/fakeimg.jpg" lazy-src="/fakeimg.jpg" contain></v-img>
                    
                  </v-avatar> 
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Nora Silvester
                  <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">The subject goes here</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
            <!-- Message End -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
        </div>
      </div>
      <!-- Notifications Dropdown Menu -->
      <div class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <!-- <i class="far fa-bell"></i> -->
           <v-icon  style="margin-right:-10px ; margin-top:10px" color="rgb(40, 31, 71)" >notifications</v-icon>
          <span class="badge badge-warning navbar-badge">15</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span class="dropdown-item dropdown-header">15 Notifications</span>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-envelope mr-2"></i> 4 new messages
            <span class="float-right text-muted text-sm">3 mins</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-users mr-2"></i> 8 friend requests
            <span class="float-right text-muted text-sm">12 hours</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-file mr-2"></i> 3 new reports
            <span class="float-right text-muted text-sm">2 days</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
        </div>
      </div>
       <div class="">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <!-- <i class="far fa-bell"></i> -->
           <v-icon>mdi-apps</v-icon>
       
        </a>
        <div class="dropdown-menu ">
           


          
        </div>
      </div>
     

    
      
    </v-app-bar>
    
     <v-navigation-drawer  app clipped-left v-model="drawer" color="#313639" floating >      
           <v-list-item router-link to="/home">
              <v-list-item-icon>
                <v-avatar size="35" class=""> 
                 <v-img  src="/AdminLTELogo.png" alt="/AdminLTELogo.png" lazy-src="/AdminLTELogo.png" contain></v-img>
                    
                  </v-avatar> 
              </v-list-item-icon>
              <v-item-content>
                <v-list-item-title style="margin-left: -20px; font-size: 17px" class="listColor">
                  SunnyLTE
                </v-list-item-title>
              </v-item-content>
              
            </v-list-item>
            <!-- <v-divider  ></v-divider> -->
             <v-list-item router-link to="/home">
              <v-list-item-icon>
                <v-avatar size="40" class=""> 
                 <v-img  src="/user2-160x160.jpg" alt="/user2-160x160.jpg" lazy-src="/user8-128x128.jpg" contain></v-img>
                    
                  </v-avatar> 
              </v-list-item-icon>
              <v-item-content>
                <v-list-item-title style="margin-left: -20px; font-size: 16px" class="listColor">
                  Alexander Pierce
                </v-list-item-title>
              </v-item-content>
            </v-list-item>
            <!-- <v-divider  ></v-divider> -->
            



            
           

        
          
            
       
       
          
      </v-navigation-drawer>
     
    </nav> 
    <Footer />
</div>
</template>

<script>
import  Footer from "../components/Footer";
export default {
   components: {
    Footer
  },
  data(){
     return{
           right: null,
           drawer: null,
           messages: 2,
          
        }
  },

   methods :{
       LogOut(){

   
        
         this.$router.push('/')
    
           
         
               
          }
      }  
  }
  </script>

  <style scoped>
  .v-divider {
    border-color: #b2beb5 !important; 
}
.switchSize{
    text-transform: capitalize;
}
.profileName{
  text-transform: uppercase;
  color: #5F5D5D;
  font-size: 35px;
  line-height: 43px;
}
.avatarC{
  border: 3px solid rgb(21, 23, 26);
}
.listColor{
  color: white;
}

</style>