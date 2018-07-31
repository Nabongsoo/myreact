import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    //Khoi tao 1 trang thai thuoc tinh date
    this.state = {date:new Date()};
  }

  componentDidMount() {
      alert("Component already rendered");
  }
// khi cai ctrinhh dc khoi tao lan dau tien se call to componentDidMount

  componentDidUpdate(props, state) {
      console.log(props,state)
      if(state.date !== this.state.date) {
          alert("Current date:" + this.state.date.toLocaleTimeString());
      }
  }

  componentWillUnmount(){
      alert(134);
  }
  onClick() {
    //Thay doi trang thai cua thuoc tinh date
    this.setState({date: new Date()});
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <h2>It is {this.state.date.toLocalelementTimeString()}.</h2>
        <button onClick={this.onClick.bind(this)}>Update Time</button>
      </div>
    );
  }
}

export default Clock;
