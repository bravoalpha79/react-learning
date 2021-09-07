import React, { Component } from 'react'
import axios from "axios";

export class HTTPPost extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             apiResponse: null
        }
    }

    postToApi = () => {
        axios.post(
            "https://jsonplaceholder.typicode.com/posts", 
            {
                title: "hello World!",
                body: "It works!",
                userId: 123,
            }
        ).then(response => {
            this.setState({
                apiResponse: response.data
            })
        })
    }

    render() {
        const {apiResponse} = this.state;
        return (
            <div>
                <button onClick={this.postToApi}>
                    Add Post
                </button>
                {
                    apiResponse
                    ? (<div>
                        <h3>{apiResponse.title}</h3>
                        <h4>{apiResponse.userId}</h4>
                        <p>{apiResponse.body}</p>  
                        </div>)
                    : <h4>Please click the button</h4>
                }
            </div>
        )
    }
}

export default HTTPPost
