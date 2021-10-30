import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from "./Layout/index.jsx";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, green } from '@mui/material/colors'
import About from './Pages/About/About'
import Projects from './Pages/Projects/Projects'
import Skills from './Pages/Skills/Skills'
import Home from './Pages/Home/Home'
import './App.scss'
import ReactSnapScroll from 'react-snap-scroll';
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

      {/* <ReactSnapScroll transition="move-top-bottom"> */}
      <Router>
        <Layout>

          {/* <Switch>
            <Route exact path="/about" component={About}>
              <About />
            </Route>
            <Route exact path="/projects" component={Projects}>
              <Projects />
            </Route>
            <Route exact path="/skills" component={Skills}>
              <Skills />
            </Route>
          </Switch> */}
          <div className="sections">
            <Home />
            <About />
            <Projects />
            <Skills />
          </div>
        </Layout>
      </Router>
      {/* </ReactSnapScroll> */}


    </ThemeProvider>
  );
}

export default App;
