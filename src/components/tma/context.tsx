"use client";

import { createContext } from "react";
import { User } from "@tma.js/sdk-react";

type TTmaContex = {
    user: User;
};

export const TmaContex = createContext<TTmaContex>({} as TTmaContex);
