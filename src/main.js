import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import App from './App.vue'
import './index.css'
import router from './Router'

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    cache,
    uri: "https://countries.trevorblades.com/"
})


const app = createApp({
    setup(){
        provide(DefaultApolloClient, apolloClient);
    },

    render: () => h(App),
})

app.use(router).mount('#app')