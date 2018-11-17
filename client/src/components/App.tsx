import axios from "axios";
import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Menu from "./Menu";
import Recipes from "./Recipes";
import Settings from "./Settings";

interface State {
  users: User[];
  recipes: Recipe[];
}

class App extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      recipes: [],
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

          <Route
            path="/recipes"
            render={() => <Recipes recipes={this.state.recipes} />}
          />

          <Route path="/settings" render={() => <Settings />} />
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
