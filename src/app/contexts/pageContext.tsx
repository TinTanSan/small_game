import { createContext } from "react";

interface PageCtxType{
    page: string,
    setPage: React.Dispatch<React.SetStateAction<string>>
}
export const PageContext = createContext<PageCtxType | undefined>(undefined);