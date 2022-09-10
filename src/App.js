// import Practise from "./Practise";
// import { ThemeProvider } from "@mui/material";
// import { theme } from './theme';
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";

function App() {
  
  return (
    <div>
      {/* <ThemeProvider theme={theme}>
        <Practise />
      </ThemeProvider> */}
      <Navbar />
      <Feed />
      <Rightbar />
    </div>
  );
}

export default App;
