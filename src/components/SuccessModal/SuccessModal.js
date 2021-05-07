import React from "react";

const SuccessModal = (props) => {
  const redirectToHome = () => {
    window.changePage("/");
  };
  return (
    <div>
      <div
        className="modal fade"
        id="modalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLongTitle">
                {props.title} <i className="fa fa-lg fa-check-circle"></i>
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{props.message}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={redirectToHome}
              >
                Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
