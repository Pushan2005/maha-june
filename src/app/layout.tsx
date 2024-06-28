"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TmaProvider } from "@/components/tma/provider";
import { WalletProvider } from "@/components/wallet/provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="">
                    <TmaProvider>
                        <WalletProvider>{children}</WalletProvider>
                    </TmaProvider>
                </div>
            </body>
        </html>
    );
}
