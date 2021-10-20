import React from 'react';
import {Link} from 'react-router-dom';
const Navbar=()=>{
    return<React.Fragment>
        <div>
            <Link to="/home">Welcome</Link><br />
            <Link to="/home/user">user</Link>
        </div>
    </React.Fragment>
}
export default Navbar;