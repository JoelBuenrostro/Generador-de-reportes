import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            name: '',
            lastname: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, lastname } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="name">Nombre</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={name} 
                    onChange={this.handleChange} />
                <label for="lastname">Apellido</label>
                <input 
                    type="text" 
                    name="lastname" 
                    id="lastname"
                    value={lastname} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Agregar
                </button>
            </form>
        );
    }
}

export default Form;