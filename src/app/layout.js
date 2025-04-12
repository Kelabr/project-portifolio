import "./globals.css";

export const metadata = {
  title: "Portifolio",
  description: "um site ai",
};

import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
      <Header/>  
        {children}
      </body>
    </html>
  );
}
