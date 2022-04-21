import React from "react";
import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function GetTimeline(props) {
  const steps = props.getSteps;

  return (
    <Box paddingY={3} marginY={3}>
      <Typography
        variant="h2"
        align={"center"}
        gutterBottom
        color={"text.primary"}
      >
        How to use
      </Typography>
      <Timeline position="alternate" sx={{ display: { sm: "none" } }}>
        {steps.map((label, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ m: "auto 0" }} color={"text.primary"}>
              {label}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      <Stepper
        activeStep={-1}
        alternativeLabel
        sx={{ display: { xs: "none", sm: "flex" } }}
      >
        {steps.map((label) => (
          <Step>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
