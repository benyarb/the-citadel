import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`page px-12 ${inter.className}`}>
      <Header />

      <main className="mx-auto py-12">
        <Component {...pageProps} />
      </main>

      <Footer />

      <Analytics />
    </div>
  );
}
