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
            router.push("/food");
        };

        if (account.status === "connected") {
            rerouteToMain();
        }
        /* eslint-disable-next-line */
    }, [account.status]);

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="flex flex-col space-y-4 items-center">
                <WalletConnectButton />
                <h1>You need to connect a wallet to proceed</h1>
            </div>
        </div>
    );
}
