import React from "react";
import { Dialog, DialogTitle } from "@mui/material";

type Props = {
  modalContent: string;
  setModalContent: Function;
};

const Modal: React.FC<Props> = (props) => {
  const { modalContent, setModalContent } = props;

  return (
    <Dialog
      open={!!modalContent}
      onClose={() => {
        setModalContent("");
      }}
    >
      <DialogTitle>{modalContent}</DialogTitle>
    </Dialog>
  );
};

export default Modal;
