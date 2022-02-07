import React from "react";
import { Box, Collapse, Alert, Button } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import donate from "../../public/QrCode.png";

export default function Feedback() {
  const [open, setOpen] = React.useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    open === false ? setOpen(true) : setOpen(false);
  };

  return (
    <Box>
      <Button
        endIcon={<PaymentIcon />}
        variant="contained"
        sx={{ width: "100%" }}
        onClick={handleClick}
      >
        Donate ❤️
      </Button>
      <Collapse in={open}>
        <Box sx={{ p: 1 }} bgcolor={"background.paper"}>
          <Alert severity="info">Scan and Pay using any UPI app</Alert>
          <img src={donate} width="100%" />
        </Box>
      </Collapse>
    </Box>
  );
}
