import Layout from "./pages/Layout/index.jsx";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, green } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },

  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>

      <Layout></Layout>

    </ThemeProvider>
  );
}

export default App;
