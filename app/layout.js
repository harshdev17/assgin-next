import  "bootstrap/dist/css/bootstrap.min.css"
import AddBootstrap from "./AddBootstrap";

import "@/public/css/demo.css";
import "@/public/css/icons.css";
import "@/public/css/component.css";
import "@/public/css/normalize.css";
import "@/public/css/style.css"
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      {/* <!--google-font--> */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wdth,wght@0,75..100,100..900;1,75..100,100..900&display=swap"
        rel="stylesheet" />
    {/* <!-- font-awesome --> */}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body>
        <AddBootstrap />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
