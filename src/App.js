import React from 'react';
import { Button, ThemeProvider } from '@material-ui/core';

import theme from './theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
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
