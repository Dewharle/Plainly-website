import "./globals.css";
import TooltipTap from "@/components/TooltipTap";

export const metadata = {
  title: { default: "Plainly · Rent and buy straight from the owner", template: "%s" },
  description:
    "Verified owners, real walkthrough videos and the full cost to move in, before you ever leave home. No inspection fees. No surprise charges.",
  icons: { icon: "/favicon.svg" },
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#0E5A3C" };

export default function RootLayout({ children }) {
  return (
    <html lang="en-NG">
      <body>
        {children}
        <TooltipTap />
      </body>
    </html>
  );
}
