import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from "./Layout/index.jsx";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, green } from '@mui/material/colors'
import About from './Pages/About/About'
import Projects from './Pages/Projects/Projects'
import Skills from './Pages/Skills/Skills'

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


      <Router>
        <Layout>
          <Switch>
            <Route exact path="/about" component={About}>
              <About />
            </Route>
            <Route exact path="/projects" component={Projects}>
              <Projects />
            </Route>
            <Route exact path="/skills" component={Skills}>
              <Skills />
            </Route>
          </Switch>
        </Layout>
      </Router>


    </ThemeProvider>
  );
}

export default App;
