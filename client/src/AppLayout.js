import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <h2>Footer</h2>
    </div>
  );
}

export default AppLayout;
