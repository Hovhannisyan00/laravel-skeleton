import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactExample from './components/ReactExample.jsx';

const appRoot = document.getElementById('app');

if (appRoot) {
    const root = ReactDOM.createRoot(appRoot);
    root.render(
        <ReactExample />
    );
}
