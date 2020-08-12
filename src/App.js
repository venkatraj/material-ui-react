import React from 'react';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Button variant="outlined">Default Outline</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button color="secondary">Text Button With Secondary Color</Button>
      <Button color="primary" disabled fullWidth>
        FullWidth Disabled Primary Button
      </Button>
    </div>
  );
}

export default App;
