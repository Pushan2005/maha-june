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
        projectId: "53b8f38964959c95f742c76c7f479a79",
        chains: [mainnet, polygon, optimism, arbitrum, base, sepolia],
        ssr: true, // If your dApp uses server side rendering (SSR)
    });

    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>{props.children}</RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
