import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LandingPage from "./pages/landingPage/LandingPage";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <LandingPage />
      </main>
      <Footer />
    </>
  );
};

export default App;
