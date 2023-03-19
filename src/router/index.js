import * as Vue from 'vue'
// import VueRouter from 'vue-router'
import { createWebHistory, createRouter } from 'vue-router'

// Vue.use(createWebHistory, createRouter) 

function importComponent(path) {
    return () => import(`../components/${path}.vue`)
}
function importPages(path) {
    return () => import(`../pages/${path}.vue`)
}
// const userRole = localStorage.getItem('role')

const router = new createRouter({
    history: createWebHistory(),
    routes: [
    {
        path: "/",
        name: "home",
        meta: {title: 'Home - GKR Baciro'},
        component: importPages('Index'),
    },
    {
        path: "/tentang/sejarah",
        name: "sejarah",
        meta: {title: 'Sejarah - GKR Baciro'},
        component: importPages('Sejarah'),
    },
    // {
    // path: "/",
    // name: "sidebar",
    // component: importComponent('admin/Sidebar'),
    // children: [
    //     {
    //         path: "/dashboard",
    //         name: "dashboard",
    //         meta: {title: 'Dashboard - AKB'},
    //         component: importComponent('admin/view/Dashboard'),
    //     },
    //     {
    //         path: "/bahan",
    //         name: "bahan",
    //         // meta: {title: 'Bahan - AKB', owner:false, opsManager: true, waiter: false, kasir:false, chef:true},
    //         meta: {title: 'Bahan - AKB'},
    //         component: importComponent('admin/view/Bahan'),
    //         beforeEnter:((to,from,next)=>{
    //             if(localStorage.getItem('role')==="Operasional Manager" || localStorage.getItem('role')==="Chef")
    //             next()
    //             else {
    //             next({
    //                 path: '/dashboard',
    //             })
    //             }
    //         }), 
    //     },
    //     {
    //         path: "/customer",
    //         name: "customer",
    //         // meta: {title: 'Customer - AKB', owner:false, opsManager: true, waiter: true, kasir:false, chef:false},
    //         meta: {title: 'Customer - AKB'},
    //         component: importComponent('admin/view/Customer'),
    //         beforeEnter:((to,from,next)=>{
    //             if(localStorage.getItem('role')==="Operasional Manager" || localStorage.getItem('role')==="Waiter" || localStorage.getItem('role')==="Waiter dan Kasir")
    //             next()
    //             else {
    //             next({
    //                 path: '/dashboard',
    //             })
    //             }
    //         }),
    //     },
    //     // {
    //     // path: "/transaksi",
    //     // name: "transaksi",
    //     // // meta: {title: 'Transaksi - AKB',owner:false, opsManager: true, waiter: false, kasir:true, chef:false, waiterKasir:false},
    //     // meta: {title: 'Transaksi - AKB'},
    //     // component: importComponent('admin/view/Transaksi'),
    //     // beforeEnter:((to,from,next)=>{
    //     //     if(localStorage.getItem('role')==="Operasional Manager" ||  localStorage.getItem('role')==="Kasir" ||  localStorage.getItem('role')==="Waiter dan Kasir")
    //     //     next()
    //     //     else {
    //     //     next({
    //     //         path: '/dashboard',
    //     //     })
    //     //     }
    //     // }),

    //     // },
    // ]
    // },
    // {
    //     path: '*',
    //     redirect: '/404'
    // },
  ],
});


//set judul
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
//   if(to.name !== 'login' && !localStorage.getItem('token')){
//     next({
//       path:'/login',
//     })
//   }

  next()
})

export default router;