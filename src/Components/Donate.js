import React from "react";
import { Box, Collapse, Alert, IconButton, Button } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import CloseIcon from "@mui/icons-material/Close";
import donate from "../../public/QrCode.png";
export default function Feedback() {
  const [open, setOpen] = React.useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    open === false ? setOpen(true): setOpen(false);
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
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Donated thank you
        </Alert>
        <img src={donate} />
      </Collapse>
    </Box>
  );
}
