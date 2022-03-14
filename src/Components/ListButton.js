import React from "react";
import {
  Link,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

export default function ListButton(props) {
  return (
    <ListItemButton
      sx={{
        maxWidth: "250px",
        height: "115px",
        m: 1,
        bgcolor: "background.paper",
      }}
      component={Link}
      href={props.href}
    >
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText
        primary={
          <Typography component={"span"} color={"text.primary"} variant="body1">
            {props.primary}
          </Typography>
        }
        secondary={props.secondary}
      />
    </ListItemButton>
  );
}
