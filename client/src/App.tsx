import axios from "axios";
import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Menu from "./Menu";

interface User {
  name: string;
}

interface State {
  users: User[];
}

class App extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      users: []
    };
  }
  public render() {
    return (
      <Router>
        <div className="ui container">
          <Menu />
          <Route
            exact
            path="/"
            render={() => <Home users={this.state.users} />}
          />
        </div>
      </Router>
    );
  }
  public async componentWillMount() {
    const res = await axios.get("/api/users");
    const data = res.data;
    const users = data.users;
    this.setState({ users });
  }
}

export default App;
