import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Text, Box, Flex } from "@chakra-ui/core";
import { Subject } from "../../api/Data";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

const AssessmentResult = props => {
  const [Day, setDay] = useState("");
  const chartData = [
    { chapter: 1, score: 100 },
    { chapter: 2, score: 40 },
    { chapter: 3, score: 20 },
    { chapter: 4, score: 100 }
  ];

  useEffect(() => {
    let { id } = props.match.params;
    setDay(id);
  }, [Day]);

  return (
    <React.Fragment>
      <Navbar />
      <Box m={3}>
        <Text className="font-style">Assessment Result {Day}</Text>
        <Text className="font-style">
          {props.location.state === undefined ? (
            <p>Your assessment for Day {Day}</p>
          ) : (
            <p>
              You Gave {props.location.state.correctAnswerCount} Correct answers
            </p>
          )}

          {props.location.state === undefined ? (
            <p>Your assessment for Day {Day}</p>
          ) : (
            <p>
              You Gave {props.location.state.wrongAnswerCount} Wrong answers
            </p>
          )}
        </Text>
      </Box>

      <Flex direction="column" justify="center" align="center">
        <Box m={3}>
          {Subject.map((data, index) => {
            return (
              <Box key={index}>
                <Text className="font-style" fontSize="1.2em">
                  <b>{data.name}</b>
                </Text>

                <VictoryChart
                  // adding the material theme provided with Victory
                  theme={VictoryTheme.material}
                  domainPadding={20}
                >
                  <VictoryAxis
                    tickValues={[1, 2, 3, 4]}
                    tickFormat={[
                      "Chapter 1",
                      "Chapter 2",
                      "Chapter 3",
                      "Chapter 4"
                    ]}
                  />
                  <VictoryAxis dependentAxis tickFormat={x => `${x}`} />
                  <VictoryBar data={chartData} x="chapter" y="score" />
                </VictoryChart>
              </Box>
            );
          })}
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default AssessmentResult;
