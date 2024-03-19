import React from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import "./Modal.css";
import { useNavigate } from "react-router-dom";

const LogOutModal = ({ modalOpen, toggleModal }) => {
  const navigate = useNavigate();

  const handleCancel = () => {
    toggleModal(); 
  };

  const handleLogout = () => {
    navigate('/'); 
  };

  return (
    <Modal isOpen={modalOpen} toggle={toggleModal}>
      <ModalBody>
        <h5 className="text-center" style={{ fontWeight: 500 }}>
          Are you sure you want to log out?
        </h5>
        <div className="d-flex align-content-center justify-content-center">
          <Button
            color="danger"
            size="sm"
            className="action-button pl-5 pr-5 pt-2 pb-2"
            onClick={handleLogout}
          >
            Log out
          </Button>{" "}
          <Button
            size="sm"
            className="add-button action-button pl-5 pr-5 pt-2 pb-2"
            outline
            onClick={handleCancel}
          >
            Cancel
          </Button>{" "}
        </div>
      </ModalBody>
    </Modal>
  );
};

export default LogOutModal;
