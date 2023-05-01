import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "active-link" : "default-link"}
        >{children}</NavLink>
    );
};

export default ActiveLink;