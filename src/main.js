import { createApp } from 'vue'
import VScrollLock from 'v-scroll-lock'
import App from './App.vue'
import Divider from './components/SectionDivider.vue'
import Button from './components/ButtonType.vue'
// import AOS from 'aos'
import 'aos/dist/aos.css'
import VueClipboard from 'vue-clipboard2'
import { useKakao } from 'vue3-kakao-maps/@utils'
import './assets/tailwind.css'

useKakao('2ca12e1efba7068af5f4e43492868a76');
const app = createApp(App);

// new AOS.init();
app.use(VScrollLock);
app.use(VueClipboard);
app.component('SectionDivider', Divider);
app.component('ButtonType', Button);
app.mount('#app');
