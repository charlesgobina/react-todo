import React from 'react';

class InputTodo extends React.Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title)
      this.setState({
        title: "",
      })
    } else {
      alert("Please write item")
    }
  };

  render() {
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <input 
          type="text"
          className="input-text"
          name="title"
          onChange={this.onChange} 
          value={this.state.title} 
          placeholder="Add Todo..." 
        />
        <button className="input-submit">Submit</button>
      </form>
    )
  }
}
export default InputTodo