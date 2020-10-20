import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import axios from 'axios'
import VueAxios from 'vue-axios';
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify);
Vue.use(VueAxios, axios);

axios.defaults.baseURL = 'http://localhost:8000'
export default new Vuetify({
    iconfont: 'mdi' | 'fa',
    theme: { light: false, dark: true },
});
