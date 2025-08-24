import "./globals.css";

export const metadata = {
  title: "Webify",
  description: "The Simplest Website Builder",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
