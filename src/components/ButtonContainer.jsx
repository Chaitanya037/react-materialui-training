import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const ButtonContainer = () => {
  return (
    <>
      <Button variant="contained" size={"medium"} startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="outlined" size={"medium"} endIcon={<SendIcon />}>
        Send
      </Button>
    </>
  );
};

export default ButtonContainer;
