import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'
import APIKey from './config.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  created() {
    firebase.initializeApp({
        apiKey: APIKey.firebaseApi,
        authDomain: 'victors-visited.firebaseapp.com',
        databaseURL: 'https://victors-visited.firebaseio.com',
        projectId: 'victors-visited',
        storageBucket: 'victors-visited.appspot.com',
        messagingSenderId: '873869873251',
        appId: '1:873869873251:web:6374d30d639062d7'
    })
  },
}).$mount('#app')

