// add the beginning of your app entry
import 'vite/modulepreload-polyfill'
import './style.css'
import javascriptLogo from './assets/javascript.svg'
import Alpine from 'alpinejs'
 
window.Alpine = Alpine
Alpine.start()
//import viteLogo from '../public/vite.svg'
// import { setupCounter } from './counter.js'
/*
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
*/
console.log("hello world")
console.log(javascriptLogo)
//console.log(window.Alpine)
