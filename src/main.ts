import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "bootstrap/dist/css/bootstrap.min.css"

//Never got the bootstrap JS to work due to implementation details in PatternLab
//import "bootstrap"

//Importen PatternLab scaffolding and styles
import "@/styles/css/pattern-scaffolding.css"
import "@/styles/css/style.css"

createApp(App).use(router).mount("#app")
