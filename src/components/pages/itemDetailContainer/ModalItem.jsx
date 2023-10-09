import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ItemDetailContainer from "./ItemDetailContainer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
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
