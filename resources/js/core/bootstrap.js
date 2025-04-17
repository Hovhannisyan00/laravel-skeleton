import _ from 'lodash';
window._ = _;

import 'bootstrap'; // This will autoload Bootstrap's JavaScript

import $ from 'jquery';
import Popper from 'popper.js';

window.Popper = Popper;
window.$ = window.jQuery = $;

// If you're using axios for HTTP requests:
import axios from 'axios';
window.axios = axios;

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
