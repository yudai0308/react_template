import React from 'react';

export default class Hello extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: 'world',
    }
  }

  setName (e) {
    const newName = e.target.value;
    this.setState({ name: newName })
    return;
  }

  render () {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.setName.bind(this)} />
        <h1>Hello, {this.state.name}!</h1>
      </div>
    );
  }
}
