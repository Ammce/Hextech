import React from "react";
import {render} from "react-dom";
import axios from "axios";

export class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      city: '',
      resMsg: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }


componentDidMount(){

}


handleSubmit(e){
  e.preventDefault();

  axios.post('/send', {
    name: this.refs.name.value
  })
  .then(function (response) {
    this.setState({
      resMsg: response.data.greetings
    });
  }.bind(this))
  .catch(function (error) {
    console.log(error);
  });
}

  render(){
    return(
        <div>
          <h1>Contact page</h1>
          <p>{this.state.resMsg}</p>
          <form onSubmit={this.handleSubmit} action="/send" method="post">
            <input type="text" name="name" ref="name" />
            <input type="submit" value="submit" />
          </form>
        </div>
    );
  }
}


// var url = "http://www.json-generator.com/api/json/get/ceWYimLbJu?indent=2";
// axios
// .get(url)
// .then(response => {
//   this.setState({
//     city: response.data.local
//     .name
//   })
// }).catch(error => {
//   console.log(error);
// })
