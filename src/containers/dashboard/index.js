import React, {Component} from 'react';
import Header from "../../components/header/Header";
import Thread from "../../components/thread";

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state={
            tags : ["Python", "NodeJS", "C++", "C#", "asp.net", "VS-Studio", "Excel", "R", "Java", "JavaScript"],
            chosenTags: [],
            threads: [
                {
                    title: "I am trying to store output from calculator and display on label or text box in visual basic asp.net",
                    cardList: ["asp.net", "C#"],
                    score: 5,
                },
                {
                    title: "Help!! My Visual Studio doesn't work :((",
                    cardList: ["VS-Studio"],
                    score: 15,
                },
                {
                    title: "How to recover data on my excel files",
                    cardList: ["Excel"],
                    score: 40,
                },
                {
                    title: "How to install Jupyter NoteBook ?? Help!!",
                    cardList: ["Python"],
                    score: -10,
                },
                {
                    title: "I need some book to learn Node JS, can you recommend somes ?",
                    cardList: ["NodeJS"],
                    score: 23,
                },
            ],
            searchKeyWord: "",
        }
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
        const data = this.state.threads.filter(thread => thread.title.toLowerCase().includes(this.state.searchKeyWord) && ( this.state.chosenTags.length === 0 || thread.cardList.filter(tag => this.state.chosenTags.includes(tag)).length > 0))
        return(
            <div className="bg bg-gray">
                <Header style={{position:"relative"}} onChange={(value) => this.setState({searchKeyWord: value.toLowerCase()})}/>
                <div className="row">
                    <div className="col-8 offset-2 mt-3">
                        <div className="row bg-white pr-3 pl-3 pt-2 pb-2" >
                            <span className="fa fa-tag mr-4" style={{"font-size": 30, "color": "gray"}}></span>
                            <div className="text text-muted" style={{"font-size": 23}}>Trendings</div>
                        </div>
                        <div className="row p-3 bg-secondary" style={{"overflow-x": "scroll", "overflow-y": "hidden"}}>
                            {this.state.tags.map(tag => (
                                <div className={`${this.state.chosenTags.includes(tag) ? "topic-card-chosen" : "topic-card"}`} key={tag} style={{cursor: "pointer"}} onClick={() => this.handleClickOnTag(tag)}>
                                    {tag}
                                </div>
                            ))}
                        </div>
                        <div className="row bg-white pr-3 pl-3 pt-2 pb-2 mt-3" >
                            <span className="fa fa-fire mr-4" style={{"font-size": 30, "color": "gray"}}></span>
                            <div className="text text-muted" style={{"font-size": 23}}>Threads</div>
                        </div>
                        <div className="row pl-3 pr-3 bg-secondary" style={{"max-height" : 590, "overflow-y": "scroll"}}>
                            {data.map(thread => (
                                <Thread className="mt-3 mb-3" style={{width: "100%", margin : "auto"}} 
                                title={thread.title}
                                cardList= {thread.cardList}
                                score= {thread.score}/>
                            ))}
                            {data.length === 0 && (
                                <div className="text" style={{color: "white", "font-size": 30}}>
                                    No Data Found
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default DashBoard;