import React from "react";
import {render} from "react-dom";

export class Contact extends React.Component {
  render(){
    return(
        <div>
          <h1>Contact page</h1>
          <form action="/send" method="post">
            <input type="text" name="name" />
            <input type="submit" value="submit" />
          </form>
        </div>
    );
  }
}
