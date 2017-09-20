import Vue from 'vue';
import App from './App';
import router from './router';
import 'normalize.css';
import 'github-markdown-css';
import Amir from 'amir-ui';
// import button from 'amir-ui/dist/button';
import 'amir-ui/dist/amir.css';
import './common/index.css';

import Header from './components/header.vue';
import SideBar from './components/sidebar.vue';

Vue.use(Amir);
// Vue.component('a-button', button);
// Vue.use(button)

// install components
Vue.component('docs-header', Header);
Vue.component('docs-sidebar', SideBar);

const app = new Vue({
	router,
	...App
}).$mount('#app');


