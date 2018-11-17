import React from "react";

export default function Home(props: any) {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {props.users.map((user: any) => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
      <a href="/api/users">/api</a>
    </div>
  );
}
