import React from "react";


export default class SearchBar extends React.Component  {

  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e) {

    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    return (

      <input className="w-80 h-10 p-2 border border-black border-solid rounded ml-40 my-5" type="text" placeholder="Search name or email" onChange={this.handleFilterTextChange} />

    )
  }
}
