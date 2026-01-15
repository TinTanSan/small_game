import { createContext } from "react";

interface PageCtxType{
    page: string,
    setPage: React.Dispatch<React.SetStateAction<string>>
}
export const PageContext = createContext<PageCtxType>({page: '', setPage:()=>{throw new Error("cannot call setPage without having set the context")}});