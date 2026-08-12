import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import Cursor from "./components/Cursor.jsx";
import Router from "./router.jsx";

export default function App() {
  return (
    <>
      <Cursor />
      <Navigation />

      <main id="main">
        <Router />
      </main>

      <Footer />
    </>
  );
}
