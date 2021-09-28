import Navbar from './components/Navbar';
import Home from "./Pages/Home";
import Profile from './Pages/Profile';
import Kidziecatalogue from "./Pages/Kidziecatalogue";
import InventoryManagement from "./Pages/InventoryManagement";
import Orders from "./Pages/Orders";
import Reports from './Pages/Reports';
import Promocodes from "./Pages/Promocodes";
import Returns from "./Pages/Returns";
import Shipments from "./Pages/Shipments";
import Statements from "./Pages/Statements";
import Partners from './Pages/Partners';
import Teams from "./Pages/Teams";
import Communications from "./Pages/Communications";
import Logout from "./Pages/Logout";
import Sales from "./Pages/Sales";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
  <>
  <Router>
    <header><h1>KIDZIE</h1></header>
    
    <Navbar />
    <div className="main">
      <Route path="/" exact={true} component={Home}/>
      <Route path="/profile" exact={true} component={Profile}/>
      <Route path="/kidziecatalogue" exact={true} component={Kidziecatalogue}/>
      <Route path="/inventorymanagement" exact={true} component={InventoryManagement}/>
      <Route path="/sales" exact={true} component={Sales}/>
      <Route path="/orders" exact={true} component={Orders}/>
      <Route path="/reports" exact={true} component={Reports}/>
      <Route path="/promocodes" exact={true} component={Promocodes}/>
      <Route path="/returns" exact={true} component={Returns}/>
      <Route path="/shipments" exact={true} component={Shipments}/>
      <Route path="/statements" exact={true} component={Statements}/>
      <Route path="/partners" exact={true} component={Partners}/>
      <Route path="/teams" exact={true} component={Teams}/>
      <Route path="/communications" exact={true} component={Communications}/>
      <Route path="/logout" exact={true} component={Logout}/>
     

    </div>
    </Router>
    </>
  )
}

export default App;
