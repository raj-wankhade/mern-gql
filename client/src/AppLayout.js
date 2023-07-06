import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <h2>Header</h2>
      <main>
        <Outlet />
      </main>
      <h2>Footer</h2>
    </div>
  );
}

export default AppLayout;
