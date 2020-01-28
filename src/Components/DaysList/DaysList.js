import React from "react";
import "./DaysList.css";
import { Box, Text, Grid } from "@chakra-ui/core";
import { Link } from "react-router-dom";

const DaysList = props => {
  return (
    <React.Fragment>
      <Box w="100%" p={2} px={3} className="days_list" onClick={props.onClick}>
        <Text className="font-style days_number">Day {props.DayNumber}</Text>
      </Box>
      <Grid
        templateColumns="repeat(3, 4fr)"
        gap={3}
        px={4}
        className="assessmentCard_view"
      >
        <Link to={props.CreateTaskLink}>
          <Box className="cards" style={props.PlanOfActionColor}>
            <Text className="font-style days_number">
              Create Your Plan Of Action For Day {props.Day}
            </Text>
          </Box>
        </Link>

        <Link to={props.NcertLink}>
          <Box className="cards" style={props.BooksCardColor}>
            <Text className="font-style days_number">NCERT Books</Text>
          </Box>
        </Link>

        <Link to={props.assessmentLink}>
          <Box className="cards" style={props.assessmentCard}>
            <Text className="font-style days_number">
              Check Your Assessment for Day {props.Day}
            </Text>
          </Box>
        </Link>
      </Grid>
    </React.Fragment>
  );
};

export default DaysList;
