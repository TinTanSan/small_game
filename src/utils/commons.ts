export function generateUUID(): string{
    if(typeof window !== "undefined"){
       return window.crypto.randomUUID();
    }
    return "";
}
