import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: "20px",
    borderRadius: "10px",
    background: "url(https://i.ibb.co/7tx4DWf/back.jpg)"
  }
});

export default function LogoDisplay() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
    
<Typography variant="h3" component="h3">
PotHole
</Typography>

    </Card>
  );
}
