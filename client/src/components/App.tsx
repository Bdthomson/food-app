import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import * as Redux from "redux";
import { fetchUserRequest } from "../actions";
import "./App.css";
import Home from "./Home";
import Menu from "./Menu";
import RecipeNew from "./RecipeNew";
import Recipes from "./Recipes";
import Settings from "./Settings";

interface State {
  users: User[];
  recipes: Recipe[];
}

interface DispatchProps {
  fetchUser: () => void;
}

type Props = DispatchProps;

class App extends Component<Props, State> {
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
            exact
            path="/recipes"
            render={() => <Recipes recipes={this.state.recipes} />}
          />

          <Route path="/recipes/new" component={RecipeNew} />

          <Route path="/settings" render={() => <Settings />} />
        </div>
      </Router>
    );
  }
  public componentDidMount() {
    this.props.fetchUser();
  }
}

// const mapDispatchToProps = (dispatch: React.Dispatch<any>): DispatchProps => ({
//   fetchUser: () => dispatch(fetchUserRequest())
// });

function mapDispatchToProps(dispatch: React.Dispatch<any>): DispatchProps {
  return {
    fetchUser: () => dispatch(fetchUserRequest())
  };
}

export default connect<{}, DispatchProps>(
  null,
  mapDispatchToProps
)(App);
