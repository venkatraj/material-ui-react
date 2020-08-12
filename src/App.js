import React from 'react';
import { Button, ThemeProvider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import theme from './theme';

const useStyles = makeStyles({
  myRedItalic: {
    color: 'red',
    fontStyle: 'oblique',
  },
});

function App() {
  const styles = useStyles();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <h3 className={styles.myRedItalic}>Custom Styles</h3>
        <Typography variant="h1" color="secondary">
          Heading Level 1
        </Typography>
        <Typography variant="h1" component="h2">
          I need H2 with H1 styles
        </Typography>
        <Button variant="outlined">Default Outline</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button color="secondary">Text Button With Secondary Color</Button>
        <Button color="primary" disabled fullWidth>
          FullWidth Disabled Primary Button
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
