import { Event, Security } from "@/interfaces/securities";

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

export const events:Record<symbol | string, Event[]>= { // Updated type to allow string keys
  "BSM":
  [
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
  [Symbol("ECO")]: [
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
  [Symbol("AGX")]: [
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
  [Symbol("HLT")]: [
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
  [Symbol("NXC")]: [
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
  [Symbol("UMV")]: [
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
  [Symbol("GLX")]: [
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
  [Symbol("FDL")]: [
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
  [Symbol("SPX")]: [
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
  [Symbol("TRD")]: [
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
  ],
  // New Commodity Events
  [Symbol("XAUAUD")]: [ // Using string key for direct access
   { "type": "positive", "title": "Global Instability Rises", "description": "Increased geopolitical tensions drive demand for safe-haven assets.", "impact": 0.045 },
    { "type": "negative", "title": "Strong Dollar Index", "description": "A strengthening US dollar makes gold more expensive for foreign buyers.", "impact": -0.035 },
    { "type": "positive", "title": "Inflationary Pressures Surge", "description": "High inflation figures boost gold's appeal as a hedge.", "impact": 0.050 },
    { "type": "negative", "title": "Fed Rate Hike Signals", "description": "Hawkish signals from central banks dampen non-yielding asset attractiveness.", "impact": -0.040 },
    { "type": "positive", "title": "Increased Central Bank Buying", "description": "Central banks continue to add significant amounts of gold to reserves.", "impact": 0.038 },
    { "type": "negative", "title": "Record Gold Mining Output", "description": "Higher than expected global gold production floods the market.", "impact": -0.030 },
    { "type": "positive", "title": "Weakening Economic Data", "description": "Recession fears lead investors to seek traditional stores of value.", "impact": 0.042 },
    { "type": "negative", "title": "Crypto Market Boom", "description": "Renewed interest in cryptocurrencies diverts investment from gold.", "impact": -0.025 },
    { "type": "positive", "title": "New Industrial Gold Applications", "description": "Breakthroughs in tech lead to increased industrial demand for gold.", "impact": 0.028 },
    { "type": "negative", "title": "Investor Sentiment Shifts", "description": "Broad shift from safe-haven assets to riskier investments.", "impact": -0.033 }
  ],
  [Symbol("WTI")]: [ // Using string key for direct access
    { "type": "positive", "title": "OPEC+ Production Cuts", "description": "OPEC+ announces deeper than expected production cuts.", "impact": 0.080 },
    { "type": "negative", "title": "Global Recession Fears", "description": "Deepening global recession concerns drastically reduce oil demand.", "impact": -0.070 },
    { "type": "positive", "title": "Middle East Geopolitical Crisis", "description": "Major conflict in the Middle East threatens oil supply routes.", "impact": 0.090 },
    { "type": "negative", "title": "US Shale Production Surge", "description": "Record-breaking output from US shale oil fields.", "impact": -0.065 },
    { "type": "positive", "title": "Hurricane Season Impacts Gulf", "description": "Major hurricane activity disrupts oil production in the Gulf of Mexico.", "impact": 0.075 },
    { "type": "negative", "title": "Demand for EVs Soars", "description": "Accelerated adoption of electric vehicles globally.", "impact": -0.050 },
    { "type": "positive", "title": "Unexpected Refinery Fire", "description": "A large refinery fire reduces global refining capacity.", "impact": 0.068 },
    { "type": "negative", "title": "Release from Strategic Reserves", "description": "Major countries release oil from their strategic petroleum reserves.", "impact": -0.045 },
    { "type": "positive", "title": "China's Economic Reopening", "description": "Rapid post-pandemic economic recovery in China boosts energy demand.", "impact": 0.085 },
    { "type": "negative", "title": "New Oil Discoveries", "description": "Significant new oil reserves discovered and announced.", "impact": -0.058 }
  ],
  [Symbol("AGAUD")]: [ // Silver
    { "type": "positive", "title": "Industrial Demand Spike", "description": "Surge in demand for silver in solar panels and electronics.", "impact": 0.060 },
    { "type": "negative", "title": "Mining Production Boost", "description": "New silver mines come online, increasing global supply.", "impact": -0.040 },
    { "type": "positive", "title": "Green Energy Sector Growth", "description": "Massive investment in renewable energy drives silver usage.", "impact": 0.055 },
    { "type": "negative", "title": "Economic Downturn Concerns", "description": "Industrial slowdown reduces demand for silver in manufacturing.", "impact": -0.045 },
    { "type": "positive", "title": "Gold-Silver Ratio Favors Silver", "description": "Historical ratio indicates silver is undervalued relative to gold.", "impact": 0.052 },
    { "type": "negative", "title": "Technological Replacement", "description": "New materials reduce the need for silver in some industrial applications.", "impact": -0.030 },
    { "type": "positive", "title": "Investment Demand Rises", "description": "Retail and institutional investors increase silver holdings.", "impact": 0.038 },
    { "type": "negative", "title": "Recycling Rates Improve", "description": "More efficient recycling of electronics reduces need for new silver.", "impact": -0.025 },
    { "type": "positive", "title": "Currency Devaluation Fears", "description": "Concerns over fiat currency value push investors to precious metals.", "impact": 0.048 },
    { "type": "negative", "title": "Global Supply Chain Recovery", "description": "Smooth supply chains reduce commodity price volatility.", "impact": -0.033 }
  ],
  [Symbol("COB")]: [ // Corn
    { "type": "positive", "title": "Midwest Drought Escalates", "description": "Severe drought conditions in major corn-producing regions.", "impact": 0.085 },
    { "type": "negative", "title": "Record Harvest Forecast", "description": "Ideal weather conditions lead to projections of a bumper corn crop.", "impact": -0.060 },
    { "type": "positive", "title": "Ethanol Demand Surges", "description": "Government mandates or high oil prices boost ethanol production.", "impact": 0.070 },
    { "type": "negative", "title": "Global Feed Demand Falls", "description": "Decline in livestock populations or change in feed practices reduces demand.", "impact": -0.055 },
    { "type": "positive", "title": "Export Restrictions Imposed", "description": "Major exporting country limits corn sales due to domestic needs.", "impact": 0.078 },
    { "type": "negative", "title": "Pest Outbreak Contained", "description": "Successful efforts to control a widespread corn pest infestation.", "impact": -0.040 },
    { "type": "positive", "title": "Unexpected Cold Snap", "description": "Late-season frost damages immature corn crops.", "impact": 0.065 },
    { "type": "negative", "title": "Technological Advancements", "description": "New drought-resistant or high-yield corn varieties introduced.", "impact": -0.035 },
    { "type": "positive", "title": "Strong Biofuel Mandates", "description": "Increased government support for corn-based biofuels.", "impact": 0.062 },
    { "type": "negative", "title": "Global Trade Dispute Eases", "description": "Resolution of trade dispute allows smoother corn exports.", "impact": -0.048 }
  ],
  "WHB": [ // Wheat
    { "type": "positive", "title": "Black Sea Supply Disruptions", "description": "Conflict or political tensions disrupt wheat exports from key regions.", "impact": 0.090 },
    { "type": "negative", "title": "Abundant Global Harvest", "description": "Favorable weather across major growing regions leads to surplus.", "impact": -0.065 },
    { "type": "positive", "title": "Drought in Major Exporting Country", "description": "Severe drought in Australia or Canada impacts wheat yield.", "impact": 0.080 },
    { "type": "negative", "title": "Reduced Import Tariffs", "description": "Major importing nations reduce tariffs on wheat, increasing supply.", "impact": -0.050 },
    { "type": "positive", "title": "Increased Food Aid Demand", "description": "Global humanitarian crises drive up demand for wheat for aid programs.", "impact": 0.075 },
    { "type": "negative", "title": "Disease Outbreak Contained", "description": "Successful eradication of a crop disease before widespread damage.", "impact": -0.040 },
    { "type": "positive", "title": "Rising Global Population", "description": "Long-term increase in world population drives fundamental food demand.", "impact": 0.068 },
    { "type": "negative", "title": "Shift in Dietary Preferences", "description": "Global trend away from wheat-based products.", "impact": -0.030 },
    { "type": "positive", "title": "Unexpected Export Halt", "description": "A large wheat exporter imposes a sudden ban on exports.", "impact": 0.082 },
    { "type": "negative", "title": "Improved Logistics and Storage", "description": "Enhanced global infrastructure reduces spoilage and waste.", "impact": -0.042 }
  ],
  "Sg": [ // Sugar
    { "type": "positive", "title": "Major Crop Failure in Brazil", "description": "Adverse weather severely impacts sugarcane harvest in Brazil.", "impact": 0.075 },
    { "type": "negative", "title": "Increased Indian Sugar Exports", "description": "India announces a significant increase in sugar export quotas.", "impact": -0.055 },
    { "type": "positive", "title": "Global Demand for Sweeteners Rises", "description": "Unexpected surge in demand for sugar-based products worldwide.", "impact": 0.068 },
    { "type": "negative", "title": "Health Campaigns Reduce Consumption", "description": "Successful public health initiatives reduce sugar intake.", "impact": -0.048 },
    { "type": "positive", "title": "Ethanol Production Shift", "description": "More sugarcane diverted to ethanol production due to energy prices.", "impact": 0.072 },
    { "type": "negative", "title": "New Artificial Sweetener Dominates", "description": "A new, cheap, and widely adopted artificial sweetener emerges.", "impact": -0.050 },
    { "type": "positive", "title": "Logistics Issues in Key Ports", "description": "Delays and bottlenecks at major sugar exporting ports.", "impact": 0.060 },
    { "type": "negative", "title": "Favorable Weather for Beet Sugar", "description": "Excellent growing conditions for sugar beet in Europe and North America.", "impact": -0.035 },
    { "type": "positive", "title": "Currency Devaluation in Exporting Nation", "description": "Currency weakness in a major sugar exporter makes exports cheaper.", "impact": 0.055 },
    { "type": "negative", "title": "Global Stockpile Increase", "description": "Reports indicate a build-up of sugar reserves worldwide.", "impact": -0.040 }
  ]
}