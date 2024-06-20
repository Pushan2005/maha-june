"use client";
import { Me } from "@/components/me";
import { WalletConnectButton } from "@/components/wallet/wallet-connect-button";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";

export default function Home() {
    const account = useAccount();
    const router = useRouter();
    if (account.status === "disconnected") {
        router.push("/connectwallet");
    }

    return (
        <main>
            <WalletConnectButton />
            <Me />;
        </main>
    );
}
