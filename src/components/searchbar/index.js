import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="d-flex border border-dark p-2" style={{...this.props.style, borderRadius: 10}}>
                <span className="justify-content-center align-self-center fa fa-search mr-2 ml-1" size={40}/>
                <input className="col-11 justify-content-center align-self-center" type="text" placeholder="Search something here" style={{"border-width": 0, height: "100%"}}/>
            </div>
        )
    }
}

export default SearchBar;