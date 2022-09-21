import React from "react";
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
      <input type="text" placeholder="search name or email" />
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <article>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
