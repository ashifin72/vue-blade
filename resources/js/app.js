import {createApp} from "vue";
import AppMenu from "./Components/AppMenu";
import AppTest from "./Components/AppTest";

require('./bootstrap');
const app = createApp({})
app.component('app-menu', AppMenu)
app.component('app-test', AppTest)
app.mount('#app')