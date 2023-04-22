
import { Outlet, Link } from "react-router-dom";

export const MenuItem = ({ active , url , title , children  }) => (
    <li className={active ? 'active' : ''}>
      <Link to={url} title={title}>{children}</Link>
    </li>
);