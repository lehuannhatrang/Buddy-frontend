import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={`${this.props.className} d-flex pr-2 pl-2`} style={{...this.props.style, "box-shadow": "0 1.5px 3px 0 rgba(0, 0, 0, 0.16)"}}>
                <span className="justify-content-center align-self-center fa fa-search mr-2 ml-1" style={{"font-size": 20, color:"gray"}}/>
                <input className="col-11 justify-content-center align-self-center" type="text" placeholder="Search something here" style={{...this.props.style ,"border-width": 0, height: "100%", outline: "none", "font-size": 20}}
                    onChange={e => this.props.onChange(e.target.value)}/>
            </div>
        )
    }
}

export default SearchBar;