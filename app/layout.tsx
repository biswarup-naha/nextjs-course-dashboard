import "@/app/ui/global.css"
import { inter } from "./ui/fonts";
import ChatWidget from "./components/ChatWidget";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
