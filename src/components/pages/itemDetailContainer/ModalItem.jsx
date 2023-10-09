import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ItemDetailContainer from "./ItemDetailContainer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85vw",
};
const ModalItem = ({ open, handleClose, item }) => {
  return (
    <Modal open={open} onClose={handleClose()}>
      <Box sx={style}>
        <ItemDetailContainer item={item.id} />
      </Box>
    </Modal>
  );
};

export default ModalItem;
