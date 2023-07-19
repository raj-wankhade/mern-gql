import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Sidebar from "./components/Sidebar";

function AppLayout() {
  return (
    <div>
      <main className="container">
        <section className="container-fluid px-0">
          <div className="row g-0">
            <nav
              id="main-navbar"
              className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
            >
              <Header />
            </nav>
            <Sidebar />
            <div className="container pt-4 vw-80 vh-100">
              <Outlet />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
