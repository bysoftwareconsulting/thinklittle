import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav/nav";
import Footer from "@/components/Footer/footer"
import { Roboto_Slab, Roboto } from "next/font/google";


const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Roboto({ 
  variable: "--font-roboto", 
  subsets: ["latin"], 
  weight: ["400", "700"] });


export const metadata: Metadata = {
  title: "Think Little PDX",
  description: "Think Little PDX public facing website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSlab.className} ${roboto.variable} antialiased`}>
          <header> <Nav /></header>
          <div>
            {children}
          </div>
          <footer><Footer /></footer>
      </body>
    </html>
  );
}
