import React from "react";
import { useRoutes } from "react-router-dom";
import CalculatorHome from "./Calculator/Calculator";
import GPA from "./Calculator/GPA";
import SimpleCalculator from "./Calculator/SimpleCalculator";
import PageNotFound from "./Components/Static/404";
import { Privacy, Terms } from "./Components/Static/Legal";
import ConversionHome from "./Conversion/Conversion";
import Length from "./Conversion/Length";
import Litre from "./Conversion/Litre";
import AppleEmoji from "./Emoji/AppleEmoji";
import EmojiHome from "./Emoji/Emoji";
import TextEmoji from "./Emoji/TextEmoji";
import HashHome from "./Hash/Hash";
import { FileSHA, TextSHA } from "./Hash/SHA";
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
            { path: "simple-interest", element: <CalculatorHome /> },
            { path: "simple-calculator", element: <SimpleCalculator /> },
          ],
        },
        {
          path: "conversion",
          children: [
            { path: "", element: <ConversionHome /> },
            { path: "millimeter-to-centimeter", element: <Length /> },
            { path: "centimeter-to-meter", element: <Length /> },
            { path: "meter-to-kilometer", element: <Length /> },
            { path: "miles-to-kilometer", element: <Length /> },
            { path: "millilitre-to-litre", element: <Litre /> },
          ],
        },
        {
          path: "hash",
          children: [
            { path: "", element: <HashHome /> },
            { path: "text-md5", element: <TextSHA /> },
            { path: "text-sha1", element: <TextSHA /> },
            { path: "text-sha224", element: <TextSHA /> },
            { path: "text-sha256", element: <TextSHA /> },
            { path: "text-sha384", element: <TextSHA /> },
            { path: "text-sha512", element: <TextSHA /> },
            { path: "file-md5", element: <FileSHA /> },
            { path: "file-sha1", element: <FileSHA /> },
            { path: "file-sha224", element: <FileSHA /> },
            { path: "file-sha256", element: <FileSHA /> },
            { path: "file-sha384", element: <FileSHA /> },
            { path: "file-sha512", element: <FileSHA /> },
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
