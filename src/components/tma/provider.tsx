"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { TmaContex } from "./context";
import { User, retrieveLaunchParams, SDKProvider } from "@tma.js/sdk-react";

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
        return <TmaLoadingComponent />;
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

function TmaLoadingComponent() {
    return <div>Loading...</div>;
}

function TmaErrorComponent() {
    return <div>This app is only available on telegram</div>;
}
