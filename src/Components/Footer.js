import React from "react";
import { Box, Typography, Link, Grid, IconButton, Stack } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { grey } from "@mui/material/colors";

export default function Footer() {
  return (
    <Box bgcolor={"background.paper"}>
      <Box sx={{ px: { xs: 2, sm: 10, md: 20 }, py: 2 }}>
        <Grid
          container
          spacing={3}
          sx={{
            direction: { xs: "column", sm: "row" },
            textAlign: { xs: "center", sm: "initial" },
          }}
          justifyContent={"space-between"}
        >
          <Grid item xs={12} md={3}>
            <Typography color={"text.primary"} sx={{ fontSize: 20 }}>
              Calyantra
            </Typography>
            <Typography color={"text.secondary"} variant="body1">
              A free online tool.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography color={"text.primary"} variant="body1">
              Most used tools
            </Typography>
            <Link
              color={"text.secondary"}
              underline="hover"
              variant="body2"
              href="/calculator/gpa"
            >
              <Typography>GPA calculator</Typography>
            </Link>
            <Link
              color={"text.secondary"}
              underline="hover"
              variant="body2"
              href="/calculator/simple-interest"
            >
              <Typography>Simple Interest calculator</Typography>
            </Link>
            <Link
              color={"text.secondary"}
              underline="hover"
              variant="body2"
              href="/calculator/simple-calculator"
            >
              <Typography>Simple calculator</Typography>
            </Link>
            <Link
              color={"text.secondary"}
              underline="hover"
              variant="body2"
              href="/emoji/apple"
            >
              <Typography>Apple emoticons</Typography>
            </Link>
            <Link
              color={"text.secondary"}
              underline="hover"
              variant="body2"
              href="/emoji/text"
            >
              <Typography>Text emoticons</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography color={"text.primary"}>Company</Typography>
            <Link
              color={"text.secondary"}
              underline="hover"
              variant="body2"
              href="/#about"
            >
              <Typography>About</Typography>
            </Link>
            <Link
              color={"text.secondary"}
              underline="hover"
              variant="body2"
              href="/privacy"
            >
              <Typography>Privacy Policy</Typography>
            </Link>
            <Link
              color={"text.secondary"}
              underline="hover"
              variant="body2"
              href="/terms-and-conditions"
            >
              <Typography>Terms &#38; conditions</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography color={"text.primary"}>Creator</Typography>
            <Stack
              direction="row"
              justifyContent={{ xs: "center", sm: "flex-start" }}
              alignItems="center"
              spacing={1}
            >
              <Typography color={"text.secondary"}>Adarsh Mamgain</Typography>
              <FontAwesomeIcon icon={solid("code")} color={grey[500]} />
            </Stack>
            <Link href="https://twitter.com/Adarsh_Mamgain" target={"_blank"}>
              <IconButton aria-label="Twitter">
                <FontAwesomeIcon icon={brands("twitter")} />
              </IconButton>
            </Link>
            <Link
              href="https://www.linkedin.com/in/adarsh-mamgain/"
              target={"_blank"}
            >
              <IconButton aria-label="LinkedIn">
                <FontAwesomeIcon icon={brands("linkedin")} />
              </IconButton>
            </Link>
            <Link href="https://github.com/adarsh-mamgain" target={"_blank"}>
              <IconButton aria-label="GitHub">
                <FontAwesomeIcon icon={brands("github")} />
              </IconButton>
            </Link>
            <Stack
              direction="row"
              justifyContent={{ xs: "center", sm: "flex-start" }}
              alignItems="center"
              spacing={1}
            >
              <Typography color={"text.secondary"}>
                Tanmay Chakrabarty
              </Typography>
              <FontAwesomeIcon icon={solid("palette")} color={grey[500]} />
            </Stack>
            <Link href="https://twitter.com/tanmaychk" target={"_blank"}>
              <IconButton aria-label="Twitter">
                <FontAwesomeIcon icon={brands("twitter")} />
              </IconButton>
            </Link>
            <Link
              href="https://www.linkedin.com/in/tanmay-chakrabarty/"
              target={"_blank"}
            >
              <IconButton aria-label="LinkedIn">
                <FontAwesomeIcon icon={brands("linkedin")} />
              </IconButton>
            </Link>
            <Link href="https://github.com/tanmaychk" target={"_blank"}>
              <IconButton aria-label="GitHub">
                <FontAwesomeIcon icon={brands("github")} />
              </IconButton>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Typography color={"text.primary"} variant="body1">
              &#169; 2021 Calyantra - coded with ❤️
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
