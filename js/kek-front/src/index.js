import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './app/App';


// ReactDOM.render(<App />, document.getElementById('root'));


const root = document.getElementById('root');
const rootRender = createRoot(root);
rootRender.render(<App />);
