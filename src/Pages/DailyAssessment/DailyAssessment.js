import React from "react";
import "./DailyAssessment.css";
import Navbar from "../../Components/Navbar/Navbar";
import { Box, Text } from "@chakra-ui/core";
import { DaysNumber } from "../../api/Data";
import DaysList from "../../Components/DaysList/DaysList";
import { withRouter } from "react-router-dom";

const DailyAssessment = props => {
  //   const handleRoute = id => {
  //     let url = "/create-goals/" + id;
  //     props.history.push(url);
  //   };
  return (
    <React.Fragment>
      <Navbar />
      <Box className="page_head" px={4}>
        <Text className="font-style header" fontSize="1.5em">
          Daily Assessment
        </Text>
      </Box>
      <Box w="90%">
        {DaysNumber.map((data, index) => {
          return (
            <React.Fragment>
              <DaysList
                DayNumber={data.id}
                key={index}
                CreateTaskLink={"/create-goal/" + data.id}
                PlanOfActionColor={{
                  backgroundImage:
                    "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)"
                }}
                BooksCardColor={{
                  backgroundImage:
                    "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"
                }}
                assessmentCard={{
                  backgroundImage:
                    "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)"
                }}
                Day={data.id}
                NcertLink="/"
                assessmentLink={"/assessment-result/" + data.id}
              />
            </React.Fragment>
          );
        })}
      </Box>
    </React.Fragment>
  );
};

export default withRouter(DailyAssessment);
