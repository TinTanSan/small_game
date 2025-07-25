export interface Event{
    type: 'positive' | 'negative'; //event type
    title: string; // title
    description: string; // short description of what happened
    impact: number; //impact on underlying security
}

export interface Security{
    ticker: string;
    name: string;
    industry: string;
    securityType: "Equity" | "Commodity" ;
    riskTier: "Low" | "High";
    priceHistory: Array<number>;
    recentEvents: Array<Event>;
}

export interface Holding{
    ticker: string;
    units: number;
    averagePrice: number;
}