import {
  Suspense,
  lazy,
  useEffect,
  useLayoutEffect,
  useSyncExternalStore,
} from "react";
import NotFound from "./pages/NotFound.jsx";

/**
 * Tiny hash-based router.
 * We use hash routing to avoid needing server-side rewrites for a
 * static deploy, and keep the router tiny (no react-router dep).
 * Every page is code-split via React.lazy so only the visited route's
 * JS is downloaded — good for Lighthouse.
 */
const routes = {
  "#/": () => import("./pages/Home.jsx"),
  "#/sports": () => import("./pages/Sports.jsx"),
  "#/history": () => import("./pages/History.jsx"),
  "#/culture": () => import("./pages/Culture.jsx"),
  "#/moments": () => import("./pages/Moments.jsx"),
  "#/about": () => import("./pages/About.jsx"),
  "#/contact": () => import("./pages/Contact.jsx"),
  "#/privacy": () => import("./pages/Privacy.jsx"),
  "#/terms": () => import("./pages/Terms.jsx"),
  "#/sitemap": () => import("./pages/Sitemap.jsx"),
};

// Per-page <title> for SEO. Kept in one place, applied on every route change.
const titles = {
  "#/": "日本スポーツ図鑑 — 日本のスポーツを、物語として。",
  "#/sports": "日本のスポーツ — 日本スポーツ図鑑",
  "#/history": "歴史 — 日本スポーツ図鑑",
  "#/culture": "文化 — 日本スポーツ図鑑",
  "#/moments": "名場面 — 日本スポーツ図鑑",
  "#/about": "私たちについて — 日本スポーツ図鑑",
  "#/contact": "お問い合わせ — 日本スポーツ図鑑",
  "#/privacy": "プライバシーポリシー — 日本スポーツ図鑑",
  "#/terms": "利用規約 — 日本スポーツ図鑑",
  "#/sitemap": "サイトマップ — 日本スポーツ図鑑",
};

const cache = {};
function getPage(hash) {
  const loader = routes[hash];
  if (!loader) return null;
  if (!cache[hash]) cache[hash] = lazy(loader);
  return cache[hash];
}

function subscribe(cb) {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
}
function getSnapshot() {
  return window.location.hash || "#/";
}
function getServerSnapshot() {
  return "#/";
}

export function useRoute() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default function Router() {
  const hash = useRoute();
  const Page = getPage(hash);

  // Reset scroll and update title on every route change.
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.title = titles[hash] || titles["#/"];
  }, [hash]);

  // Warm up common routes after idle so nav feels instant.
  useEffect(() => {
    const idle =
      window.requestIdleCallback ||
      ((fn) => setTimeout(fn, 400));
    const id = idle(() => {
      routes["#/about"]?.();
      routes["#/contact"]?.();
    });
    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(id);
      else clearTimeout(id);
    };
  }, []);

  if (!Page) return <NotFound />;
  return (
    <Suspense fallback={<div className="route-fallback" aria-hidden="true" />}>
      <Page />
    </Suspense>
  );
}
