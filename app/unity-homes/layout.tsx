import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unity Homes | Kenyan Property Investment for Diaspora",
  description: "Discover Unity Homes: Award-Winning Apartments in Tatu City, Kenya. Qualify for Mortgages from Top Kenyan Banks & Meet Our Diaspora Agent in Spain!",
};

export default function UnityHomesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
} 