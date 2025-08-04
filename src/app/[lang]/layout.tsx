import { Poppins} from "next/font/google";
import "./globals.css";
import { i18n } from "../../../i18n-config";

const poppins = Poppins({
  subsets: ["latin"],
  weight:['400']
});


export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: { lang: string };
  }>
) {
  const params = await props.params;

  const {
    children
  } = props;

  return (
    <html lang={params.lang}>
      <body
        className={`${poppins.className} `}
      >
        <div className="main-container">
          {children}
        </div>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}