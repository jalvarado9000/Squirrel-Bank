import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
    return (
        <div className="dashboard-page">

            <nav>
                {/* displays links to travel from page to page. */}
                <NavLink to="/">Register</NavLink>
                <br />
                <NavLink to="Dashboard">Dashboard</NavLink>
                <br />
                <NavLink to="Login">Login</NavLink>
            </nav>

            <main>
                {/* allows to display the main page bellow the links */}
                <Outlet />
            </main>
        </div>
    )
}