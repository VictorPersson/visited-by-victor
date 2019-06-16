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
        authDomain: APIKey.authDomain,
        databaseURL: APIKey.databaseURL,
        projectId: APIKey.projectId,
        storageBucket: APIKey.storageBucket,
        messagingSenderId: APIKey.messagingSenderId,
        appId: APIKey.appId
    })
  },
}).$mount('#app')

