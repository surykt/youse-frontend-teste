import React from "react";

export default function EmailList({ emails }) {

  return (<ul>
    {emails.map(email => (
      <li key={email.id}>
        <article>
          <h1>{email.title}</h1>
          <p>{email.description}</p>
        </article>
      </li>
    ))}
  </ul>)
}
