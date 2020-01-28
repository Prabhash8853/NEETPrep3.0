import React, { useState } from "react";
import "./ScheduleTest.css";
import Navbar from "../../Components/Navbar/Navbar";
import { Text, Box, Flex } from "@chakra-ui/core";
import Dropdown from "../../Components/Dropdown/Dropdown";
import DropdownItem from "../../Components/Dropdown/DropdownItem";
import {
  Subject,
  BioChapter,
  ChemistryChapter,
  TestDates
} from "../../api/Data";
import { withRouter } from "react-router-dom";

const ScheduleTest = props => {
  const [subject, setSubject] = useState("Bio");
  const [Chapter, setChapter] = useState("Darwin's Theory");
  const [TestDate, setTestDate] = useState("12 Jan 2020");
  const [ExpectedScore, setExpectedScore] = useState("");

  const handleChange = event => {
    setSubject(event.target.value);
  };

  const handleChangeChapter = event => {
    setChapter(event.target.value);
  };

  const handleChangeTestDates = event => {
    setTestDate(event.target.value);
  };

  const handleExpectedScore = event => {
    setExpectedScore(event.target.value);
  };

  const handleRoute = event => {
    window.alert(`
      Your Test as been Scheduled on: ${TestDate}
      Of ${Chapter} Chapter
      From ${subject}
    `);
    props.history.push("/");
  };
  return (
    <React.Fragment>
      <Navbar />
      <Box px={4}>
        <Text className="text-left font-style" fontSize="1.5em">
          Schedule Your Test To get Better Progress in NEET
        </Text>
      </Box>
      <Flex direction="column" align="center" justify="center" flex={5}>
        <Box mt={4} className="schedule_test_box">
          <Dropdown
            for="select"
            label="Test Dates"
            value={TestDate}
            onChange={handleChangeTestDates}
          >
            {TestDates.map((data, index) => {
              return (
                <DropdownItem
                  key={index}
                  value={data.Date}
                  content={data.Date}
                  Chapter=""
                />
              );
            })}
          </Dropdown>
        </Box>

        <Box m={4} className="schedule_test_box">
          <Dropdown
            for="select"
            label="subject"
            value={subject}
            onChange={handleChange}
          >
            {Subject.map((data, index) => {
              return (
                <DropdownItem
                  key={index}
                  value={data.name}
                  content={data.name}
                  Chapter=""
                />
              );
            })}
          </Dropdown>
        </Box>
        {/* set chapter for particular subject */}
        <Box className="schedule_test_box">
          <Dropdown
            for="select"
            label="Chapter"
            value={Chapter}
            onChange={handleChangeChapter}
          >
            {subject === "Bio" || subject === "bio" ? (
              <React.Fragment>
                {BioChapter.map((data, index) => {
                  return (
                    <DropdownItem
                      key={index}
                      value={data.name}
                      content={data.name}
                      chapter={"(" + data.chapter + ")"}
                    />
                  );
                })}
              </React.Fragment>
            ) : (
              <React.Fragment>
                {ChemistryChapter.map((data, index) => {
                  return (
                    <DropdownItem
                      key={index}
                      value={data.name}
                      content={data.name}
                      chapter={"(" + data.chapter + ")"}
                    />
                  );
                })}
              </React.Fragment>
            )}
          </Dropdown>
        </Box>

        <Box mt={4} className="schedule_test_box">
          <label htmlFor="score" className="label">
            Expected Score
          </label>

          <br />
          <input
            type="number"
            name="ExpectedScore"
            value={ExpectedScore}
            placeholder="Set A score you want to achieve"
            onChange={handleExpectedScore}
            className="expectedScore_input"
          />
        </Box>

        <Box mt={4} className="schedule_test_box">
          <button className="scheduleTest_button" onClick={handleRoute}>
            Schedule Your Test
          </button>
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default withRouter(ScheduleTest);
