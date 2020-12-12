import React from 'react';
import {Link} from "react-router-dom";


export default function Nav() {
    return (
        <div className="nav">
           <div className="brand">Movie Stream</div>
           <div className="middle">
           <Link className="nav-link" to="/movies">
                 <span>Movies</span>
             </Link> 
             <Link className="nav-link" to="/series">
                 <span>TV Series</span>
             </Link>
           </div>
           <div className="right"> 
              <i className="fa fa-bars" />
           </div> 
        </div>
    )
}
