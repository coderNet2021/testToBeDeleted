import {Link} from 'react-router-dom'; 
const Navbar=()=>{
    return(
    <div className="sidenav">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
            <li>
                <Link to="/kidziecatalogue">Kidzie Catalogue</Link>
            </li>
            <li>
                <Link to="/inventorymanagement">Inventory Management</Link>
            </li>
            <li>
                <Link to="/orders">Orders</Link>
            </li>
            <li>
                <Link to="/sales">Sales</Link>
            </li>
            <li>
                <Link to="/reports">Reports</Link>
            </li>
            <li>
                <Link to="/promocodes">Promocodes</Link>
            </li>
            <li>
                <Link to="/returns">Returns</Link>
            </li>
            <li>
                <Link to="/shipments">Shipments</Link>
            </li>
            <li>
                <Link to="/statements">Statements</Link>
            </li>
            <li>
                <Link to="/partners">Partners</Link>
            </li>
            <li>
                <Link to="/teams">Teams</Link>
            </li>
            <li>
                <Link to="/communications">Communications</Link>
            </li>
            <li>
                <Link to="/logout">Logout</Link>
            </li>
        </ul>
    </div>
    );

}
export default Navbar;