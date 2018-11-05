import React from 'react';
import ReactDOM from 'react-dom';
import CV from './App';
import Data from './data';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(<Router basename={process.env.PUBLIC_URL}><CV {...Data} /></Router>, global.document.getElementById('root'));
