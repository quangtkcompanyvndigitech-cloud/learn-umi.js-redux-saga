import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { Outlet } from "umi";

export default function () {
  const [showPassword, setShowPassword] = useState(false);
  /** Không dùng DOM .remove() cho #loading-area — React sẽ render lại node và preloader kẹt mãi */
  const [preloaderVisible, setPreloaderVisible] = useState(true);

  useEffect(() => {
    const hidePreloader = () => setPreloaderVisible(false);
    hidePreloader();
    const dedupeFooter = () => {
      const footers = Array.from(document.querySelectorAll(".site-footer"));
      footers.slice(1).forEach((footer) => footer.remove());
    };
    dedupeFooter();
    const dedupeTimer = window.setTimeout(dedupeFooter, 300);
    window.addEventListener("load", hidePreloader);
    window.addEventListener("load", dedupeFooter);
    const fallback = window.setTimeout(hidePreloader, 10000);
    const blockJavascriptHref = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest('a[href^="javascript:"]') as HTMLAnchorElement | null;
      if (link) {
        event.preventDefault();
      }
    };

    document.addEventListener("click", blockJavascriptHref, true);
    return () => {
      window.removeEventListener("load", hidePreloader);
      window.removeEventListener("load", dedupeFooter);
      window.clearTimeout(fallback);
      window.clearTimeout(dedupeTimer);
      document.removeEventListener("click", blockJavascriptHref, true);
    };
  }, []);

  return (
    <>
      <Outlet />
    </>
  )
}

