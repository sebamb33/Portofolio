import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ()=>
{
    <div className="navigation">
        <NavLink exact to= "/" activeClassName="selected">
            Accueil
        </NavLink>
        <NavLink exact to ="/competences" activeClassName="selected">
            Mes compétences
        </NavLink>
        <NavLink exact to ="/contact" activeClassName="selected">
            Me contacter
        </NavLink>
    </div>
}