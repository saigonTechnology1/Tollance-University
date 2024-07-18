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

                {/* Add the Academic and Result Link insted of Study and Transfer  */}
                {/* Also I create those two pase with content is coming soon... */}

                <li className="tl-nav-item">
                    <Link to='/academic' role="button">
                        Academic
                    </Link>
                </li>
                <li className="tl-nav-item">
                    <Link to='/result' role="button">
                        Result
                    </Link>
                </li>
            </ul>
    )
}
