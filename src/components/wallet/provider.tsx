"use client";

import { PropsWithChildren } from "react";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    sepolia,
} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();
export function WalletProvider(props: PropsWithChildren) {
    const config = getDefaultConfig({
        appName: "Food Ordering TMA",
        projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!,
        chains: [mainnet, polygon, optimism, arbitrum, base, sepolia],
        ssr: true, // uses server side rendering
    });

    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>{props.children}</RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
