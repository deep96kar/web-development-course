import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Facebook - Connect with friends and the world around you",
  description: "Facebook is a social utility that connects people with friends and others who work, study and live around them. People use Facebook to keep up with friends, upload an unlimited number of photos, post links and videos, and learn more about the people they meet.",
};

export default function RootLayout({ children }) {
  const removalScript = `try{(function(){var d=document.documentElement;d.removeAttribute('crxemulator');var o=new MutationObserver(function(records){for(var r of records){if(r.type==='attributes'&&r.attributeName==='crxemulator'){try{d.removeAttribute('crxemulator')}catch(e){}}}});o.observe(d,{attributes:true,attributeFilter:['crxemulator']});})();}catch(e){};`;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script dangerouslySetInnerHTML={{ __html: removalScript }} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}