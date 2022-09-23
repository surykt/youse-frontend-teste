import React from "react";

export default function EmailList({ emails }) {

  return (<ul>
    {emails.map(email => (
      <li className="border border-gray border-solid" key={email.id}>
        <article>
          <h1 className="font-bold ml-10">{email.title}</h1>
          <p className="ml-10">{email.description}</p>
        </article>
      </li>
    ))}
  </ul>)
}
