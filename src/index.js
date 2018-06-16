import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Comp from './Component';

ReactDOM.render(<Comp test='ThePropsWeUse'/>, document.getElementById('root'));
registerServiceWorker();
