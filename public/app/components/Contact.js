import React from "react";
import {render} from "react-dom";

export class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleSubmit(e){
  e.preventDefault();
}

  render(){
    return(
        <div>
          <h1>Contact page</h1>
          <form onSubmit={this.handleSubmit} action="/send" method="post">
            <input type="text" name="name" />
            <input type="submit" value="submit" />
          </form>
        </div>
    );
  }
}
