import { createRouter, createMemoryHistory } from 'vue-router'
import Catalog from "./views/Catalog.vue";
import Cart from "./views/Cart.vue";

export default createRouter({
    history: createMemoryHistory(),
    routes: [
        { path: '/catalog', component: Catalog, alias: '/'},
        { path: '/cart', component: Cart },
    ]
})