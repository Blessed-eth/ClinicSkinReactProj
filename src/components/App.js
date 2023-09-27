import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage/Homepage'; // Updated import path
import Checkout from './Checkout/Checkout'; // Updated import path
import Navbar from './Common/Navbar'; // Updated import path
import SideMenu from './Common/SideMenu'; // Updated import path
import Corporales from './Corporales/Corporales'; // Updated import path
import Depilacion from './Depilacion/Depilacion'; // Updated import path
import Eyebrows from './Eyebrows/Eyebrows'; // Updated import path
import ManosYPies from './ManosYPies/ManosYPies'; // Updated import path

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/corporales" component={Corporales} />
          <Route path="/depilacion" component={Depilacion} />
          <Route path="/eyebrows" component={Eyebrows} />
          <Route path="/manosypies" component={ManosYPies} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
