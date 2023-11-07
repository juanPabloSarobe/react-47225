import { Button, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

const PayButton = ({ comprado }) => {
  return (
    <Box width={9 / 10} sx={{ display: "flex", justifyContent: "center" }}>
      <Button
        sx={{ width: "100%" }}
        variant="contained"
        type={"submit"}
        color="success"
        disabled={comprado}
        endIcon={
          comprado && (
            <CircularProgress
              sx={{
                color: " white",
              }}
            />
          )
        }
      >
        Pagar
      </Button>
    </Box>
  );
};

export default PayButton;

{
  /* <CircularProgress
  size={68}
  sx={{
    color: green[500],
    position: "absolute",
    top: -6,
    left: -6,
    zIndex: 1,
  }}
/>; */
}
