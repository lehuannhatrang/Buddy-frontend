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
                <a className="col-2 p-2" href="#" style={{height:"100%"}}><img className="img-fluid" src="/img/logo-buddy.png" style={{height:"100%"}} alt="Logo Buddy"/></a> 
                <div className="col-6 h-100 pt-3 pb-2">
                    {this.props.searchBar && <SearchBar style={{height: "100%"}} onChange={value => this.props.onChange(value)}/>}
                </div>
                <div className="col-1 pt-3 pb-3 justify-content-center align-self-center" role="button" style={{height:"100%"}}
                    aria-haspopup="true" aria-expanded="false">
                    <a href="#">
                        <img src="/img/avatars/6.jpg" className="img-avatar mr-2" alt="admin@bootstrapmaster.com" style={{height:"100%"}}/>
                    </a>
                    <div className="d-inline-block text text-muted" style={{cursor: "default"}}>Huan</div>
                </div>
                <div className="col-3 p-2">
                    <div className="row">
                        <div className="col-3 border-right border-light">
                            <div className="btn btn-link btn-lg">
                                Create
                            </div>
                        </div>
                        <div className="col-3 border-right border-light">
                            <div className="btn btn-link btn-lg">
                                Tutor
                            </div>
                        </div>
                        <div className="col-6 d-flex justify-content-around align-self-center" style={{cursor: "pointer"}}>
                            <span className="fa fa-comments-o" style={{"font-size": 25, color: "#20a8d8"}}/>
                            <span className="fa fa-users" style={{"font-size": 25, color: "#20a8d8"}}/>
                            <span className="fa fa-bell-o" style={{"font-size": 25, color: "#20a8d8"}}/>
                        </div>
                    </div>
                </div>
                
                
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