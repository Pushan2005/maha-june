"use client";

import { useTma } from "@/components/tma/hook";
import { Button } from "@/components/ui/button";
import { WalletConnectButton } from "@/components/wallet/wallet-connect-button";
import Link from "next/link";

import { useAccount } from "wagmi";

export default function Home() {
    const { user } = useTma();
    const account = useAccount();

    const name = user.firstName.replace(/^"(.*)"$/, "$1");

    return (
        <main className="w-full h-full flex flex-col items-center justify-between">
            <div className=" flex items-center justify-center w-full h-[60vh] bg-black">
                <h1 className="text-lg text-white text-center font-semibold">
                    Welcome back, {name}!
                </h1>
            </div>
            <div className="w-full h-[40vh] justify-between p-20 bg-[#EDEDED] items-center flex flex-col ">
                <Button className="w-32">
                    <Link href="/food">Check Menu</Link>
                </Button>

                <h1 className="text-muted-foreground text-center">
                    Please link a wallet in the next page to place orders
                </h1>
            </div>
        </main>
    );
}
