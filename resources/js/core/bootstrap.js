import $ from 'jquery';
import { createPopper } from '@popperjs/core';
import _ from 'lodash';
import axios from 'axios';
import 'bootstrap';

window.$ = window.jQuery = $;
window._ = _;
window.axios = axios;
window.Popper = { createPopper };

// If you're using axios for HTTP requests:
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Optional: If you're using Laravel Echo and Pusher
// import Echo from 'laravel-echo';
// import Pusher from 'pusher-js';

// window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: import.meta.env.VITE_PUSHER_APP_KEY,
//     cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });
