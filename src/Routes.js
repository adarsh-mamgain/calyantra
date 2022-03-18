import React from "react";
import { useRoutes } from "react-router-dom";
import CalculatorHome from "./Calculator/Calculator";
import CompoundInterest from "./Calculator/CompoundInterest";
import GPA from "./Calculator/GPA";
import SimpleCalculator from "./Calculator/SimpleCalculator";
import SimpleInterest from "./Calculator/SimpleInterest";
import PageNotFound from "./Components/Static/404";
import { Privacy, Terms } from "./Components/Static/Legal";
import ConversionHome from "./Conversion/Conversion";
import Length from "./Conversion/Length";
import Litre from "./Conversion/Litre";
import Temperature from "./Conversion/Temperature";
import AppleEmoji from "./Emoji/AppleEmoji";
import EmojiHome from "./Emoji/Emoji";
import TextEmoji from "./Emoji/TextEmoji";
import HashHome from "./Hash/Hash";
import Hashing from "./Hash/SHA";
import Home from "./Home";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      children: [
        { path: "", element: <Home /> },
        {
          path: "calculator",
          children: [
            { path: "", element: <CalculatorHome /> },
            { path: "gpa", element: <GPA /> },
            { path: "simple-interest", element: <SimpleInterest /> },
            { path: "compound-interest", element: <CompoundInterest /> },
            { path: "simple-calculator", element: <SimpleCalculator /> },
          ],
        },
        {
          path: "conversion",
          children: [
            { path: "", element: <ConversionHome /> },
            { path: "length", element: <Length /> },
            { path: "litre", element: <Litre /> },
            { path: "temperature", element: <Temperature /> },
          ],
        },
        {
          path: "hash",
          children: [
            { path: "", element: <HashHome /> },
            { path: "md5", element: <Hashing /> },
            { path: "sha1", element: <Hashing /> },
            { path: "sha3", element: <Hashing /> },
            { path: "sha224", element: <Hashing /> },
            { path: "sha256", element: <Hashing /> },
            { path: "sha384", element: <Hashing /> },
            { path: "sha512", element: <Hashing /> },
          ],
        },
        {
          path: "emoji",
          children: [
            { path: "", element: <EmojiHome /> },
            { path: "apple", element: <AppleEmoji /> },
            { path: "text", element: <TextEmoji /> },
          ],
        },
      ],
    },
    { path: "privacy", element: <Privacy /> },
    { path: "terms-and-conditions", element: <Terms /> },
    { path: "*", element: <PageNotFound /> },
  ]);
}
