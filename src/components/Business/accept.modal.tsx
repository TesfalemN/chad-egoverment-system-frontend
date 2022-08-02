import React, { FunctionComponent } from "react";
import { Button, Modal } from "react-bootstrap";

interface AcceptModalProps {
  toggle: any;
  isToggle: boolean;
  onAction: any;
}
const AcceptModal: React.FC<AcceptModalProps> = ({
  toggle,
  isToggle,
  onAction,
}) => {
  return (
    <Modal show={isToggle} onHide={toggle}>
      <Modal.Header closeButton>
        <Modal.Title>Your Business Licence</Modal.Title>
      </Modal.Header>
      <Modal.Body>Licence to be displayed here</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggle}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            onAction();
            toggle();
          }}
        >
          Print
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AcceptModal;
