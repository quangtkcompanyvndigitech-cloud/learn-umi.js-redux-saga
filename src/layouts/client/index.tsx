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
      {/* Title */}
      <title>Pixio: Shop &amp; eCommerce HTML Template | DexignZone</title>
      {/* Meta */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="author" content="DexignZone" />
      <meta name="robots" content="index, follow" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="keywords" content="template, ui kit, clothing, delivery, ecommerce, fashion, order, shopping, store, fashion design, fashion store, responsive design, fashion showcase, modern design, fashion technology, e-shop, ecommerce web, eCommerce Website, minimal shop, online shop, online shopping, pixio, user experience, Design Elements, Trendy, Stylish, User-Friendly, Navigation, Product Display, Branding, Development, Visual Design, UI/UX, Website, Web Design" />
      <meta name="description" content="Elevate your online retail presence with Pixio Shop & eCommerce HTML Template. Crafted with precision, this responsive and feature-rich template provides a seamless and visually stunning shopping experience. Explore a world of possibilities with modern design elements, intuitive navigation, and customizable features. Transform your website into a dynamic online storefront with Pixio, where style meets functionality for a captivating and user-friendly eCommerce journey." />
      <meta property="og:title" content="Pixio: Shop & eCommerce Bootstrap HTML Template | DexignZone" />
      <meta property="og:description" content="Elevate your online retail presence with Pixio Shop & eCommerce HTML Template. Crafted with precision, this responsive and feature-rich template provides a seamless and visually stunning shopping experience. Explore a world of possibilities with modern design elements, intuitive navigation, and customizable features. Transform your website into a dynamic online storefront with Pixio, where style meets functionality for a captivating and user-friendly eCommerce journey." />
      <meta property="og:image" content="https://pixio.dexignzone.com/xhtml/social-image.png" />
      {/* TWITTER META */}
      <meta name="twitter:title" content="Pixio: Shop & eCommerce Bootstrap HTML Template | DexignZone" />
      <meta name="twitter:description" content="Elevate your online retail presence with Pixio Shop & eCommerce HTML Template. Crafted with precision, this responsive and feature-rich template provides a seamless and visually stunning shopping experience. Explore a world of possibilities with modern design elements, intuitive navigation, and customizable features. Transform your website into a dynamic online storefront with Pixio, where style meets functionality for a captivating and user-friendly eCommerce journey." />
      <meta name="twitter:image" content="https://pixio.dexignzone.com/xhtml/social-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      {/* CANONICAL URL */}
      <link rel="canonical" href="https://pixio.dexignzone.com/xhtml/login.html" />
      {/* FAVICONS ICON */}
      <link rel="icon" type="image/x-icon" href="/client/images/favicon.png" />
      {/* MOBILE SPECIFIC */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* STYLESHEETS */}
      <link rel="stylesheet" type="text/css" href="/client/vendor/bootstrap-select/dist/css/bootstrap-select.min.css" />
      <link rel="stylesheet" type="text/css" href="/client/vendor/swiper/swiper-bundle.min.css" />
      <link rel="stylesheet" type="text/css" href="/client/vendor/nouislider/nouislider.min.css" />
      <link rel="stylesheet" type="text/css" href="/client/vendor/animate/animate.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" />
      <link rel="stylesheet" type="text/css" href="/client/css/style.css" />
      {/* GOOGLE FONTS*/}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      <div className="page-wraper">
        {preloaderVisible ? (
          <div id="loading-area" className="preloader-wrapper-4">
            <img src="/client/images/loading.gif" alt="loading" />
          </div>
        ) : null}

        <Header />

        <Outlet />
        <Footer />

        <button className="scroltop" type="button"><i className="fas fa-arrow-up" /></button>
      </div>

      <script src="/client/js/jquery.min.js"></script>
      <script src="/client/vendor/wow/wow.min.js"></script>
      <script src="/client/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
      <script src="/client/vendor/bootstrap-select/dist/js/bootstrap-select.min.js"></script>
      <script src="/client/vendor/bootstrap-touchspin/bootstrap-touchspin.js"></script>
      <script src="/client/vendor/swiper/swiper-bundle.min.js"></script>
      <script src="/client/vendor/countdown/jquery.countdown.js"></script>
      <script src="/client/vendor/wnumb/wNumb.js"></script>
      <script src="/client/vendor/nouislider/nouislider.min.js"></script>
      <script src="/client/js/dz.carousel.js"></script>
      <script src="/client/js/dz.ajax.js"></script>
      <script src="/client/js/custom.min.js"></script>
    </>

  );
}

