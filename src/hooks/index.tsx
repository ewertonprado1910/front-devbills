import { ReactNode } from "react";
import { FetchAPiProvider } from "./useFetchApi";

type AppProviderProps = {
    children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
    return (
        <FetchAPiProvider>
            {children}
        </FetchAPiProvider>

    )
}