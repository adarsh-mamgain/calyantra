import React from "react";
import { Box, Collapse, Alert, IconButton, Button } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import CloseIcon from "@mui/icons-material/Close";

export default function Feedback() {
  const [open, setOpen] = React.useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setOpen(true);
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
          {/* <img src="/public/QrCode.jpeg" width="100%" /> */}
        </Alert>
      </Collapse>
    </Box>
  );
}
