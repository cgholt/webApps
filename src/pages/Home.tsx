import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearcExercies from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearcExercies />
      <Exercises />
    </Box>
  );
};

export default Home;
