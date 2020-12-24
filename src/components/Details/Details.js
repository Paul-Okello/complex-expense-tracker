import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import useStyles from "./styles";

const Details = () => {
  const classes = useStyles();
  return (
    <Card className={classes.income}>
      <CardHeader title="Income" />
      <CardContent>
        <Typography variant="h5">Ksh 50</Typography>
        {/* <Doughnut data="DATA" /> */}
      </CardContent>
    </Card>
  );
};

export default Details;
