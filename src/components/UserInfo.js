import React from "react";

class UserInfo extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "Erin",
            age: "20"
        }

    }
    render() {
        return (
            <div>
                <h1>Name: {this.state.name}</h1>
                <h2>Age: {this.state.age} </h2>
            </div>
        )
    }

}

export default UserInfo