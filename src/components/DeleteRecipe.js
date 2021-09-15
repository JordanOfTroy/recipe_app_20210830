import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const DeleteRecipe = (props) => {
  const renderActions = () => {
    const { id } = props.match.params;
    console.log("WhatTheFuck:", id);
    return (
      <>
        <button
          className="ui button negative"
          // onClick={() => this.props.deleteStream(this.props.match.params.id)}
          onClick={console.log("you deleted a recipe!")}
        >
          Delete
        </button>
        <Link to={`/home/${id}`} className="ui button">
          Cancel
        </Link>
      </>
    );
  };

  const renderContent = () => {
    return "are you sure you want to delete this recipe?";
  };

  return (
    <div>
      <Modal
        title="Delete Recipe"
        content={renderContent()}
        actions={renderActions()}
        onDismiss={() => console.log("you clicked dismiss")}
      />
    </div>
  );
};

export default DeleteRecipe;
