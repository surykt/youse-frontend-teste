import React, { Component } from "react";
import EmailList from "../EmailList";
import SearchBar from "../SearchBar";
import API from "../../services/api";

export default class App extends Component {
  /**
   * These items should be fetched from our API service.
   *
   * API.fetch(params?: {
   *   filter?: string - filter by title or description
   *   skip?: number   - skip x number of items
   *   limit?: number  - limit result to x items
   * }) : Promise<
   *   success: item[]
   *   error: string
   * >
   *
   **/
  constructor(props) {
    super(props);

    this.state = {
      emails: []
      
    }
  }

  componentDidMount() {
    API.fetch({})
      .then((emails) => {
        this.setState({
          emails: emails
        })
      })
  }


  render ( ) {
    const { emails } = this.state

    return (
      <main>
        <SearchBar />
        <EmailList emails={emails} />
      </main>
    );
  }
}
