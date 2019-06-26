import React, {Component} from 'react';
import Header from "../../components/header/Header";
import Thread from "../../components/thread";

class Home extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount(){
        // this.setState({
        //     chosenTags: this.state.tags
        // })
    }

    handleClickOnTag(key){
        let newTags = this.state.chosenTags;
        console.log(this.state.chosenTags)
        if(this.state.chosenTags.includes(key)) newTags = this.state.chosenTags.filter(element => element !== key);
        else newTags.push(key)
        this.setState({chosenTags: newTags});
      }

    render() {
        return(
            <div className="bg bg-gray">
        
            </div>
        );
    }

}

export default Home;