import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sanket Mane | Portfolio",
  description: "Discover a dynamic and responsive website built with Next.js, a powerful React framework. Explore innovative features, seamless navigation, and captivating design, crafted to deliver an unparalleled user experience. Whether you're a developer seeking cutting-edge technology or a user looking for intuitive interfaces, this Next.js project is your gateway to modern web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>{children}</body>
    </html>
  );
}
