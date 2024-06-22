"use client";
import { Me } from "@/components/me";
import { Button } from "@/components/ui/button";
import { WalletConnectButton } from "@/components/wallet/wallet-connect-button";
import Link from "next/link";
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
            <Button className="bg-blue-600 text-white">
                <Link href="/food">Check Menu</Link>
            </Button>
        </main>
    );
}
