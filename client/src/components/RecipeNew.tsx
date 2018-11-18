import React, { Component } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

class RecipeNew extends React.Component<InjectedFormProps<{}, {}> & {}> {
  public render() {
    return (
      <div>
        <h1>New Recipe</h1>
        <form className="ui form">
          <div className="ui field">
            <label>Name</label>
            <Field
              name="recipeName"
              component="input"
              // type="text"
              // placeholder="Recipe Name"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm<{}, {}>({
  form: "recipeForm"
})(RecipeNew);
