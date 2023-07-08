import { Outlet } from "react-router-dom";
import Alert from "./components/Alert";
import Header from "./components/Header";
import Footer from "./components/Footer";

function AppLayout() {
  return (
    <div>
      <Header />
      <Alert />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
