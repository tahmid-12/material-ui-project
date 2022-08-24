import { Button,Typography  } from "@mui/material";
import { AddIcon, SettingsIcon } from '@mui/icons-material';

function App() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button startIcon={<SettingsIcon />} variant="contained" color="secondary" size="large">Contained</Button>
      <Button startIcon={<AddIcon />} variant="contained" color="success" size="large">Success</Button>
      <Button variant="outlined" disabled>Outlined</Button>
      <Typography variant="h1" component="p">
            This is H2 heading
      </Typography>
    </div>
  );
}

export default App;
