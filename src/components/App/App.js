import React from "react";
import EmailList from "../EmailList";
import SearchBar from "../SearchBar";
// import API from "../../services/api";

export default function App() {
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
  const items = [
    {
      id: 0,
      title: "Fake name 1",
      description: "fake.email.1@email.com"
    },
    {
      id: 1,
      title: "Fake name 2",
      description: "fake.email.2@email.com"
    }
  ];

  return (
    <main>
      <SearchBar />
      <EmailList emails={items} />
    </main>
  );
}
