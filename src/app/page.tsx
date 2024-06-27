"use client";

import { useTma } from "@/components/tma/hook";
import { Button } from "@/components/ui/button";
import { WalletConnectButton } from "@/components/wallet/wallet-connect-button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";

export default function Home() {
    const { user } = useTma();
    const account = useAccount();
    // const router = useRouter();
    // if (account.status === "disconnected") {
    //     router.push("/connectwallet");
    // }
    const name = user.firstName.replace(/^"(.*)"$/, "$1");

    return (
        <main className="w-full h-full flex flex-col items-center justify-between">
            <div className=" flex items-center justify-center w-full h-[60vh] bg-black">
                <h1 className="text-lg text-white text-center font-semibold">
                    Welcome back, {name}!
                </h1>
            </div>
            <div className="w-full h-[40vh] justify-between p-20 bg-[#EDEDED] items-center flex flex-col ">
                <WalletConnectButton />
                {account.status === "disconnected" && (
                    <h1 className="text-muted-foreground">
                        Please link a wallet to continue
                    </h1>
                )}
                {account.status === "connected" && (
                    <Button className="w-32">
                        <Link href="/food">Check Menu</Link>
                    </Button>
                )}
            </div>
        </main>
    );
}
