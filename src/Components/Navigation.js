import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Badge,
  Menu,
  MenuItem,
  Link,
  Button,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Navigation(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <AppBar sx={{ px: { xs: 2, sm: 10, md: 20 } }} position="static">
        <Toolbar sx={{ flexWrap: "wrap", padding: { xs: 0 } }}>
          <Link href="/" underline="none" sx={{ flexGrow: 1 }}>
            <Typography color={"text.primary"} sx={{ fontSize: 20 }}>
              Calyantra
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <Button
              sx={{ color: "text.primary" }}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Calculators
              <FontAwesomeIcon icon={solid("angle-down")} />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                component={Link}
                onClick={handleClose}
                href="/calculator/gpa"
              >
                GPA
              </MenuItem>
              <MenuItem
                component={Link}
                onClick={handleClose}
                href="/calculator/simple-calculator"
              >
                Normal Calculator
              </MenuItem>
              <MenuItem
                component={Link}
                onClick={handleClose}
                href="/calculator/simple-interest"
              >
                Simple Interest
              </MenuItem>
              <MenuItem
                component={Link}
                onClick={handleClose}
                href="/calculator/compound-interest"
              >
                Compound Interest
              </MenuItem>
            </Menu>
            {/* <Button
              sx={{color: "text.primary"}}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Conversion
              <KeyboardArrowDownIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Length</MenuItem>
              <MenuItem onClick={handleClose}>Litre</MenuItem>
            </Menu> */}
          </Box>
          <Box>
            <IconButton
              sx={{ ml: 1, color: "text.primary" }}
              onClick={props.getColorMode.toggleColorMode}
              aria-label="Toggle color theme"
            >
              {props.getTheme.palette.mode === "dark"
                ? (localStorage.setItem("mode", "dark"),
                  (<FontAwesomeIcon icon={solid("sun")} />))
                : (localStorage.setItem("mode", "light"),
                  (<FontAwesomeIcon icon={solid("moon")} />))}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
