import React, { Component } from "react";
import axios from "axios";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
    tests:[],
    };
    this.loadTests = this.loadTests.bind(this);
  }

  componentWillMount() {
    this.loadTests();
  }

  async loadTests()
  {
    const promise = await axios.get("http://localhost:3000");
    const status = promise.status;
    if(status===200)
    {
      const data = promise.data.data;
      this.setState({tests:data});
    }
  }

  render() {
    return(
      <div>
        <h2>Tests</h2>
            {this.state.tests.map((value,index)=>{return <h4 key={index}>{value}</h4>})}
      </div>
    )
  }
}