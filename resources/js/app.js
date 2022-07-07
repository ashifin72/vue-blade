import AppTest from "./Components/AppTest";

// require('./bootstrap');
window.Vue = require('vue').default;
import { createApp } from "vue";
const app = createApp({});


import AppMenu from "./Components/AppMenu";




app.component('app-menu',AppMenu);

app.component('app-test',AppTest);



app.mount('#app');