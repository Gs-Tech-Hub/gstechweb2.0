import { GlobalContext } from "../context/GlobalContext";
import "./globals.css";


export const metadata = {
  title: "GSTECHHUB - Web Development & IT Solutions",
  description: "GsTechHub Digital Agency, a digital service provider",
  icons: {
    icon: '/favicon.ico', // Path to your favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="web development, digital marketing, IT solutions, GSTECHHUB" />
        <meta name="author" content="GSTECHHUB" />
        <meta name="description" content="GsTechHub Digital Agency, a digital service provider" />
        {/* <!-- Add Open Graph Metadata --> */}
        <meta property="og:title" content="GSTECHHUB - Web Development & IT Solutions" />
        <meta property="og:description" content="Your trusted partner for web development, digital marketing, and IT solutions." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://www.gstechhub.com.ng" />
        <meta property="og:type" content="website" />
        {/* <!-- Add Twitter Card Metadata --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GSTECHHUB - Web Development & IT Solutions" />
        <meta name="twitter:description" content="Your trusted partner for web development, digital marketing, and IT solutions." />
        <meta name="twitter:image" content="public\images\others\gstechhub-logo-black.png" />
        <title>GSTECHHUB - Web Development & IT Solutions</title>
      </head>

      <body>
        <GlobalContext>
          {children}
        </GlobalContext>
      </body>
    </html>
  );
}
