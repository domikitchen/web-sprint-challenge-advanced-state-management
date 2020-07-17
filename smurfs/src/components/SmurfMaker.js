import React from 'react';

import { v4 as uuid } from 'uuid';


class SmurfMaker extends React.Component {
    state = {
        newSmurf: {
            name: "",
            age: "",
            height: "",
            id: uuid()
        }
    }

    handleChange = evt => {
        const { name, value } = evt.target;
        
        this.setState({ newSmurf: {
            ...this.state.newSmurf,
            [name]: value
        }})
    }

    addSmurf = evt => {
        if(this.state.newSmurf.name === "" || this.state.newSmurf.age === "" || this.state.newSmurf.height === ""){
            evt.preventDefault();
        }
        else{
            this.props.ndSmurf(this.state.newSmurf);
        }
    }
    

    render(){
        return(
            <div>
                <form onSubmit = {this.addSmurf}>
                    <input
                        type = "text"
                        placeholder = "Smurf name..."
                        name = "name"
                        value = {this.state.newSmurf.name}
                        onChange = {this.handleChange}
                    />
                    <input
                        type = "number"
                        placeholder = "Age of Smurf..."
                        name = "age"
                        value = {this.state.newSmurf.age}
                        onChange = {this.handleChange}
                    />
                    <input
                        type = "number"
                        placeholder = "Smurf Height(in cm)..."
                        name = "height"
                        value = {this.state.newSmurf.height}
                        onChange = {this.handleChange}
                    />
                    <button>+</button>
                </form>
            </div>
        )
    }
}

export default SmurfMaker;