import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Text, Box, Flex } from "@chakra-ui/core";
import {
  Subject,
  BioChapter,
  ChemistryChapter,
  HoursPlannedData
} from "../../api/Data";
import Dropdown from "../../Components/Dropdown/Dropdown";
import DropdownItem from "../../Components/Dropdown/DropdownItem";

const CreateGoal = props => {
  const [DayGoal, setDayGoal] = useState("");
  const [TaskTitle, setTaskTitle] = useState("");
  const [subject, setSubject] = useState("Bio");
  const [Chapter, setChapter] = useState("Darwin's Theory");
  const [HoursPlanned, setHoursPlanned] = useState("1 Hours");

  useEffect(() => {
    let { id } = props.match.params;
    setDayGoal(id);
  }, [DayGoal]);

  const handleSubjectChange = event => {
    setSubject(event.target.value);
  };

  const handleChangeChapter = event => {
    setChapter(event.target.value);
  };

  const handleHoursPlanned = event => {
    setHoursPlanned(event.target.value);
  };

  const handleTaskTitle = event => {
    setTaskTitle(event.target.value);
  };

  const handleRoute = event => {
    window.alert(`
        Task Title: ${TaskTitle}
        Subject: ${subject}
        Chapter: ${Chapter}
        Hours Planned: ${HoursPlanned}

        Congrats Your Task Has Been Created
    `);
    props.history.push("/daily-assessment");
  };

  return (
    <React.Fragment>
      <Navbar />
      <Box px={4}>
        <Text className="font-style" fontSize="1.5em">
          Create Task For Day {DayGoal}
        </Text>
      </Box>

      <Flex direction="column" align="center" justify="center" flex={5}>
        <Box mt={4} className="schedule_test_box">
          <label htmlFor="score" className="label">
            Task Title
          </label>

          <br />
          <input
            type="text"
            value={TaskTitle}
            placeholder="Give Your Task A Cool Title"
            onChange={handleTaskTitle}
            className="expectedScore_input"
          />
        </Box>

        <Box mt={4} className="schedule_test_box">
          <Dropdown
            for="select"
            label="Test Dates"
            value={subject}
            onChange={handleSubjectChange}
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
        <Box m={4} className="schedule_test_box">
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

        <Box m={3} className="schedule_test_box">
          <Dropdown
            for="select"
            label="Hours Planned"
            value={HoursPlanned}
            onChange={handleHoursPlanned}
          >
            {HoursPlannedData.map((data, index) => {
              return (
                <DropdownItem
                  key={index}
                  value={data.hours}
                  content={data.hours}
                  Chapter=""
                />
              );
            })}
          </Dropdown>
        </Box>

        <Box mt={4} className="schedule_test_box">
          <button className="scheduleTest_button" onClick={handleRoute}>
            Create Task
          </button>
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default CreateGoal;
