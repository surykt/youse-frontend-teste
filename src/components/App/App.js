import React, { Component } from "react";
import EmailList from "../EmailList";
import SearchBar from "../SearchBar";
import API from "../../services/api";
import Pagination from "../Pagination";

const LIMIT = 50


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
      emails: [],
      filterText: '',
      skip: 0
    }

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
    this.handlePreviousPage = this.handlePreviousPage.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleNextPage() {
    this.setState({
      skip: this.state.skip + LIMIT
    })
  }

  handlePreviousPage() {
    this.setState({
      skip: this.state.skip - LIMIT
    })
  }

  fetchData() {
    API.fetch({filter: this.state.filterText, limit: LIMIT, skip: this.state.skip})
    .then((emails) => {
      this.setState({
        emails: emails
      })
    })
  }

  componentDidMount() {
   this.fetchData()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.filterText !== prevState.filterText || this.state.skip !== prevState.skip) {
      this.fetchData();
    }
  }


  render ( ) {
    const { emails } = this.state

    return (
      <main>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <EmailList emails={emails} />
        <Pagination skip={this.state.skip} limit={LIMIT} handleNextPage={this.handleNextPage} handlePreviousPage={this.handlePreviousPage}/>
      </main>
    );
  }
}
