import * as React from "react";
import { styled } from "@mui/styles";
import { Card, CardContent, Typography } from "@mui/material";

const Cards = (props) => {
  const CardStyled = styled(({ color, ...other }) => <Card {...other} />)({
    background: (props) =>
      props.color === "red"
        ? "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
        : "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: (props) =>
      props.color === "red"
        ? "0 3px 5px 2px rgba(255, 105, 135, .3)"
        : "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    padding: "0 30px",
    margin: 8,
  });

  return (
    <CardStyled color={props.type}>
      <CardContent>
        <Typography variant="h5">{props.title}</Typography>
        <Typography variant="p">
          {props.total} {props.unit}
        </Typography>
      </CardContent>
    </CardStyled>
  );
};

export default Cards;
