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

export default function ConversionHome() {
  let path = useLocation().pathname;

  let cardList = [
    {
      title: "Length",
      url: path + "/length",
      description:
        "Length is a measure of distance. In the International System of Quantities, length is a quantity with dimension distance. In most systems of measurement a base unit for length is chosen, from which all other units are derived. In the International System of Units (SI) system the base unit for length is the metre.",
    },
    {
      title: "Litre",
      url: path + "/litre",
      description:
        "The litre (British English spelling) or liter (American English spelling) is a metric unit of volume. It is equal to 1 cubic decimetre (dm3), 1000 cubic centimetres (cm3) or 0.001 cubic metre (m3). A cubic decimetre (or litre) occupies a volume of 10 cm × 10 cm × 10 cm and is thus equal to one-thousandth of a cubic metre.",
    },
    {
      title: "Temperature",
      url: path + "/temperature",
      description:
        "Temperature is a physical quantity that expresses hot and cold. It is the manifestation of thermal energy, present in all matter, which is the source of the occurrence of heat, a flow of energy, when a body is in contact with another that is colder or hotter. Temperature should not be confused with heat.",
    },
  ];

  return (
    <Box bgcolor={"background.default"}>
      <Box sx={{ px: { xs: 2, sm: 10, md: 20 }, py: 2 }}>
        <GetHelmet
          title="Online convertors | Calyantra.com"
          description="Convert length 📏, liquids 🧪 and temperature 🌡 into different metric units."
          url={useLocation().pathname}
        />
        <Typography align="center" color={"text.primary"} variant="h1">
          Convertors
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
