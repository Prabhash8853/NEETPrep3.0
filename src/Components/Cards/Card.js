import React from "react";
import "./Card.css";
import { Text, Stack, Box } from "@chakra-ui/core";
import { Link } from "react-router-dom";

const Card = props => {
  return (
    <Link to={props.link}>
      <Box
        className="cards"
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
        style={props.style}
      >
        <Stack spacing={3}>
          <Text fontSize="1.2em" className="text-left font-style">
            {props.CardTitle}
          </Text>
          <Text fontSize="1.2em" className="text-left font-style">
            <b>{props.CardContent}</b>
          </Text>
        </Stack>
      </Box>
    </Link>
  );
};

export default Card;
