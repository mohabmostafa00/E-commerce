import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../Components/Loading/Loading";
import "./styles.css";

function MainLayout() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  if (loader) {
    return <Loading />;
  }
  return (
    <>
      <div className="app-layout">
        <Header />

        <main className="wrapper">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
