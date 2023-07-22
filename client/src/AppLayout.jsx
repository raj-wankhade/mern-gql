import { Outlet, useNavigation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import Loader from "./components/Loader.jsx";

function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";
  return (
    <div>
      <Header />
      {isLoading && <Loader />}
      <ToastContainer />
      <main className="mt-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
