import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="flex flex-col mt-10 drawer-content ms-4">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="h-full p-4 menu w-80 bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><NavLink to="/dashboard/customerOrder">Customer Orders</NavLink></li>
                        <li><NavLink to="/dashboard/customerList">Customer List</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;