import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle, { Main } from './globalStyles';
import Broker from './pages/Broker/Broker';
import Carrier from './pages/Carrier/Carrier';
import Help from './pages/Help/Help';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Main>
        <Switch>
          <Route path="/" exact component={Broker} />
          <Route path="/carrier" component={Carrier} />
          <Route path="/help" component={Help} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Main>
      <Footer />
    </Router>
  );
}

export default App;
