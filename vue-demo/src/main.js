import Vue from 'vue'
import App from './App.vue'
import Keycloak from 'keycloak-js'

Vue.config.productionTip = false

// keycloak init options
const initOptions = {
  url: 'http://127.0.0.1:8080/auth',
  realm: 'demo',
  clientId: 'vue-demo',
  onLoad:'login-required'
}

const keycloak = Keycloak(initOptions)

keycloak.init({ onLoad: initOptions.onLoad, promiseType: 'native' }).then((authenticated) =>{
  if(!authenticated) {
    window.location.reload();
  } else {
    Vue.prototype.$keycloak = keycloak
    console.log('Authenticated')
  }

  new Vue({
    render: h => h(App),
  }).$mount('#app')

  setInterval(() =>{
    keycloak.updateToken(70).then((refreshed)=>{
      if (refreshed) {
        console.log('Token refreshed');
      } else {
        console.log('Token not refreshed, valid for '
            + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
      }
    }).catch(error => {
      console.log('Failed to refresh token', error)
    })
  }, 60000)

}).catch(error => {
  console.log('Authenticated Failed', error)
})
