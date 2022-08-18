import { NavLink } from 'react-router-dom';

const NavbarMenuItem = ({ path, title }) => {
     return (
          <div className="navbar-menu-item px-5 py-5">
               <NavLink className="navbar-menu-link" to={path}>
                    {title}
               </NavLink>
          </div>
     );
};

export default NavbarMenuItem;
