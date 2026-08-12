import Hero from "../components/Hero.jsx";
import Tradition from "../components/Tradition.jsx";
import Competition from "../components/Competition.jsx";
import Passion from "../components/Passion.jsx";
import Focus from "../components/Focus.jsx";
import Glory from "../components/Glory.jsx";
import Future from "../components/Future.jsx";
import SpiritQuiz from "../components/SpiritQuiz.jsx";

/**
 * ホーム — the seven-scene editorial exhibition + spirit quiz.
 * Wrapper divs give GSAP-pinned scenes a stable React parent so
 * pin-spacer DOM wrapping doesn't clash with React on unmount.
 */
export default function Home() {
  return (
    <>
      <div><Hero /></div>
      <Tradition />
      <Competition />
      <div><Passion /></div>
      <Focus />
      <Glory />
      <SpiritQuiz />
      <div><Future /></div>
    </>
  );
}
