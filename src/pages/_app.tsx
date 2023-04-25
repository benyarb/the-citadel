import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`p-12 ${inter.className}`}>
      <Header />

      <main className="max-w-5xl py-12">
        <Component {...pageProps} />
      </main>

      <Footer />
    </div>
  );
}
