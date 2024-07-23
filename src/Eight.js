//class component in this render should be there
import React from "react";

class Eight extends React.Component{
    name="Vasa";
    count=7;
    constructor()
    {
        super();
        console.log("Constructer called!!...");
        this.state={
            number:1
        };
        
        console.log(this.count+1);
        console.log(this.name);
       
    }
    componentDidMount()
    {
        console.log("mounted.");
    }
    componentDidUpdate()
    {
        console.log("This is updated");
    }
    componentWillUnmount()
    {
        console.log("this is unmounted");
    }
    //use setsat
    funButtonClick = () => {
        console.log("Button clicked..");
        this.setState((prevState) => ({
            number: prevState.number + 1
        }));
    }
    render()
    {
        return (
            <div>
                <h1>Heloo,Vaishnavi {this.name} {this.count} {this.state.number}</h1>
                <button type="button" class="btn btn-primary" onClick={this.funButtonClick}>Connect</button>
            </div>
        );
    }

}
export default Eight;