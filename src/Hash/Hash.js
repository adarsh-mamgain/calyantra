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

export default function HashHome() {
  let path = useLocation().pathname;

  let cardList = [
    {
      title: "MD5",
      url: path + "/md5",
      description:
        "The MD5 message-digest algorithm is a cryptographically broken but still widely used hash function producing a 128-bit hash value.",
    },
    {
      title: "SHA-1",
      url: path + "/sha1",
      description:
        "The SHA-1 message-digest algorithm is a cryptographically broken but still widely used hash function producing a 160-bit hash value.",
    },
    {
      title: "SHA-3",
      url: path + "/sha3",
      description:
        "SHA-3 is the latest member of the Secure Hash Algorithm 3 family of standards. SHA-3 is a subset of the broader cryptographic primitive family Keccak.",
    },
    {
      title: "SHA-224",
      url: path + "/sha224",
      description:
        "The SHA-224 message-digest algorithm is a cryptographically broken but still widely used hash function producing a 224-bit hash value.",
    },
    {
      title: "SHA-256",
      url: path + "/sha256",
      description:
        "The SHA-256 belongs to SHA-2 (Secure Hash Algorithm 2) family. SHA-256 is a patented cryptographic hash function that produces a 256-bit hash value.",
    },
    {
      title: "SHA-384",
      url: path + "/sha384",
      description:
        "The SHA-384 belongs to SHA-2 (Secure Hash Algorithm 2) family. SHA-384 is a truncated version of SHA-512 that produces a 384-bit hash value.",
    },
    {
      title: "SHA-512",
      url: path + "/sha512",
      description:
        "The SHA-512 belongs to SHA-2 (Secure Hash Algorithm 2) family. SHA-512 is a patented cryptographic hash function that produces a 512-bit hash value.",
    },
  ];

  return (
    <Box bgcolor={"background.default"}>
      <Box sx={{ px: { xs: 2, sm: 10, md: 20 }, py: 2 }}>
        <GetHelmet
          title="Online Hashing | Calyantra.com"
          description="Hash 🔐 your text or files 🗂 to MD5, SHA1, SHA3, SHA224, SHA256, SHA384 and SHA512."
          url={useLocation().pathname}
        />
        <Typography align="center" color={"text.primary"} variant="h1">
          Hash text or files
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
