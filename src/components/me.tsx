"use client";

import { useAccount, useBalance } from "wagmi";
import { useTma } from "./tma/hook";
import { useRouter } from "next/navigation";

function convertBigIntToNumber(value?: BigInt) {
    if (value === undefined) return 0;
    return (parseFloat(value.toString()) / 10 ** 18).toFixed(4);
}

export function Me() {
    const { user } = useTma();
    const account = useAccount();
    const router = useRouter();
    if (account.status === "disconnected") {
        router.push("/connectwallet");
    }
    const balance = useBalance({
        address: account.address,
    });

    const ogBalance = convertBigIntToNumber(balance.data?.value);
    const symbol = balance.data?.symbol;

    return (
        <div>
            <p>Wallet Status: {account.status}</p>
            <p>User: {JSON.stringify(user.firstName, null, 2)}</p>
            <p>Address: {account.address}</p>
            <p>
                Balance: {ogBalance} {symbol}
            </p>
        </div>
    );
}
