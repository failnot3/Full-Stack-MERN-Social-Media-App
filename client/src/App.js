import React from "react";

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

//import our components
import Form from "./components/FORM/Form.js";
import Posts from "./components/Posts/Posts.js";
import useStyles from "./styles.js";

const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>
          Memories
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid justifyContent='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
