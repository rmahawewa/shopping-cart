import { Link } from 'react-router-dom'
import { Outlet } from "react-router-dom";

function TopLayer() {
    return (
        <div>
            <div></div>
            <div>
                <div><Link to="/toplayer">About</Link></div>
                <div><Link to="store">Store</Link></div>
            </div>
            <div>
                <Outlet />
            </div>

        </div>
    );
};

export default TopLayer;