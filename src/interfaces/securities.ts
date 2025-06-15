export interface Event{
    id: string;
    type: 'positive' | 'negative'; //event type
    title: string; // title
    description: string; // short description of what happened
    impact: number; //impact on underlying security
}

export interface Security{
    ticker: string;
    name: string;
    industry: string;
    securityType: "Equity" | "Commoditity" ;
    riskTier: "Low" | "High";
    currentValue: number;
    recentEvents: Event[];
}

export interface Holding{
    ticker: string;
    units: number;
    averagePrice: number;
}