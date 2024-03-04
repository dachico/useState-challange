import { useState } from "react";
import TopBar from "./TopBar";
import NameInput from "./NameInput";
import Books from "./Books";
// import Customer from "./Customer";
// import Employee from "./Employee";
import Customer from "./Customer";
import Employee from "./Employee";

export default function App() {
  return (
    <div className="app">
      <TopBar>React Components are state machines</TopBar>
      <h1 className="headline white-text">_ ^ _ Stateful Bookstore _ ^ _</h1>
      <Books />
      <Customer />
      <Employee />
      <br />
      <hr />
      <NameInput />
    </div>
  );
}
