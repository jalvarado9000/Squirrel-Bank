import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
    return (
        <div className="dashboard-page">
           
                <nav>

                    <NavLink to="/">Register</NavLink>
                    <br />
                    <NavLink to="Dashboard">Dashboard</NavLink>
                    <br />
                    <NavLink to="Login">Login</NavLink>
                </nav>
           
            <main>
                <Outlet />
            </main>
        </div>
    )
}