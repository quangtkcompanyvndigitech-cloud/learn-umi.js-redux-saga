import { Link, Outlet } from "umi";

export default function () {
  return (
    <div className="admin-layout">
      <aside className="admin-sider">
        <div className="logo-admin-container">
          <img
            src="https://digiai.vndigitech.com/Logo-Digitech.png"
            alt="logo"
            className="logo-admin"
          />
        </div>

        <nav className="admin-nav">
          <ul>
            <li className="nav-item">
              <Link to="/admin/dashboard" className="nav-link active">
                Dashboard
              </Link>
            </li>
            
          </ul>
        </nav>
      </aside>

      <div className="admin-main">
        <Outlet />
      </div>
    </div>
  );
}