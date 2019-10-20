import React, {Component} from 'react';
import Component1 from '../functional/component1';

class Container1 extends Component {

  state = {
    value: '',
  };

  handleChange = (event) => (
      this.setState({value: event.target.value})
  );

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.value);
  };

  render() {
    return (
        <div>
          {this.state.value}
          <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input id="name" onChange={this.handleChange} type="text"/>
            <button type="submit">Submit</button>
          </form>
        </div>
    );
  }
}

export default Container1;
