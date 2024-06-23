import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tech Build",
  description:
    "Tech Build es tu tienda online de confianza para productos tecnológicos de alta calidad. Descubre la última tecnología en computadoras, laptops, smartphones, accesorios y más. Compra fácil y seguro con envíos rápidos y atención al cliente excepcional.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
