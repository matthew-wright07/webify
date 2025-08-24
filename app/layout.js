import "./globals.css";

export const metadata = {
  title: "Linkly",
  description: "A link in bio maker",
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
