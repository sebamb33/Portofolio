import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ()=>
{
    return(
    <div className="navigation">
        <NavLink exact to= "/" activeClassName="selected">
            Accueil
        </NavLink>
        <NavLink exact to ="/competences" activeClassName="selected">
            Compétences
        </NavLink>
        <NavLink exact to ="/contact" activeClassName="selected">
            Contacter
        </NavLink>
    </div>
    );
};

export default Navigation;