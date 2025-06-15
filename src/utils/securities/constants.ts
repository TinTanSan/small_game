import { Security } from "@/interfaces/securities";

export const companies:Array<Security> = [
  {
    ticker: "BSM",
    name: "BuzzSpark Media",
    securityType: "Equity",
    industry: "Entertainment",
    riskTier: "High",
    currentValue: 85.0,
    recentEvents: []
  },
  {
    ticker: "GNX",
    name: "GreenNext Energy",
    securityType: "Equity",
    industry: "Renewable Energy",
    riskTier: "High",
    currentValue: 122.5,
    recentEvents: []
  },
  {
    ticker: "HHC",
    name: "HealthHive Corp",
    securityType: "Equity",
    industry: "Healthcare",
    riskTier: "Low",
    currentValue: 98.3,
    recentEvents: []
  },
  {
    ticker: "FNS",
    name: "FinSight Analytics",
    securityType: "Equity",
    industry: "Finance / AI",
    riskTier: "High",
    currentValue: 110.0,
    recentEvents: []
  },
  {
    ticker: "URB",
    name: "UrbanGrid Development",
    securityType: "Equity",
    industry: "Construction / Real Estate",
    riskTier: "Low",
    currentValue: 75.6,
    recentEvents: []
  },
  {
    ticker: "STR",
    name: "Streamra Networks",
    securityType: "Equity",
    industry: "Technology / Cloud",
    riskTier: "High",
    currentValue: 142.0,
    recentEvents: []
  },
  {
    ticker: "AGX",
    name: "AgriX Foods",
    securityType: "Equity",
    industry: "Agriculture / Consumer Goods",
    riskTier: "Low",
    currentValue: 65.4,
    recentEvents: []
  },
  {
    ticker: "NVC",
    name: "NovaCore Systems",
    securityType: "Equity",
    industry: "Semiconductors",
    riskTier: "High",
    currentValue: 189.1,
    recentEvents: []
  },
  {
    ticker: "TRN",
    name: "Tranvia Logistics",
    securityType: "Equity",
    industry: "Transport / Logistics",
    riskTier: "Low",
    currentValue: 54.2,
    recentEvents: []
  },
  {
    ticker: "GXM",
    name: "GalaxyMart Retail",
    securityType: "Equity",
    industry: "Retail",
    riskTier: "Low",
    currentValue: 49.5,
    recentEvents: []
  }
]

export const commodities: Array<Security>=[
    {
        ticker: "XAUAUD",
        name: "Gold (troy ounce)",
        securityType:"Commoditity",
        riskTier :  "High",
        industry: "Precious Metal",
        currentValue: 2000,
        recentEvents: []
    },
    {
        ticker:"AGAUD",
        name: "Silver (Tonne)",
        securityType:"Commoditity",
        riskTier:"High",
        industry:"Precious Metal",
        currentValue:200,
        recentEvents:[]
    },
    {
        ticker:"CUAUD",
        name: "Copper (Tonne)",
        securityType:"Commoditity",
        riskTier:"High",
        industry:"Precious Metal",
        currentValue:100,
        recentEvents:[]
    },
    {
        ticker:"WTI",
        name:"Brent Crude Oil (barrels)",
        securityType:"Commoditity",
        riskTier:"High",
        industry:"Essential Energy",
        currentValue: 75,
        recentEvents:[]
    },
    {
        ticker:"COB",
        name:"Corn (Bushells)",
        securityType:"Commoditity",
        riskTier:"High",
        industry:"Essential Energy",
        currentValue: 400,
        recentEvents:[]
    },{
        ticker:"WHB",
        name:"Wheat (Bushells)",
        securityType:"Commoditity",
        riskTier:"High",
        industry:"Essential Energy",
        currentValue: 500,
        recentEvents:[]
    },
    {
        ticker:"Sg",
        name:"Sugar ($/pound)",
        securityType:"Commoditity",
        riskTier:"High",
        industry:"Essential Energy",
        currentValue: 12,
        recentEvents:[]
    },
]


export const events = {
  "BSM": [
    {
      "type": "positive",
      "title": "Record Profits Announced",
      "description": "Record Profits Announced affecting company performance.",
      "impact": 0.094
    },
    {
      "type": "negative",
      "title": "Data Breach Incident",
      "description": "Data Breach Incident affecting company performance.",
      "impact": -0.079
    },
    {
      "type": "positive",
      "title": "New Product Launch",
      "description": "New Product Launch affecting company performance.",
      "impact": 0.035
    },
    {
      "type": "negative",
      "title": "Product Recall",
      "description": "Product Recall affecting company performance.",
      "impact": -0.056
    },
    {
      "type": "positive",
      "title": "Successful Marketing Campaign",
      "description": "Successful Marketing Campaign affecting company performance.",
      "impact": 0.042
    },
    {
      "type": "negative",
      "title": "Executive Scandal",
      "description": "Executive Scandal affecting company performance.",
      "impact": -0.088
    },
    {
      "type": "positive",
      "title": "Strategic Partnership Formed",
      "description": "Strategic Partnership Formed affecting company performance.",
      "impact": 0.034
    },
    {
      "type": "negative",
      "title": "Missed Earnings Target",
      "description": "Missed Earnings Target affecting company performance.",
      "impact": -0.079
    },
    {
      "type": "positive",
      "title": "Market Expansion Success",
      "description": "Market Expansion Success affecting company performance.",
      "impact": 0.088
    },
    {
      "type": "negative",
      "title": "Regulatory Fine",
      "description": "Regulatory Fine affecting company performance.",
      "impact": -0.1
    }
  ],
  "ECO": [
    {
      "type": "positive",
      "title": "Record Profits Announced",
      "description": "Record Profits Announced affecting company performance.",
      "impact": 0.054
    },
    {
      "type": "negative",
      "title": "Data Breach Incident",
      "description": "Data Breach Incident affecting company performance.",
      "impact": -0.091
    },
    {
      "type": "positive",
      "title": "New Product Launch",
      "description": "New Product Launch affecting company performance.",
      "impact": 0.042
    },
    {
      "type": "negative",
      "title": "Product Recall",
      "description": "Product Recall affecting company performance.",
      "impact": -0.045
    },
    {
      "type": "positive",
      "title": "Successful Marketing Campaign",
      "description": "Successful Marketing Campaign affecting company performance.",
      "impact": 0.042
    },
    {
      "type": "negative",
      "title": "Executive Scandal",
      "description": "Executive Scandal affecting company performance.",
      "impact": -0.042
    },
    {
      "type": "positive",
      "title": "Strategic Partnership Formed",
      "description": "Strategic Partnership Formed affecting company performance.",
      "impact": 0.06
    },
    {
      "type": "negative",
      "title": "Missed Earnings Target",
      "description": "Missed Earnings Target affecting company performance.",
      "impact": -0.059
    },
    {
      "type": "positive",
      "title": "Market Expansion Success",
      "description": "Market Expansion Success affecting company performance.",
      "impact": 0.079
    },
    {
      "type": "negative",
      "title": "Regulatory Fine",
      "description": "Regulatory Fine affecting company performance.",
      "impact": -0.042
    }
  ],
  "AGX": [
    {
      "type": "positive",
      "title": "Record Profits Announced",
      "description": "Record Profits Announced affecting company performance.",
      "impact": 0.057
    },
    {
      "type": "negative",
      "title": "Data Breach Incident",
      "description": "Data Breach Incident affecting company performance.",
      "impact": -0.061
    },
    {
      "type": "positive",
      "title": "New Product Launch",
      "description": "New Product Launch affecting company performance.",
      "impact": 0.092
    },
    {
      "type": "negative",
      "title": "Product Recall",
      "description": "Product Recall affecting company performance.",
      "impact": -0.081
    },
    {
      "type": "positive",
      "title": "Successful Marketing Campaign",
      "description": "Successful Marketing Campaign affecting company performance.",
      "impact": 0.062
    },
    {
      "type": "negative",
      "title": "Executive Scandal",
      "description": "Executive Scandal affecting company performance.",
      "impact": -0.065
    },
    {
      "type": "positive",
      "title": "Strategic Partnership Formed",
      "description": "Strategic Partnership Formed affecting company performance.",
      "impact": 0.089
    },
    {
      "type": "negative",
      "title": "Missed Earnings Target",
      "description": "Missed Earnings Target affecting company performance.",
      "impact": -0.039
    },
    {
      "type": "positive",
      "title": "Market Expansion Success",
      "description": "Market Expansion Success affecting company performance.",
      "impact": 0.079
    },
    {
      "type": "negative",
      "title": "Regulatory Fine",
      "description": "Regulatory Fine affecting company performance.",
      "impact": -0.092
    }
  ],
  "HLT": [
    {
      "type": "positive",
      "title": "Record Profits Announced",
      "description": "Record Profits Announced affecting company performance.",
      "impact": 0.036
    },
    {
      "type": "negative",
      "title": "Data Breach Incident",
      "description": "Data Breach Incident affecting company performance.",
      "impact": -0.099
    },
    {
      "type": "positive",
      "title": "New Product Launch",
      "description": "New Product Launch affecting company performance.",
      "impact": 0.083
    },
    {
      "type": "negative",
      "title": "Product Recall",
      "description": "Product Recall affecting company performance.",
      "impact": -0.069
    },
    {
      "type": "positive",
      "title": "Successful Marketing Campaign",
      "description": "Successful Marketing Campaign affecting company performance.",
      "impact": 0.042
    },
    {
      "type": "negative",
      "title": "Executive Scandal",
      "description": "Executive Scandal affecting company performance.",
      "impact": -0.043
    },
    {
      "type": "positive",
      "title": "Strategic Partnership Formed",
      "description": "Strategic Partnership Formed affecting company performance.",
      "impact": 0.071
    },
    {
      "type": "negative",
      "title": "Missed Earnings Target",
      "description": "Missed Earnings Target affecting company performance.",
      "impact": -0.034
    },
    {
      "type": "positive",
      "title": "Market Expansion Success",
      "description": "Market Expansion Success affecting company performance.",
      "impact": 0.096
    },
    {
      "type": "negative",
      "title": "Regulatory Fine",
      "description": "Regulatory Fine affecting company performance.",
      "impact": -0.033
    }
  ],
  "NXC": [
    {
      "type": "positive",
      "title": "Record Profits Announced",
      "description": "Record Profits Announced affecting company performance.",
      "impact": 0.086
    },
    {
      "type": "negative",
      "title": "Data Breach Incident",
      "description": "Data Breach Incident affecting company performance.",
      "impact": -0.092
    },
    {
      "type": "positive",
      "title": "New Product Launch",
      "description": "New Product Launch affecting company performance.",
      "impact": 0.059
    },
    {
      "type": "negative",
      "title": "Product Recall",
      "description": "Product Recall affecting company performance.",
      "impact": -0.043
    },
    {
      "type": "positive",
      "title": "Successful Marketing Campaign",
      "description": "Successful Marketing Campaign affecting company performance.",
      "impact": 0.037
    },
    {
      "type": "negative",
      "title": "Executive Scandal",
      "description": "Executive Scandal affecting company performance.",
      "impact": -0.085
    },
    {
      "type": "positive",
      "title": "Strategic Partnership Formed",
      "description": "Strategic Partnership Formed affecting company performance.",
      "impact": 0.068
    },
    {
      "type": "negative",
      "title": "Missed Earnings Target",
      "description": "Missed Earnings Target affecting company performance.",
      "impact": -0.082
    },
    {
      "type": "positive",
      "title": "Market Expansion Success",
      "description": "Market Expansion Success affecting company performance.",
      "impact": 0.038
    },
    {
      "type": "negative",
      "title": "Regulatory Fine",
      "description": "Regulatory Fine affecting company performance.",
      "impact": -0.094
    }
  ],
  "UMV": [
    {
      "type": "positive",
      "title": "Record Profits Announced",
      "description": "Record Profits Announced affecting company performance.",
      "impact": 0.043
    },
    {
      "type": "negative",
      "title": "Data Breach Incident",
      "description": "Data Breach Incident affecting company performance.",
      "impact": -0.037
    },
    {
      "type": "positive",
      "title": "New Product Launch",
      "description": "New Product Launch affecting company performance.",
      "impact": 0.084
    },
    {
      "type": "negative",
      "title": "Product Recall",
      "description": "Product Recall affecting company performance.",
      "impact": -0.035
    },
    {
      "type": "positive",
      "title": "Successful Marketing Campaign",
      "description": "Successful Marketing Campaign affecting company performance.",
      "impact": 0.042
    },
    {
      "type": "negative",
      "title": "Executive Scandal",
      "description": "Executive Scandal affecting company performance.",
      "impact": -0.073
    },
    {
      "type": "positive",
      "title": "Strategic Partnership Formed",
      "description": "Strategic Partnership Formed affecting company performance.",
      "impact": 0.054
    },
    {
      "type": "negative",
      "title": "Missed Earnings Target",
      "description": "Missed Earnings Target affecting company performance.",
      "impact": -0.092
    },
    {
      "type": "positive",
      "title": "Market Expansion Success",
      "description": "Market Expansion Success affecting company performance.",
      "impact": 0.099
    },
    {
      "type": "negative",
      "title": "Regulatory Fine",
      "description": "Regulatory Fine affecting company performance.",
      "impact": -0.078
    }
  ],
  "GLX": [
    {
      "type": "positive",
      "title": "Record Profits Announced",
      "description": "Record Profits Announced affecting company performance.",
      "impact": 0.073
    },
    {
      "type": "negative",
      "title": "Data Breach Incident",
      "description": "Data Breach Incident affecting company performance.",
      "impact": -0.052
    },
    {
      "type": "positive",
      "title": "New Product Launch",
      "description": "New Product Launch affecting company performance.",
      "impact": 0.057
    },
    {
      "type": "negative",
      "title": "Product Recall",
      "description": "Product Recall affecting company performance.",
      "impact": -0.093
    },
    {
      "type": "positive",
      "title": "Successful Marketing Campaign",
      "description": "Successful Marketing Campaign affecting company performance.",
      "impact": 0.099
    },
    {
      "type": "negative",
      "title": "Executive Scandal",
      "description": "Executive Scandal affecting company performance.",
      "impact": -0.083
    },
    {
      "type": "positive",
      "title": "Strategic Partnership Formed",
      "description": "Strategic Partnership Formed affecting company performance.",
      "impact": 0.033
    },
    {
      "type": "negative",
      "title": "Missed Earnings Target",
      "description": "Missed Earnings Target affecting company performance.",
      "impact": -0.037
    },
    {
      "type": "positive",
      "title": "Market Expansion Success",
      "description": "Market Expansion Success affecting company performance.",
      "impact": 0.074
    },
    {
      "type": "negative",
      "title": "Regulatory Fine",
      "description": "Regulatory Fine affecting company performance.",
      "impact": -0.079
    }
  ],
  "FDL": [
    {
      "type": "positive",
      "title": "Record Profits Announced",
      "description": "Record Profits Announced affecting company performance.",
      "impact": 0.043
    },
    {
      "type": "negative",
      "title": "Data Breach Incident",
      "description": "Data Breach Incident affecting company performance.",
      "impact": -0.092
    },
    {
      "type": "positive",
      "title": "New Product Launch",
      "description": "New Product Launch affecting company performance.",
      "impact": 0.039
    },
    {
      "type": "negative",
      "title": "Product Recall",
      "description": "Product Recall affecting company performance.",
      "impact": -0.031
    },
    {
      "type": "positive",
      "title": "Successful Marketing Campaign",
      "description": "Successful Marketing Campaign affecting company performance.",
      "impact": 0.078
    },
    {
      "type": "negative",
      "title": "Executive Scandal",
      "description": "Executive Scandal affecting company performance.",
      "impact": -0.08
    },
    {
      "type": "positive",
      "title": "Strategic Partnership Formed",
      "description": "Strategic Partnership Formed affecting company performance.",
      "impact": 0.06
    },
    {
      "type": "negative",
      "title": "Missed Earnings Target",
      "description": "Missed Earnings Target affecting company performance.",
      "impact": -0.042
    },
    {
      "type": "positive",
      "title": "Market Expansion Success",
      "description": "Market Expansion Success affecting company performance.",
      "impact": 0.04
    },
    {
      "type": "negative",
      "title": "Regulatory Fine",
      "description": "Regulatory Fine affecting company performance.",
      "impact": -0.097
    }
  ],
  "SPX": [
    {
      "type": "positive",
      "title": "Record Profits Announced",
      "description": "Record Profits Announced affecting company performance.",
      "impact": 0.075
    },
    {
      "type": "negative",
      "title": "Data Breach Incident",
      "description": "Data Breach Incident affecting company performance.",
      "impact": -0.034
    },
    {
      "type": "positive",
      "title": "New Product Launch",
      "description": "New Product Launch affecting company performance.",
      "impact": 0.08
    },
    {
      "type": "negative",
      "title": "Product Recall",
      "description": "Product Recall affecting company performance.",
      "impact": -0.038
    },
    {
      "type": "positive",
      "title": "Successful Marketing Campaign",
      "description": "Successful Marketing Campaign affecting company performance.",
      "impact": 0.057
    },
    {
      "type": "negative",
      "title": "Executive Scandal",
      "description": "Executive Scandal affecting company performance.",
      "impact": -0.059
    },
    {
      "type": "positive",
      "title": "Strategic Partnership Formed",
      "description": "Strategic Partnership Formed affecting company performance.",
      "impact": 0.037
    },
    {
      "type": "negative",
      "title": "Missed Earnings Target",
      "description": "Missed Earnings Target affecting company performance.",
      "impact": -0.091
    },
    {
      "type": "positive",
      "title": "Market Expansion Success",
      "description": "Market Expansion Success affecting company performance.",
      "impact": 0.072
    },
    {
      "type": "negative",
      "title": "Regulatory Fine",
      "description": "Regulatory Fine affecting company performance.",
      "impact": -0.072
    }
  ],
  "TRD": [
    {
      "type": "positive",
      "title": "Record Profits Announced",
      "description": "Record Profits Announced affecting company performance.",
      "impact": 0.098
    },
    {
      "type": "negative",
      "title": "Data Breach Incident",
      "description": "Data Breach Incident affecting company performance.",
      "impact": -0.057
    },
    {
      "type": "positive",
      "title": "New Product Launch",
      "description": "New Product Launch affecting company performance.",
      "impact": 0.074
    },
    {
      "type": "negative",
      "title": "Product Recall",
      "description": "Product Recall affecting company performance.",
      "impact": -0.072
    },
    {
      "type": "positive",
      "title": "Successful Marketing Campaign",
      "description": "Successful Marketing Campaign affecting company performance.",
      "impact": 0.045
    },
    {
      "type": "negative",
      "title": "Executive Scandal",
      "description": "Executive Scandal affecting company performance.",
      "impact": -0.08
    },
    {
      "type": "positive",
      "title": "Strategic Partnership Formed",
      "description": "Strategic Partnership Formed affecting company performance.",
      "impact": 0.043
    },
    {
      "type": "negative",
      "title": "Missed Earnings Target",
      "description": "Missed Earnings Target affecting company performance.",
      "impact": -0.058
    },
    {
      "type": "positive",
      "title": "Market Expansion Success",
      "description": "Market Expansion Success affecting company performance.",
      "impact": 0.072
    },
    {
      "type": "negative",
      "title": "Regulatory Fine",
      "description": "Regulatory Fine affecting company performance.",
      "impact": -0.094
    }
  ]
}