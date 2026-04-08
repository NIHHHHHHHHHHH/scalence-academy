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
  title: "Scalence Academy",
  description: "It's a coaching website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
