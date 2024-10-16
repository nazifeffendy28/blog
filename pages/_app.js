// pages/_app.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChangeStart = () => {
            const pageContent = document.getElementById("page-content");
            if (pageContent) {
                pageContent.classList.add("fade-out");
            }
        };

        const handleRouteChangeComplete = () => {
            const pageContent = document.getElementById("page-content");
            if (pageContent) {
                pageContent.classList.remove("fade-out");
                pageContent.classList.add("fade-in");
            }
        };

        router.events.on("routeChangeStart", handleRouteChangeStart);
        router.events.on("routeChangeComplete", handleRouteChangeComplete);

        return () => {
            router.events.off("routeChangeStart", handleRouteChangeStart);
            router.events.off("routeChangeComplete", handleRouteChangeComplete);
        };
    }, [router]);

    return (
        <>
            <span className="theme-bejamas" />
            <div id="page-content">
                <Component {...pageProps} />
            </div>
        </>
    );
}

export default MyApp;
