import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import history from "../History";

const DeleteRecipe = (props) => {
  const renderActions = () => {
    const { id } = props.match.params;
    return (
      <>
        <button
          className="ui button negative"
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
      console.log(props)
    return "are you sure you want to delete this recipe?";
  };

  return (
    <div>
      <Modal
        title="Delete Recipe"
        content={renderContent()}
        actions={renderActions()}
        onDismiss={() => history.push(`/home/${props.match.params.id}`)}
      />
    </div>
  );
};

export default DeleteRecipe;
