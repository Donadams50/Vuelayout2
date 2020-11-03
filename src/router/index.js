import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import AuthLayout from "../Layouts/AuthLayout.vue";
import MainLayout from "../Layouts/MainLayout.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   redirect: "/",
  //   component: AuthLayout,
  //   children:[
  //     {
  //       path: "/",
  //       name: "Login",
  //       component: Login
  //     },
  //   ]
  // },
  {
    path: "/",
    redirect: "/",
    component: MainLayout,
    children:[
      {
        path: "/",
        name: "ExecptionManagement",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/ExecptionManagement.vue")
          
      },
         ]
  },
  
];

const router = new VueRouter({
  routes
});

export default router;
