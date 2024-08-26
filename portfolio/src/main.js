import { createApp } from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import App from './App.vue';
import 'bulma/css/bulma.css';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';
import './assets/theme.css';

const app = createApp(App);
app.use(Buefy);
app.mount('#app');
