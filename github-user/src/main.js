import {createApp, h, provide} from 'vue';
import App from './App.vue';
import router from "./router/index.js";
import {DefaultApolloClient} from "@vue/apollo-composable";
import {apolloClient} from "./apollo/index.js";


const app = createApp({
    setup () {
        provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App),
})

app.use(router).mount('#app')