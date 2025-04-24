import { Poppins} from "next/font/google";
import "./globals.css";
import { i18n } from "../../../i18n-config";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight:['400']
});


export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={params.lang}>
      <body
        className={`${poppins.className} `}
      >
        <div className="main-container">
          <Navbar />
          <main>
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