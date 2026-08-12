import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import Cursor from "./components/Cursor.jsx";
import Hero from "./components/Hero.jsx";
import Tradition from "./components/Tradition.jsx";
import Competition from "./components/Competition.jsx";
import Passion from "./components/Passion.jsx";
import Focus from "./components/Focus.jsx";
import Glory from "./components/Glory.jsx";
import Future from "./components/Future.jsx";

export default function App() {
  return (
    <>
      <Cursor />
      <Navigation />

      <main id="main">
        {/* Wrapper divs give GSAP-pinned scenes a stable React parent
            so pin-spacer wrapping doesn't clash with React's unmount. */}
        <div><Hero /></div>
        <Tradition />
        <Competition />
        <div><Passion /></div>
        <Focus />
        <Glory />
        <div><Future /></div>
      </main>

      <Footer />
    </>
  );
}
