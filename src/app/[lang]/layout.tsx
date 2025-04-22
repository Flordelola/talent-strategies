import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getStrapiMedia, getStrapiURL } from "./utils/api-helpers";
import { fetchAPI } from "./utils/fetch-api";
import { i18n } from "../../../i18n-config";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const FALLBACK_SEO = {
    title: "Talent strategies",
    description: "HR - Alejandra Espinosa",
}
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

async function getGlobal(): Promise<any> {

    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    if (!token) throw new Error("The Strapi API Token environment variable is not set.");
    const path = `/global`;
    const options = { headers: { Authorization: `Bearer ${token}` } };
    
    const response = await fetchAPI(path, options);
    return response;

}

export async function generateMetadata(): Promise<Metadata> {
    const meta = await getGlobal();
    if (!meta.data) return FALLBACK_SEO;
    const { metadata, favicon } = meta.data.attributes;
    const { url } = favicon.data.attributes;
    return {
      title: metadata.metaTitle,
      description: metadata.metaDescription,
      icons: {
        icon: [new URL(url, getStrapiURL())],
      },
    };

  }


export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="main-container">
          <Navbar />
          <main className="max-container">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}