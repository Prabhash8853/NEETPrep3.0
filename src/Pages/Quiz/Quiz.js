import React from "react";
import { Text, Box, Flex } from "@chakra-ui/core";
import Navbar from "../../Components/Navbar/Navbar";
import QuizData from "../../api/QuizData";
import "./Quiz.css";
import { withRouter, Link } from "react-router-dom";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizData: QuizData.map((data, index) => {
        return { ...data, answered: false };
      }),
      correctAnswerCount: 0,
      wrongAnswerCount: 0,
      class: ["answers_box"]
    };
  }

  handleAnswerSelect = (CorrectAnswer, clickedIndex) => {
    let answeredIndex = clickedIndex + 1;

    document.getElementById(clickedIndex).style.backgroundColor = "#189144";
    document.getElementById(clickedIndex).style.color = "white";

    const { quizData } = this.state;
    quizData[clickedIndex].answered = true;
    this.setState({
      quizData
    });

    if (CorrectAnswer === answeredIndex) {
      this.setState({
        correctAnswerCount: this.state.correctAnswerCount + 1
      });
    } else {
      this.setState({
        wrongAnswerCount: this.state.wrongAnswerCount + 1
      });
    }
  };

  // handleroute = () => {
  //   this.props.history.push({
  //     pathname: "/assessment-result",
  //     state: {
  //       correctAnswerCount: this.state.correctAnswerCount,
  //       wrongAnswerCountcolor: this.state.wrongAnswerCount
  //     }
  //   });
  // };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Box>
          <Text className="font-style" fontSize="1.2em" px={3}>
            Let's Start Your quiz
          </Text>
        </Box>

        <Box px={3} w="50%" m="auto" mt="3em">
          <Flex direction="column" align>
            {this.state.quizData.map((data, index) => {
              return (
                <Box m={3} px={3} className="cards no_hover" key={index}>
                  <Text className="font-style">
                    <b>{data.question}</b>
                  </Text>
                  <Box>
                    {data.answers.map((answer, AnswerIndex) => {
                      return (
                        <Box
                          my={3}
                          className="answers_box"
                          id={AnswerIndex}
                          p={3}
                          onClick={() =>
                            this.handleAnswerSelect(data.correct, index)
                          }
                          key={AnswerIndex}
                        >
                          {answer}
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              );
            })}
            <Box m="auto" p={3} w="100%">
              <Link
                to={{
                  pathname: `/assessment-result`,
                  query: {
                    correctAnswerCount: this.state.correctAnswerCount,
                    wrongAnswerCount: this.state.wrongAnswerCount
                  }
                }}
              >
                <button className="scheduleTest_button">
                  Submit Your Test
                </button>
              </Link>
            </Box>
          </Flex>
        </Box>
      </React.Fragment>
    );
  }
}

export default withRouter(Quiz);
