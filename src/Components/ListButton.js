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
        height: props.height ? props.height : "115px",
        m: 1,
        bgcolor: "background.paper",
      }}
      component={Link}
      href={props.href}
    >
      {props.icon ? <ListItemIcon>{props.icon}</ListItemIcon> : null}
      <ListItemText
        primary={
          <Typography component={"h2"} color={"text.primary"}>
            {props.primary}
          </Typography>
        }
        secondary={props.secondary}
      />
    </ListItemButton>
  );
}
