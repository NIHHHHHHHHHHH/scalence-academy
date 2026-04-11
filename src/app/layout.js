import { Montserrat, Nunito } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});
 
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata = {
  title: "Scalence Academy - JEE | NEET | MHT-CET Coaching in Pune",
  description:"Scalence Academy is Pune's most result-driven coaching institute. 8,400+ students trained, 94% selection rate. JEE Main, JEE Advanced, NEET, MHT-CET and Foundation batches. Max 35 students per batch.",
  keywords:"scalence academy, jee coaching pune, neet coaching pune, mht-cet coaching pune, best coaching institute pune, iit jee coaching deccan gymkhana, foundation course pune",
  authors: [{ name: "Scalence Academy" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Scalence Academy - Results That Speak",
    description:"8,400+ students. 94% selection rate. JEE | NEET | MHT-CET coaching in Pune. Max 35 per batch.",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${nunito.variable}`}>
      <body className="font-body bg-bg text-text antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}