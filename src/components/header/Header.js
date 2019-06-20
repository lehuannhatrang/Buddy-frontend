import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../containers/app/selectors";
import {connect} from "react-redux";
import SearchBar from "../searchbar";

class Header extends Component {

    constructor(props) {
        super(props);
    }

    handleLogout() {
        localStorage.clear();
        this.props.history.push('/login');
    }

    render() {
        const displayName = this.props.user.userInfo ? this.props.user.userInfo.displayName : '';
        return (
            <header  className="app-header navbar" style={{...this.props.style,height:70}}>
                <a className="col-2 p-2" href="#" style={{height:"100%"}}><img className="img-fluid" src="../../public/bear.PNG" style={{height:"100%"}} alt="Italian Trulli"/></a> 
                <div className="col-6 h-100 p-3">
                    <SearchBar style={{height: "100%"}}/>   
                </div>
                <a className="col-2 p-3 justify-content-center align-self-center" data-toggle="dropdown" href="#" role="button" style={{height:"100%"}}
                    aria-haspopup="true" aria-expanded="false">
                    <img src="/img/avatars/6.jpg" className="img-avatar mr-2" alt="admin@bootstrapmaster.com" style={{height:"100%"}}/>
                    <h5 className="d-inline-block">Huan</h5>
                </a>
                
            </header>
        )

    }
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser()
});

const mapDispatchToProps = (dispatch) => ({
    dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);