import type { Metadata } from "next";
import "./globals.scss";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata: Metadata = {
  title: "Erielí Carolina Lara (@erielilara) • Frontend Developer",
  description: "Frontend Developer",
  icons: {
    icon: "/images/ErieliIcon_white.svg",
    shortcut: "/icons/favicon.ico", // Icono por defecto (algunos navegadores usan .ico)
    apple: "/icons/apple-touch-icon.png", // Icono en iOS (opcional)
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="wrapper">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
