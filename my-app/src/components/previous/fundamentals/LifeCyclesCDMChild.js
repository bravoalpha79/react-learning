import React, { Component } from 'react'

export class LifeCyclesCDMChild extends Component {

    constructor(props) {
        console.log("Child constructor called");
        super(props);
    
        this.state = {
             data: "Child loading..."
        }
    }
    
    getData() {
        console.log("Child getData() called");
        setTimeout(() => {
            console.log("Child data fetched!");
            this.setState({
                data: "Child loaded!"
            })
        }, 3000)
    }

    componentDidMount() {
        console.log("Child Component mounted");
        this.getData();
    }

    render() {
        console.log("Child render method called")
        return (
            <div>
                <h1>{this.state.data}</h1>
            </div>
        )
    }
}

export default LifeCyclesCDMChild
