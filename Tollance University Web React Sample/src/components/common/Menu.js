import React from 'react'
import {
    Link, useLocation
} from "react-router-dom";

export const Menu = () => {
    return (
    
            <ul className="justify-content-center">
                <li className="tl-nav-item">
                    <Link to='/' role="button">
                        Home
                    </Link>
                </li>

                <li className="tl-nav-item">
                    <Link to='/research' role="button">
                    Academics 
                    </Link>
                </li>

                <li className="tl-nav-item">
                    <Link to='/study' role="button">
                    Result
                    </Link>
                </li>
            </ul>
            
    )
}
