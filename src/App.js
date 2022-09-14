// import Practise from "./Practise";
import { ThemeProvider } from "@mui/material";
import { theme } from './theme';
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { Box, Stack } from "@mui/system";
import Add from "./components/Add";

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-around">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
