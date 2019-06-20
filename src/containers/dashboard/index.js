import React, {Component} from 'react';
import Header from "../../components/header/Header";

class DashBoard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Header style={{position:"relative"}}/>
                <div className="row">
                    <div className="col-8 offset-2 border border-info justify-content-center align-self-center">
                    </div>
                </div>
            </div>
        );
    }

}

export default DashBoard;