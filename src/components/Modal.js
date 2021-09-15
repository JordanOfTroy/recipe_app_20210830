import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  const { title, content, actions, onDismiss } = props;

  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div
        className="ui standard modal visible active"
        onClick={(e) => e.stopPropagation()}
      >
        <i className="close icon" onClick={onDismiss}></i>
        <div className="header">{title ? title : null}</div>
        <div className="content">{content}</div>
        <div className="actions">{actions ? actions : null}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
