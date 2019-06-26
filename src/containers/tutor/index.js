import React, {Component} from 'react';
import Header from "../../components/header/Header";
import Thread from "../../components/thread";
import SearchBar from "../../components/searchbar";
import TutorCard from "../../components/card/tutor-card";

class Tutor extends Component {
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
            <div className="bg bg-gray pb-4">
                <Header style={{position:"relative"}} searchBar={false} onChange={(value) => this.setState({searchKeyWord: value.toLowerCase()})}/>
                <div className="row mt-4 mb-4">
                    <SearchBar className="shadow rounded col-5 bg-white mx-auto" style={{height: 50}} />
                </div>
                <div className="row p-2 p-2 mt-4">
                    <div className="col-10 offset-1">
                        <div className="row justify-content-around">
                            <TutorCard name="Jim Tran" 
                                rate={3}
                                price="20"
                                img="/img/tutor/tutor-3.png"
                                description="nim ipsum dolore cupidatat consequat do sit. Laboris eu elit ullamco pariatur nulla qui reprehenderit culpa reprehenderit. Lorem amet excepteur commodo magna do deserunt id enim excepteur anim qui excepteur elit irure. Duis eiusmod ad mollit veniam ipsum exercitation in. Lorem id eiusmod et cillum ut reprehenderit."/>
                            <TutorCard name="Tuong Vy" 
                                rate={4}
                                price="35"
                                img="/img/tutor/tutor-4.png"
                                description="ollit do dolor laboris veniam est est magna ut sit qui occaecat anim cillum laborum. Minim culpa ullamco culpa id esse minim eu laboris mollit anim duis velit commodo. Anim sunt culpa fugiat ullamco et. Nulla in est voluptate ut voluptate eu sint anim cupidatat et veniam proident."
                            />
                            <TutorCard name="Anh Thuy Le" 
                                rate={2}
                                price="25"
                                img="/img/tutor/tutor-5.png"
                                description="inim fugiat minim enim et ut reprehenderit aliquip non occaecat consectetur cupidatat proident laborum. Deserunt voluptate nostrud mollit culpa mollit duis fugiat aute voluptate laboris qui. Ullamco fugiat laboris occaecat veniam dolore nisi sint occaecat laborum ex. Nostrud occaecat tempor in sunt enim laborum consectetur deserunt sunt dolor cillum velit excepteur. Sit irure tempor in pariatur ea est ea. Fugiat consectetur laboris occaecat nulla quis pariatur aute incididunt nulla ipsum exercitation ad culpa."
                            />
                            <TutorCard />
                        </div>
                        <div className="row justify-content-around mt-5">
                            <TutorCard name="Lee Hun" 
                                rate={5}
                                price="52"
                                img="/img/tutor/tutor-6.png"
                                description="onsequat sunt cupidatat fugiat nisi cupidatat nostrud tempor. Nostrud fugiat non magna do ut anim excepteur est eiusmod ad. Pariatur enim occaecat sit ut exercitation labore mollit mollit occaecat in cillum fugiat adipisicing. Eu quis veniam eiusmod tempor sunt mollit nisi sint occaecat. Enim dolore nisi labore dolore cillum occaecat quis dolore. Elit duis consectetur qui esse amet."/>
                            <TutorCard name="HoQuang Huy" 
                                rate={4}
                                price="37"
                                img="/img/tutor/tutor-7.png"
                                description="fficia velit fugiat in Lorem ad do aute nisi do. Et cillum anim nisi sit sunt nulla adipisicing ullamco dolor ea ipsum qui. Minim cillum ad et excepteur sunt reprehenderit laborum laborum dolore non labore sunt."
                            />
                            <TutorCard name="Jessica Miles" 
                                rate={4}
                                price="42"
                                img="/img/tutor/tutor-8.png"
                                description="roident elit laboris cupidatat sunt Lorem quis nisi amet ut dolor elit in commodo enim. Minim do consequat culpa exercitation voluptate sit tempor velit non dolor eiusmod velit enim ut. Nostrud ea do dolor ut cupidatat commodo exercitation labore Lorem velit nulla."
                            />
                            <TutorCard name="Meredith Hendricks" 
                                rate={3}
                                price="53"
                                img="/img/tutor/tutor-9.png"
                                description="it non aliquip consequat commodo ex consequat et Lorem culpa. Cillum laboris sit ut ea adipisicing qui. Esse ea sint magna dolor magna non qui excepteur occaecat tempor."
                            />
                        </div>
                    </div>
                </div>
                <div className="row mt-4 justify-content-around">
                    <span className="fa fa-chevron-down" style={{"font-size": 35, color: "gray"}}/>
                </div>
            </div>
        );
    }

}

export default Tutor;