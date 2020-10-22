import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import axios from 'axios'
import VueAxios from 'vue-axios';
import '@fortawesome/fontawesome-free/css/all.css'
import VuePlyr from "vue-plyr";
import moment from 'moment';
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

Vue.use(Vuetify);

axios.defaults.baseURL = 'http://localhost:8000/'
export default new Vuetify({
    iconfont: 'mdi' | 'fa' | 'fas',
    theme: { light: false, dark: true },
});

Vue.use(VueAxios, axios);

Vue.use(VuePlyr, {
    plyr: {
        fullscreen: {enabled: true}
    },
})

Vue.use(VueLodash, { name: 'custom' , lodash: lodash })
Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('LL')
    }
});
