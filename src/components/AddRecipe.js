import React from "react";
import history from "../History";
import Modal from "./Modal";

class AddRecipe extends React.Component {
  componentDidMount = () => {
    const { id } = this.props.match.params;
  };

  renderActions = () => {
    return (
      <>
        <button className="ui button positive">Add Recipe</button>
        <button className="ui button">Cancel</button>
      </>
    );
  };

  renderContent = () => {
    return (
      <>
        <div className="ui form">
          <div className="required field">
            <label>Title</label>
            <input type="text" />
          </div>
          <div className="required field">
            <label>Description</label>
            <textarea rows="2"></textarea>
          </div>
          <div className="required field">
            <label>Ingredients</label>
            <input
              type="text"
              placeholder="Please separate ingredients by commas"
            />
          </div>
          <div className="required field">
            <label>Instructions</label>
            <textarea rows="7"></textarea>
          </div>
        </div>
      </>
    );
  };

  render() {
    return (
      <Modal
        title="Add a new recipe!"
        actions={this.renderActions()}
        content={this.renderContent()}
        onDismiss={() => history.push(`/home/${this.props.match.params.id}`)}
      />
    );
  }
}

export default AddRecipe;
