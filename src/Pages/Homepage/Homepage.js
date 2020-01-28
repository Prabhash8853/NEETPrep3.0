import React from "react";
import "./Homepage.css";
import { Box } from "@chakra-ui/core";
import { Text, Stack, Grid } from "@chakra-ui/core";
import Card from "../../Components/Cards/Card";
import Navbar from "../../Components/Navbar/Navbar";

const Homepage = props => {
  return (
    <React.Fragment>
      <Navbar />
      <Box>
        <Stack spacing={3}>
          <Text fontSize="2em" className="text-center font-style">
            Welcome to NEETPrep
          </Text>
          <Text fontSize="1.2em" className="text-center font-style">
            Take the small Assessment to check your ability
          </Text>
        </Stack>

        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={4}
          className="display_homeFeatures"
        >
          <Box className="flex-3">
            <Card
              style={{
                backgroundImage:
                  "linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)"
              }}
              CardTitle="Take a small Assessment"
              CardContent="Test 0"
              link="/Quiz"
            />
          </Box>
          <Box className="flex-3">
            <Card
              style={{
                backgroundImage:
                  "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)"
              }}
              CardTitle="Schedule a Test for Later"
              CardContent="Make Your Goal"
              link="/schedule-test"
            />
          </Box>

          <Card
            style={{
              backgroundImage:
                "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)"
            }}
            CardTitle="Daily Assessment"
            link="/daily-assessment"
            CardContent="Check Your Progress"
          />
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Homepage;
