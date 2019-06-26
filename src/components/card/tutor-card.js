import React, {Component} from 'react';
class TutorCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rate: 0,
            tempRate: 0,
        }
        this.renderStar = this.renderStar.bind(this)
    }

    componentDidMount(){
        this.setState({
            rate: this.props.rate || 0,
        })
    }

    renderStar(id){
        const isChosen = this.state.tempRate > 0 ? id <= this.state.tempRate : id <= this.state.rate;
        return(
            <i id={`star-${id}`} className={`fa ${ isChosen ? 'fa-star' : 'fa-star-o'} mr-3`} style={{"font-size":30, cursor: "pointer", color: isChosen ? "#b74d33" : "gray"}} 
                        onMouseOver={() => this.setState({tempRate: id})} 
                        onMouseOut={() => this.setState({tempRate: 0})} 
                        onClick={() => this.setState({rate: id})}/>
        )
    }

    render() {
        return(
            <div className={`${this.props.className ||''} `} style={{...this.props.style, height:500, width:300, "box-shadow": "5px 4.5px 10px 0 rgba(0, 0, 0, 0.16)"}} >
                <div className="row p-0 m-0" style={{height:250, width: "100%"}}>
                    <img className="" src={this.props.img || "/img/tutor/tutor-2.png"} style={{height: "100%" , width:"100%", cursor:"pointer"}} />
                </div>
                <div className="border-bottom border-secondary row m-0 p-0" style={{height:200, width: "100%"}}>
                        <div className="row text m-0 p-3" style={{'font-size':20, color:"#615959" ,cursor: "default"}}>
                            {this.props.name || "Grand Marshall"}
                        </div>
                        <div className="row text text-muted m-0 pt-0 pb-1 pl-3 pr-3" style={{'font-size':15}}>
                            <p style={{overflow: 'hidden', 'max-height': '6.0em', 'line-height': '1.5em', cursor: "default"}}>
                            {this.props.description || "it officia commodo ex quis ex fugiat ullamco in enim labore. Cupidatat elit nisi adipisicing eu reprehenderit adipisicing excepteur. Do aliqua velit ipsum nostrud ad consectetur amet dolore exercitation aute nisi consectetur consequat proident. Laborum pariatur dolor magna eu. Officia et consequat pariatur cupidatat consequat sunt consequat irure eu ipsum fugiat."}</p>
                        </div>
                        <a href="#" className="row m-0 pb-3 pl-3 pr-3 pt-0" style={{'font-size':17, color: "red"}}>
                            Read more
                        </a>
                </div>
                <div className="row m-0 pt-2 pb-2 pl-4 pr-2 justify-content-between">
                    <div>
                        {this.renderStar(1)}
                        {this.renderStar(2)}
                        {this.renderStar(3)}
                        {this.renderStar(4)}
                        {this.renderStar(5)}
                    </div>
                    <div className="text" style={{"font-size": 23, color:"#e00000"}}>
                        {this.props.price || "58"}$
                    </div>

                </div>
            </div>
        );
    }

}

export default TutorCard;