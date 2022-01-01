import React from "react"
import { Navbar, Row, NavLink} from 'reactstrap';
import './app.css';

class App extends React.Component {
    // constructor(props) {
    //     super(props);

    // }

    // componentDidMount() {

    // }

    render() {
        return (
            <div className="app">
                <Navbar className='Links' expand='lg'>
                    <NavLink class="text-dark" href="mailto:pdm4689@rit.edu">
                        Email
                    </NavLink>
                    <NavLink href="https://github.com/Peyton7890">
                        GitHub
                    </NavLink>
                    <NavLink href="https://www.linkedin.com/in/peyton-martin-567404221">
                        LinkedIn
                    </NavLink> 
                    <NavLink href = {('/Resume.pdf')} target = "_blank">
                        Resume
                    </NavLink>
                </Navbar>
                <Row>
                    <h1 className='MyName'>Peyton Martin</h1>
                </Row>
                <Row>
                    <h2 className='Bio'>Hi! Im an 18 year old software engineering student at RIT.
                        <br/>I am very passionate about education, and plan on making projects that reflect that.
                    </h2>
                </Row>
            </div>
        );
    }
} 
export default App;

