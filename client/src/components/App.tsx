import React, { Component, Dispatch } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { fetchRecipeRequest } from "../actions";
import { Recipe, User } from "../types";
import "./App.css";
import Home from "./Home";
import Menu from "./Menu";
import RecipeNew from "./RecipeNew";
import Recipes from "./Recipes";
import Settings from "./Settings";

interface IMapStateToProps {
  recipes: Recipe[];
}

interface IMapDispatchToProps {
  fetchRecipes: () => void;
}

type Props = IMapStateToProps & IMapDispatchToProps;

class App extends Component<Props, {}> {
  public render() {
    return (
      <Router>
        <div className="ui container">
          <Menu />
          {/* <Route
            exact
            path="/"
            render={() => <Home users={this.state.users} />}
          /> */}

          <Route
            exact
            path="/recipes"
            render={() => <Recipes recipes={this.props.recipes} />}
          />

          <Route path="/recipes/new" component={RecipeNew} />

          <Route path="/settings" render={() => <Settings />} />
        </div>
      </Router>
    );
  }
  public componentDidMount() {
    this.props.fetchRecipes();
  }
}

function mapStateToProps(state: any): IMapStateToProps {
  console.log("redux state: ", state);
  return {
    recipes: state.recipes.recipes || []
  };
}

const mapDispatchToProps = (dispatch: Dispatch<any>): IMapDispatchToProps => ({
  fetchRecipes: () => dispatch(fetchRecipeRequest())
});

export default connect<IMapStateToProps, IMapDispatchToProps>(
  mapStateToProps,
  mapDispatchToProps
)(App);
