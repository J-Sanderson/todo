import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: '',
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    } 

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: '',
        })
    }

    render() {
        return(
            <div>
                <form className="add-todo" onSubmit={this.handleSubmit}>
                    <label htmlFor="new">Add new todo:</label>
                    <input type="text" name="new" onChange={this.handleChange} value={this.state.content} />
                </form>
            </div>
        );
    }
}

export default AddTodo;