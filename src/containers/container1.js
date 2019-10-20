import React, {Component} from 'react';
import Component1 from '../functional/component1';

class Container1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stateprop1: 'Our Initial State',
      stateprop2: 5,
    };
  }

  // Correct
  changeState = () => (
      this.setState({
        stateprop2: this.state.stateprop2 + 1,
        stateprop1: this.state.stateprop1 + 'L',
      })
  );

  // Correct
  changeState2 = () => (
      this.setState({
        stateprop1: this.state.stateprop1 + 'L',
      })
  );

  render() {
    return (
        <div>
          <button onClick={() => this.changeState()}>Change State</button>
          <button onClick={() => this.changeState2()}>Change State 2</button>
          <br/>
          <Component1 prop1={this.state.stateprop1}/>
        </div>
    );
  }
}

export default Container1;
