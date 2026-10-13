import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://giftcards.giftcardmallbalance.credit"),
  alternates: {
    canonical: "/",
  },
  applicationName: "Gift Card Balance",
  title: "GiftCardMall/Mygift | Gift Card Balance | Activate Card",
  description:
    "Gift Card Balance is an independent resource with practical guidance for checking prepaid gift card balances, understanding activation, and troubleshooting payments safely. We are not the card issuer and never request card details.",
  keywords: [
    "gift card balance",
    "prepaid gift card balance",
    "gift card activation",
    "gift card payment help",
    "GiftCardMall/Mygift",
    "GiftCardMall balance guidance",
    "MyGift card help",
  ],
  openGraph: {
    type: "website",
    url: "https://giftcards.giftcardmallbalance.credit/",
    siteName: "Gift Card Balance",
    title: "GiftCardMall/Mygift | Gift Card Balance Help",
    description:
      "Independent, safety-first guidance for gift card balances, activation, and payment questions.",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "GiftCardMall/Mygift | Gift Card Balance Help",
    description:
      "Independent, safety-first guidance for gift card balances, activation, and payment questions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
