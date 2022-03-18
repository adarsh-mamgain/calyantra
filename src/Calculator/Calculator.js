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

export default function CalculatorHome() {
  let path = useLocation().pathname;

  let cardList = [
    {
      title: "GPA",
      url: path + "/gpa",
      description:
        "GPA (Grading Point Average) in education is the attempt to apply standardized measurements of varying levels of achievement in a course. Grades can be assigned as letters (usually A through F), as a range (example, 1 to 6), as a percentage or as a number out of a possible total (often out of 100).",
    },
    {
      title: "Simple Interest",
      url: path + "/simple-interest",
      description:
        "Simple interest is calculated only on the principal amount, or on that portion of the principal amount that remains. Simple interest can be applied over a time period other than a year, for example every month.",
    },
    {
      title: "Compound Interest",
      url: path + "/compound-interest",
      description:
        "Compound interest is the addition of interest on interest. It is the result of reinvesting interest, rather than paying it out, so that interest in the next period is then earned on the principal sum plus previously accumulated interest.",
    },
    {
      title: "Simple Calculator",
      url: path + "/simple-calculator",
      description:
        "The basic calculator mode includes buttons for adding, subtracting, multiplying, and dividing. Scientific mode supports exponents and trigonometric functions and programmer mode gives the user more options related to computer programming.",
    },
  ];

  return (
    <Box bgcolor={"background.default"}>
      <Box sx={{ px: { xs: 2, sm: 10, md: 20 }, py: 2 }}>
        <GetHelmet
          title="Online calculators | Calyantra.com"
          description="Calculate your GPA, Simple Interest and Compound Interest."
          url={useLocation().pathname}
        />
        <Typography align="center" color={"text.primary"} variant="h1">
          Financial and Mathematical calculators
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
