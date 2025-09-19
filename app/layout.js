import "./globals.css";



export const metadata = {
  title: "Portfolio - TemiAde",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={` antialiased leading-8 overflow-x-hidden bg-[#11001f] text-white/80`}
      >
        {children}
      </body>
    </html>
  );
}
