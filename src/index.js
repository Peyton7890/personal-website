import React from "react"
import ReactDOM from 'react-dom';
import App from './App';
import { Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
    <Container className="container">
      <App/>
    </Container>,
    document.getElementById('root')
);
