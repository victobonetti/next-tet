import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "./metadata";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="h-full">
      <body>
          {children}
      </body>
    </html>
  );
}
