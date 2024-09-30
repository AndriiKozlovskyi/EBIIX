import { createApp } from 'vue';
import './assets/index.css';
import App from './App.vue';
import 'primeicons/primeicons.css';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import PrimeVue from 'primevue/config';
import Noir from './presets/Noir.js';
const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Noir,
        options: {
            prefix: 'p',
            darkModeSelector: '.p-dark',
            cssLayer: false,
        }
    }
});
app.use(ToastService);
app.component('Toast', Toast);
app.mount('#app');
//# sourceMappingURL=main.js.map