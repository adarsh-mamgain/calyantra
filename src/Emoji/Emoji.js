import React from "react";
import { useLocation } from "react-router-dom";
import {
  Alert,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import GetHelmet from "../Components/GetHelmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function EmojiHome() {
  let path = useLocation().pathname;

  let cardList = [
    {
      title: "Apple emoji",
      url: path + "/apple",
      description:
        "An emoji is a pictogram, logogram, ideogram or smiley embedded in text and used in electronic messages and web pages. The primary function of emoji is to fill in emotional cues otherwise missing from typed conversation.",
    },
    {
      title: "Emoticon",
      url: path + "/text",
      description:
        'An emoticon, short for "emotion icon", is a pictorial representation of a facial expression using characters—usually punctuation marks, numbers, and letters—to express a person\'s feelings, mood or reaction, or as a time-saving method.',
    },
  ];

  return (
    <Box bgcolor={"background.default"}>
      <Box sx={{ px: { xs: 2, sm: 10, md: 20 }, py: 2 }}>
        <GetHelmet
          title="Online Emoji 😁😂🥺 | Calyantra.com"
          description="Get all Apple and text based emoticons at one place."
          url={useLocation().pathname}
        />
        <Typography align="center" color={"text.primary"} variant="h1">
          Emoji and Emoticons
        </Typography>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={2}
        >
          {cardList.map((card) => (
            <Card
              sx={{ maxWidth: "250px", margin: 2 }}
              elevation={2}
              key={card.title}
            >
              <CardActionArea href={card.url}>
                <CardContent>
                  <Typography gutterBottom variant="h2">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton color="primary">
                    <FontAwesomeIcon icon={solid("arrow-right")} />
                  </IconButton>
                </CardActions>
              </CardActionArea>
            </Card>
          ))}
        </Grid>
        <Alert
          severity="info"
          sx={{ width: "fit-content", margin: "16px auto" }}
        >
          <strong>Discolsure:</strong> This website uses material from{" "}
          <Link href="https://www.wikipedia.org/">Wikipedia</Link>, which is
          released under the{" "}
          <Link href="https://creativecommons.org/licenses/by-sa/3.0/">
            Creative Commons Attribution-Share-Alike License 3.0
          </Link>
          .
        </Alert>
      </Box>
    </Box>
  );
}
