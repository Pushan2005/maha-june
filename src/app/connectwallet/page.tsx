"use client";

import { WalletConnectButton } from "@/components/wallet/wallet-connect-button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAccount } from "wagmi";

export default function WalletConnectPage() {
    const router = useRouter();
    const account = useAccount();

    useEffect(() => {
        const rerouteToMain = () => {
            router.push("/");
        };

        if (account.status === "connected") {
            rerouteToMain();
        }
    }, [account.status, router]);

    return (
        <div>
            <WalletConnectButton />
            <p>You need to connect a wallet to proceed</p>
        </div>
    );
}
