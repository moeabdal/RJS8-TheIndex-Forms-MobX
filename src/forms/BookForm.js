import React, { Component } from "react";
import { observer } from "mobx-react";

//Store
import bookStore from "../stores/bookStore";

class BookForm extends Component {
  state = {
    title: "",
    color: ""
  };

  textChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitBook = async event => {
    event.preventDefault();
    await bookStore.addBook(this.state, this.props.author);
  };

  render() {
    return (
      <form onSubmit={this.submitBook}>
        <input onChange={this.textChangeHandler} type="text" name="title" />
        <select name="color" onChange={this.textChangeHandler}>
          <option value="red">RED</option>
          <option value="white">WHITE</option>
          <option value="blue">BLUE</option>
          <option value="yellow">YELLOW</option>
          <option value="purple">PURPLE</option>
        </select>
        <input type="submit" />
      </form>
    );
  }
}

export default observer(BookForm);
