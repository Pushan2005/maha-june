"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { TmaContex } from "./context";
import { User, retrieveLaunchParams, SDKProvider } from "@tma.js/sdk-react";
import LoadingDots from "../loading-dots";

export function TmaProvider(props: PropsWithChildren) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
    const [telegramUser, setTelegramUser] = useState<User>({} as User);

    function fetchTelegramUser() {
        try {
            const launchParams = retrieveLaunchParams();
            const user = launchParams?.initData?.user;
            if (!user) {
                throw new Error("User not found");
            }
            setTelegramUser(user);
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(fetchTelegramUser, []);

    if (isLoading) {
        return <LoadingComponent />;
    }

    if (isError) {
        return <TmaErrorComponent />;
    }

    return (
        <SDKProvider acceptCustomStyles debug>
            <TmaContex.Provider value={{ user: telegramUser }}>
                {props.children}
            </TmaContex.Provider>
        </SDKProvider>
    );
}

function LoadingComponent() {
    return (
        <div className="h-screen w-screen">
            <LoadingDots />
        </div>
    );
}

function TmaErrorComponent() {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <p className="text-red-500">
                This app is only available on Telegram. Please visit
                @mahajune2024bot to access this app.
            </p>
        </div>
    );
}
