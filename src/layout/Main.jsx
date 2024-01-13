import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { useContext } from "react";
import { AuthContext } from "../config/contexts/AuthProvider";
import Loading from "../components/Loading";

const Main = () => {
  const { loading } = useContext(AuthContext);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <main className="min-h-screen">
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Main;
