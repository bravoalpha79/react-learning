import React, { Component } from 'react';
import MethodsAsPropsChild from "./MethodsAsPropsChild"

export class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false,
        }
    }
    
    handleSignInSignOut = () => {
        this.setState({
            isLoggedIn: (!this.state.isLoggedIn)
        })
    }

    render() {
        return (
            <div>
                <MethodsAsPropsChild 
                    isLoggedIn={this.state.isLoggedIn}
                    handleSignInSignOut={this.handleSignInSignOut}
                />
            </div>
        )
    }
}

export default MethodsAsPropsParent;
