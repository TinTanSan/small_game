import { Event, Security } from "@/interfaces/securities";

export const companies:Array<Security> = [
  {
    ticker: "BSM",
    name: "BuzzSpark Media",
    securityType: "Equity",
    industry: "Entertainment",
    riskTier: "High",
    priceHistory:[85.0,180,200,400,200,100,10,1,0.9,0.1,5,11],
    recentEvents: []
  },
  {
    ticker: "GNX",
    name: "GreenNext Energy",
    securityType: "Equity",
    industry: "Renewable Energy",
    riskTier: "High",
    priceHistory:[122.5],
    recentEvents: []
  },
  {
    ticker: "HHC",
    name: "HealthHive Corp",
    securityType: "Equity",
    industry: "Healthcare",
    riskTier: "Low",
    priceHistory:[98.3],
    recentEvents: []
  },
  {
    ticker: "FNS",
    name: "FinSight Analytics",
    securityType: "Equity",
    industry: "Finance / AI",
    riskTier: "High",
    priceHistory:[110.0],
    recentEvents: []
  },
  {
    ticker: "URB",
    name: "UrbanGrid Development",
    securityType: "Equity",
    industry: "Construction / Real Estate",
    riskTier: "Low",
    priceHistory:[75.6],
    recentEvents: []
  },
  {
    ticker: "STR",
    name: "Streamra Networks",
    securityType: "Equity",
    industry: "Technology / Cloud",
    riskTier: "High",
    priceHistory:[142.0],
    recentEvents: []
  },
  {
    ticker: "AGX",
    name: "AgriX Foods",
    securityType: "Equity",
    industry: "Agriculture / Consumer Goods",
    riskTier: "Low",
    priceHistory:[65.4],
    recentEvents: []
  },
  {
    ticker: "NVC",
    name: "NovaCore Systems",
    securityType: "Equity",
    industry: "Semiconductors",
    riskTier: "High",
    priceHistory:[1000.1],
    recentEvents: []
  },
  {
    ticker: "TRN",
    name: "Tranvia Logistics",
    securityType: "Equity",
    industry: "Transport / Logistics",
    riskTier: "Low",
    priceHistory:[54.2],
    recentEvents: []
  },
  {
    ticker: "GXM",
    name: "GalaxyMart Retail",
    securityType: "Equity",
    industry: "Retail",
    riskTier: "Low",
    priceHistory:[49.5],
    recentEvents: []
  }
]

export const commodities: Array<Security>=[
    {
        ticker: "XAUAUD",
        name: "Gold (troy ounce)",
        securityType:"Commodity",
        riskTier :  "High",
        industry: "Precious Metal",
        priceHistory:[2000,2100,2200,2500,3000,4000,3500,3400,3300,3800, 3000, 2000],
        recentEvents: []
    },
    {
        ticker:"AGAUD",
        name: "Silver (Tonne)",
        securityType:"Commodity",
        riskTier:"High",
        industry:"Precious Metal",
        priceHistory:[200],
        recentEvents:[]
    },
    {
        ticker:"CUAUD",
        name: "Copper (Tonne)",
        securityType:"Commodity",
        riskTier:"High",
        industry:"Precious Metal",
        priceHistory:[100],
        recentEvents:[]
    },
    {
        ticker:"WTI",
        name:"Brent Crude Oil (barrels)",
        securityType:"Commodity",
        riskTier:"High",
        industry:"Essential Energy",
        priceHistory:[75],
        recentEvents:[]
    },
    {
        ticker:"COB",
        name:"Corn (Bushells)",
        securityType:"Commodity",
        riskTier:"High",
        industry:"Essential Energy",
        priceHistory:[400],
        recentEvents:[]
    },{
        ticker:"WHB",
        name:"Wheat (Bushells)",
        securityType:"Commodity",
        riskTier:"High",
        industry:"Essential Energy",
        priceHistory:[500],
        recentEvents:[]
    },
    {
        ticker:"Sg",
        name:"Sugar ($/pound)",
        securityType:"Commodity",
        riskTier:"High",
        industry:"Essential Energy",
        priceHistory:[12],
        recentEvents:[]
    },
]

export const events: Record<string, Event[]> = {
  "BSM": [ // BuzzSpark Media
    {
      "type": "positive",
      "title": "Blockbuster Content Deal Signed",
      "description": "BuzzSpark Media secures an exclusive deal for highly anticipated original content, expected to drive massive subscriber growth.",
      "impact": 0.12
    },
    {
      "type": "negative",
      "title": "Social Media Platform Backlash",
      "description": "A major content release by BuzzSpark Media faces severe negative reception and controversy on social media, impacting brand reputation.",
      "impact": -0.2
    },
    {
      "type": "positive",
      "title": "Surge in International Subscribers",
      "description": "Unexpectedly strong growth in new international subscribers boosts BuzzSpark Media's global market penetration.",
      "impact": 0.06
    },
    {
      "type": "negative",
      "title": "Key Talent Leaves for Competitor",
      "description": "A popular creator or showrunner central to BuzzSpark Media's content strategy departs for a rival platform.",
      "impact": -0.05
    },
    {
      "type": "positive",
      "title": "Successful Ad-Tier Launch Exceeds Expectations",
      "description": "The new ad-supported subscription tier performs better than projected, adding a significant revenue stream for BuzzSpark Media.",
      "impact": 0.07
    },
    {
      "type": "negative",
      "title": "Major Cyberattack on User Data",
      "description": "BuzzSpark Media confirms a significant cyberattack resulting in the exposure of sensitive user data, leading to trust issues and potential fines.",
      "impact": -0.15
    },
    {
      "type": "positive",
      "title": "Award-Winning Series Renewed",
      "description": "A critically acclaimed and popular series produced by BuzzSpark Media is renewed for multiple seasons, ensuring continued engagement.",
      "impact": 0.1
    },
    {
      "type": "negative",
      "title": "Increased Competition in Streaming Market",
      "description": "Several new, well-funded streaming services enter the market, intensifying competition for BuzzSpark Media's subscriber base.",
      "impact": -0.01
    },
    {
      "type": "positive",
      "title": "Strategic Partnership with Telecom Giant",
      "description": "BuzzSpark Media partners with a major telecom provider to offer bundled services, expanding its reach to millions of new households.",
      "impact": 0.25
    },
    {
      "type": "negative",
      "title": "Unexpected Drop in Quarterly Ad Revenue",
      "description": "BuzzSpark Media reports a surprising decline in advertising revenue, attributed to a softer ad market and economic uncertainty.",
      "impact": -0.08
    }
  ],

  "GNX": [ // GreenNext Energy
    {
      "type": "positive",
      "title": "Major Government Contract for Renewable Project",
      "description": "GreenNext Energy secures a large contract to develop a new national-scale solar farm, boosting future revenue.",
      "impact": 0.10
    },
    {
      "type": "negative",
      "title": "Project Delays Due to Environmental Protests",
      "description": "Construction of a key GreenNext Energy wind farm is halted due to prolonged environmental protests and legal challenges.",
      "impact": -0.08
    },
    {
      "type": "positive",
      "title": "Breakthrough in Green Hydrogen Production",
      "description": "GreenNext Energy announces a new highly efficient method for producing green hydrogen, opening up a lucrative new market segment.",
      "impact": 0.12
    },
    {
      "type": "negative",
      "title": "Regulatory Hurdles for New Technology",
      "description": "A new GreenNext Energy clean energy technology faces unexpected and strict regulatory approval processes, delaying deployment.",
      "impact": -0.07
    },
    {
      "type": "positive",
      "title": "Exceeds Renewable Energy Generation Targets",
      "description": "GreenNext Energy surpasses its annual renewable energy generation targets, driven by optimized operations and favorable weather.",
      "impact": 0.06
    },
    {
      "type": "negative",
      "title": "Increased Raw Material Costs for Solar Panels",
      "description": "Global shortages and increased demand lead to a significant rise in the cost of raw materials crucial for GreenNext Energy's solar projects.",
      "impact": -0.09
    },
    {
      "type": "positive",
      "title": "Successful Launch of Grid-Scale Battery Storage",
      "description": "GreenNext Energy successfully commissions a massive grid-scale battery storage facility, enhancing grid stability and revenue opportunities.",
      "impact": 0.08
    },
    {
      "type": "negative",
      "title": "Government Shifts Away from Green Subsidies",
      "description": "A new government administration announces a reduction or elimination of subsidies for renewable energy projects, impacting profitability.",
      "impact": -0.10
    },
    {
      "type": "positive",
      "title": "Strategic Partnership for International Expansion",
      "description": "GreenNext Energy forms a partnership with a global infrastructure firm to accelerate its expansion into lucrative international renewable markets.",
      "impact": 0.07
    },
    {
      "type": "negative",
      "title": "Unexpected Equipment Failure at Major Wind Farm",
      "description": "Multiple turbines at a large GreenNext Energy wind farm experience concurrent major failures, leading to significant repair costs and lost generation.",
      "impact": -0.06
    }
  ],

  "HHC": [ // HealthHive Corp
    {
      "type": "positive",
      "title": "Innovative Drug Receives Fast-Track Approval",
      "description": "HealthHive Corp's new drug for a rare disease receives expedited regulatory approval due to its groundbreaking potential.",
      "impact": 0.11
    },
    {
      "type": "negative",
      "title": "Clinical Trial Fails to Meet Endpoints",
      "description": "A critical Phase 3 clinical trial for HealthHive Corp's flagship drug candidate fails to achieve its primary objectives.",
      "impact": -0.12
    },
    {
      "type": "positive",
      "title": "Acquisition of Promising Biotech Startup",
      "description": "HealthHive Corp acquires a small but innovative biotech firm with a pipeline of valuable early-stage therapies.",
      "impact": 0.08
    },
    {
      "type": "negative",
      "title": "Major Lawsuit Over Product Side Effects",
      "description": "HealthHive Corp faces a significant class-action lawsuit alleging severe adverse effects from one of its widely prescribed medications.",
      "impact": -0.10
    },
    {
      "type": "positive",
      "title": "Partnership with Leading Research University",
      "description": "HealthHive Corp announces a long-term research collaboration with a prestigious university, enhancing its R&D capabilities.",
      "impact": 0.06
    },
    {
      "type": "negative",
      "title": "Regulatory Recall of Contaminated Medical Device",
      "description": "A widely used medical device manufactured by HealthHive Corp is recalled due to contamination issues, impacting patient safety and trust.",
      "impact": -0.09
    },
    {
      "type": "positive",
      "title": "Expansion into New Global Healthcare Markets",
      "description": "HealthHive Corp successfully enters several new high-growth international healthcare markets, boosting its customer base.",
      "impact": 0.07
    },
    {
      "type": "negative",
      "title": "Government Imposes Strict Price Controls",
      "description": "New government legislation introduces stringent price controls on a range of pharmaceutical products, directly impacting HealthHive Corp's revenue.",
      "impact": -0.07
    },
    {
      "type": "positive",
      "title": "Positive Analyst Rating Upgrade",
      "description": "A leading healthcare analyst upgrades HealthHive Corp's stock rating, citing strong financial outlook and pipeline strength.",
      "impact": 0.05
    },
    {
      "type": "negative",
      "title": "Cybersecurity Breach Exposes Patient Data",
      "description": "HealthHive Corp experiences a major cybersecurity incident that compromises sensitive patient information, leading to regulatory investigations.",
      "impact": -0.08
    }
  ],

  "FNS": [ // FinSight Analytics
    {
      "type": "positive",
      "title": "AI Platform Wins Industry Award",
      "description": "FinSight Analytics' proprietary AI-driven financial analysis platform receives a prestigious industry award, enhancing its reputation.",
      "impact": 0.08
    },
    {
      "type": "negative",
      "title": "Algorithm Flaw Discovered in Flagship Product",
      "description": "A critical flaw is found in FinSight Analytics' primary AI algorithm, leading to inaccurate predictions and client dissatisfaction.",
      "impact": -0.10
    },
    {
      "type": "positive",
      "title": "Major Partnership with Tier-1 Bank",
      "description": "FinSight Analytics secures a landmark multi-year contract to provide its analytics services to a top-tier global investment bank.",
      "impact": 0.11
    },
    {
      "type": "negative",
      "title": "Key AI Researchers Depart for Startup",
      "description": "Several lead AI researchers and developers from FinSight Analytics resign to form a competing startup, raising concerns about future innovation.",
      "impact": -0.07
    },
    {
      "type": "positive",
      "title": "Exceeds Quarterly Subscription Growth Targets",
      "description": "FinSight Analytics reports a significant increase in new paid subscriptions, surpassing analyst expectations for growth.",
      "impact": 0.07
    },
    {
      "type": "negative",
      "title": "Tightened Regulations on AI in Finance",
      "description": "New stringent government regulations are introduced regarding the use of AI in financial markets, increasing compliance costs for FinSight Analytics.",
      "impact": -0.08
    },
    {
      "type": "positive",
      "title": "Acquisition of Data Aggregation Firm",
      "description": "FinSight Analytics acquires a specialized data aggregation company, significantly expanding its data sources and analytical depth.",
      "impact": 0.06
    },
    {
      "type": "negative",
      "title": "Cybersecurity Breach of Client Financial Data",
      "description": "FinSight Analytics confirms a data breach involving sensitive client financial information, leading to legal and reputational damage.",
      "impact": -0.09
    },
    {
      "type": "positive",
      "title": "Successful Expansion into Wealth Management Sector",
      "description": "FinSight Analytics' new tailored solutions for wealth management firms gain rapid traction, opening a large new client segment.",
      "impact": 0.09
    },
    {
      "type": "negative",
      "title": "Major Competitor Offers Free AI Tools",
      "description": "A well-funded competitor begins offering basic AI-driven financial analysis tools for free, putting pressure on FinSight Analytics' pricing model.",
      "impact": -0.06
    }
  ],

  "URB": [ // UrbanGrid Development
    {
      "type": "positive",
      "title": "Major City Redevelopment Contract Awarded",
      "description": "UrbanGrid Development wins a prestigious contract for a large-scale urban redevelopment project, promising significant long-term revenue.",
      "impact": 0.10
    },
    {
      "type": "negative",
      "title": "Significant Cost Overruns on Flagship Project",
      "description": "UrbanGrid Development announces substantial unexpected cost overruns and delays on its most prominent real estate project.",
      "impact": -0.09
    },
    {
      "type": "positive",
      "title": "Successful Launch of Sustainable Housing Initiative",
      "description": "UrbanGrid Development's new line of eco-friendly, affordable housing units sells out quickly, demonstrating strong market demand.",
      "impact": 0.07
    },
    {
      "type": "negative",
      "title": "Interest Rate Hike Deters Property Investment",
      "description": "A sharp rise in interest rates makes borrowing more expensive, slowing down new property development and real estate investment for UrbanGrid.",
      "impact": -0.08
    },
    {
      "type": "positive",
      "title": "Government Infrastructure Spending Boost",
      "description": "New government legislation allocates massive funding for infrastructure projects, creating numerous opportunities for UrbanGrid Development.",
      "impact": 0.08
    },
    {
      "type": "negative",
      "title": "Major Supply Chain Issues for Construction Materials",
      "description": "Widespread shortages and price spikes for essential construction materials (e.g., steel, timber) severely impact UrbanGrid Development's project timelines and budgets.",
      "impact": -0.07
    },
    {
      "type": "positive",
      "title": "Acquisition of Leading Smart City Technology Firm",
      "description": "UrbanGrid Development acquires a company specializing in smart city infrastructure, integrating cutting-edge technology into its projects.",
      "impact": 0.06
    },
    {
      "type": "negative",
      "title": "New Zoning Regulations Hinder Development",
      "description": "Local governments introduce stricter zoning laws and building permits, significantly complicating and delaying UrbanGrid Development's new projects.",
      "impact": -0.06
    },
    {
      "type": "positive",
      "title": "Strong Rental Income Growth from Commercial Properties",
      "description": "UrbanGrid Development reports robust growth in rental income from its portfolio of commercial real estate, indicating a healthy market.",
      "impact": 0.05
    },
    {
      "type": "negative",
      "title": "Building Collapse Incident Investigation",
      "description": "One of UrbanGrid Development's recently completed structures experiences a partial collapse, triggering a full investigation and raising safety concerns.",
      "impact": -0.11
    }
  ],

  "STR": [ // Streamra Networks
    {
      "type": "positive",
      "title": "Major Cloud Security Contract Win",
      "description": "Streamra Networks secures a lucrative contract with a Fortune 500 company for its advanced cloud security services, boosting revenue.",
      "impact": 0.09
    },
    {
      "type": "negative",
      "title": "Widespread Cloud Service Outage",
      "description": "Streamra Networks experiences a significant and prolonged outage across its core cloud services, disrupting numerous client operations.",
      "impact": -0.10
    },
    {
      "type": "positive",
      "title": "Breakthrough in Edge Computing Technology",
      "description": "Streamra Networks announces a revolutionary advancement in edge computing, offering ultra-low latency solutions for new applications.",
      "impact": 0.11
    },
    {
      "type": "negative",
      "title": "Competitor Launches Aggressive Pricing Strategy",
      "description": "A major competitor in the cloud computing space introduces significantly lower prices, putting pressure on Streamra Networks' margins.",
      "impact": -0.07
    },
    {
      "type": "positive",
      "title": "Exceeds Quarterly Data Center Expansion Goals",
      "description": "Streamra Networks rapidly expands its global data center footprint, enabling it to serve more clients and increase capacity.",
      "impact": 0.07
    },
    {
      "type": "negative",
      "title": "Regulatory Fine for Data Sovereignty Violation",
      "description": "Streamra Networks receives a substantial fine for failing to comply with data sovereignty laws in a key operating region.",
      "impact": -0.08
    },
    {
      "type": "positive",
      "title": "Strategic Partnership with Major Software Vendor",
      "description": "Streamra Networks partners with a leading enterprise software provider to offer integrated cloud solutions, expanding its ecosystem.",
      "impact": 0.06
    },
    {
      "type": "negative",
      "title": "Key Infrastructure Engineer Team Resigns",
      "description": "A large portion of Streamra Networks' critical infrastructure engineering team resigns, raising concerns about operational stability.",
      "impact": -0.06
    },
    {
      "type": "positive",
      "title": "Rapid Adoption of New Serverless Platform",
      "description": "Streamra Networks' new serverless computing platform sees rapid adoption by developers, indicating strong market fit.",
      "impact": 0.08
    },
    {
      "type": "negative",
      "title": "Cybersecurity Vulnerability Exposed",
      "description": "A critical cybersecurity vulnerability is publicly disclosed in one of Streamra Networks' core products, requiring immediate patching and remediation.",
      "impact": -0.09
    }
  ],

  "AGX": [ // AgriX Foods
    {
      "type": "positive",
      "title": "Record Quarterly Sales of Organic Products",
      "description": "AgriX Foods reports unprecedented sales figures for its organic and sustainable food lines, capitalizing on consumer trends.",
      "impact": 0.08
    },
    {
      "type": "negative",
      "title": "Major Product Recall Due to Contamination",
      "description": "AgriX Foods initiates a widespread recall of a popular food product due to a confirmed contamination issue, leading to reputational damage and costs.",
      "impact": -0.10
    },
    {
      "type": "positive",
      "title": "Successful Launch of New Plant-Based Line",
      "description": "AgriX Foods' new range of plant-based meat alternatives receives rave reviews and strong initial sales, tapping into a growing market.",
      "impact": 0.07
    },
    {
      "type": "negative",
      "title": "Severe Crop Damage from Unexpected Weather",
      "description": "Unforeseen extreme weather events (e.g., floods, unseasonal frost) destroy a significant portion of AgriX Foods' agricultural yields.",
      "impact": -0.09
    },
    {
      "type": "positive",
      "title": "Strategic Acquisition of Regional Farm Network",
      "description": "AgriX Foods acquires a large network of local farms, strengthening its supply chain and commitment to local sourcing.",
      "impact": 0.06
    },
    {
      "type": "negative",
      "title": "Rising Commodity Prices Impact Margins",
      "description": "Unexpected increases in the price of key agricultural commodities (e.g., grains, sugar) significantly squeeze AgriX Foods' production margins.",
      "impact": -0.08
    },
    {
      "type": "positive",
      "title": "Expansion into New Retail Chains",
      "description": "AgriX Foods secures distribution agreements with several major national and international retail chains, expanding its market reach.",
      "impact": 0.05
    },
    {
      "type": "negative",
      "title": "Negative Report on Food Safety Practices",
      "description": "A damning investigative report exposes questionable food safety or labor practices within AgriX Foods' supply chain, causing consumer backlash.",
      "impact": -0.11
    },
    {
      "type": "positive",
      "title": "Government Grant for Sustainable Farming Research",
      "description": "AgriX Foods receives a substantial government grant to fund research and development in sustainable agricultural practices.",
      "impact": 0.04
    },
    {
      "type": "negative",
      "title": "Increased Tariffs on Key Export Markets",
      "description": "New trade tariffs are imposed on food products in key export markets, making AgriX Foods' products more expensive and less competitive abroad.",
      "impact": -0.06
    }
  ],

  "NVC": [ // NovaCore Systems
    {
      "type": "positive",
      "title": "Breakthrough in Next-Gen Chip Architecture",
      "description": "NovaCore Systems unveils a revolutionary new chip architecture, promising massive performance gains and efficiency, shaking the industry.",
      "impact": 0.12
    },
    {
      "type": "negative",
      "title": "Major Manufacturing Defect Discovered",
      "description": "A critical defect is found in a large batch of NovaCore Systems' flagship semiconductor chips, leading to widespread recalls and losses.",
      "impact": -0.15
    },
    {
      "type": "positive",
      "title": "Secures Exclusive Contract with Tech Giant",
      "description": "NovaCore Systems signs an exclusive multi-year deal to supply its advanced processors to a leading global technology company.",
      "impact": 0.10
    },
    {
      "type": "negative",
      "title": "Intense Global Semiconductor Shortage Worsens",
      "description": "The ongoing global chip shortage intensifies, severely impacting NovaCore Systems' ability to meet demand and fulfill orders.",
      "impact": -0.09
    },
    {
      "type": "positive",
      "title": "Successful Diversification into AI Accelerators",
      "description": "NovaCore Systems' new line of AI-specific accelerator chips sees unexpected rapid adoption, opening a major growth vector.",
      "impact": 0.08
    },
    {
      "type": "negative",
      "title": "Key Foundry Partner Experiences Fire",
      "description": "A major fire at one of NovaCore Systems' critical fabrication plant partners disrupts chip production for months.",
      "impact": -0.11
    },
    {
      "type": "positive",
      "title": "Acquisition of Advanced Materials Science Firm",
      "description": "NovaCore Systems acquires a cutting-edge materials science company, gaining a competitive edge in semiconductor manufacturing.",
      "impact": 0.07
    },
    {
      "type": "negative",
      "title": "Aggressive New Competitor Emerges",
      "description": "A well-funded and innovative startup enters the semiconductor market with highly competitive products, challenging NovaCore Systems' dominance.",
      "impact": -0.08
    },
    {
      "type": "positive",
      "title": "Record Quarterly Shipments Exceed Forecasts",
      "description": "NovaCore Systems reports record-breaking chip shipments, indicating robust demand across all its market segments.",
      "impact": 0.06
    },
    {
      "type": "negative",
      "title": "New Export Controls on Semiconductor Technology",
      "description": "Strict new government export controls are placed on advanced semiconductor technology, limiting NovaCore Systems' ability to sell to key overseas markets.",
      "impact": -0.09
    }
  ],

  "TRN": [ // Tranvia Logistics
    {
      "type": "positive",
      "title": "Major Contract Win for Global Shipping",
      "description": "Tranvia Logistics secures a significant long-term contract with a multinational retailer for global freight and logistics services.",
      "impact": 0.09
    },
    {
      "type": "negative",
      "title": "Widespread Labor Strikes Impact Operations",
      "description": "Tranvia Logistics faces extensive labor strikes across its key hubs, severely disrupting transportation and delivery schedules.",
      "impact": -0.08
    },
    {
      "type": "positive",
      "title": "Successful Rollout of AI-Powered Route Optimization",
      "description": "Tranvia Logistics implements a new AI-driven route optimization system, leading to significant fuel savings and efficiency gains.",
      "impact": 0.07
    },
    {
      "type": "negative",
      "title": "Fuel Price Spikes Impact Profitability",
      "description": "Unexpected and sustained increases in global fuel prices drastically raise operating costs for Tranvia Logistics, squeezing margins.",
      "impact": -0.10
    },
    {
      "type": "positive",
      "title": "Acquisition of Key Regional Warehousing Network",
      "description": "Tranvia Logistics acquires a strategic network of warehouses in key distribution regions, enhancing its storage and fulfillment capabilities.",
      "impact": 0.06
    },
    {
      "type": "negative",
      "title": "Major Port Closures Due to Storms",
      "description": "Several major international ports crucial to Tranvia Logistics' operations are closed due to severe weather, causing significant delays and backlogs.",
      "impact": -0.07
    },
    {
      "type": "positive",
      "title": "Expansion into Last-Mile Delivery Market",
      "description": "Tranvia Logistics successfully launches a new last-mile delivery service, capturing a growing segment of the e-commerce market.",
      "impact": 0.05
    },
    {
      "type": "negative",
      "title": "Regulatory Fine for Emission Violations",
      "description": "Tranvia Logistics is hit with a substantial fine for failing to meet new environmental emission standards for its vehicle fleet.",
      "impact": -0.06
    },
    {
      "type": "positive",
      "title": "Launch of Automated Logistics Hub",
      "description": "Tranvia Logistics opens a fully automated logistics hub, drastically increasing processing speed and reducing labor costs.",
      "impact": 0.08
    },
    {
      "type": "negative",
      "title": "Increased Competition from Tech-Driven Logistics Startups",
      "description": "A wave of agile, tech-focused logistics startups enters the market, offering disruptive services and threatening Tranvia Logistics' established business.",
      "impact": -0.05
    }
  ],

  "GXM": [ // GalaxyMart Retail
    {
      "type": "positive",
      "title": "Record Holiday Season Sales",
      "description": "GalaxyMart Retail reports unprecedented sales figures during the holiday season, exceeding all previous records and forecasts.",
      "impact": 0.09
    },
    {
      "type": "negative",
      "title": "Major Data Breach of Customer Information",
      "description": "GalaxyMart Retail confirms a large-scale data breach impacting millions of customer credit card details, leading to widespread consumer distrust.",
      "impact": -0.10
    },
    {
      "type": "positive",
      "title": "Successful E-commerce Platform Relaunch",
      "description": "GalaxyMart Retail's revamped online shopping platform leads to a significant increase in online sales and customer engagement.",
      "impact": 0.07
    },
    {
      "type": "negative",
      "title": "Negative Report on Labor Practices",
      "description": "An investigative report exposes unethical labor practices within GalaxyMart Retail's supply chain, sparking boycotts and public outrage.",
      "impact": -0.11
    },
    {
      "type": "positive",
      "title": "Expansion into New Underserved Markets",
      "description": "GalaxyMart Retail successfully opens new stores in previously underserved urban areas, capturing new customer segments.",
      "impact": 0.06
    },
    {
      "type": "negative",
      "title": "Aggressive New Competitor Enters Market",
      "description": "A well-funded, discount-focused retail chain enters GalaxyMart Retail's primary markets, initiating a price war.",
      "impact": -0.08
    },
    {
      "type": "positive",
      "title": "Strategic Partnership with Popular Brand",
      "description": "GalaxyMart Retail forms an exclusive partnership with a highly popular brand, offering unique products that drive foot traffic and online sales.",
      "impact": 0.05
    },
    {
      "type": "negative",
      "title": "Significant Drop in Consumer Spending",
      "description": "A broader economic downturn leads to a sharp decline in discretionary consumer spending, directly impacting GalaxyMart Retail's sales.",
      "impact": -0.09
    },
    {
      "type": "positive",
      "title": "Innovative Customer Loyalty Program Launch",
      "description": "GalaxyMart Retail's new personalized loyalty program sees massive enrollment and engagement, boosting repeat purchases.",
      "impact": 0.04
    },
    {
      "type": "negative",
      "title": "Supply Chain Bottlenecks Cause Empty Shelves",
      "description": "Persistent global supply chain issues lead to inventory shortages at GalaxyMart Retail stores, resulting in lost sales and customer frustration.",
      "impact": -0.07
    }
  ],

  "XAUAUD": [ // Gold (troy ounce)
    {
      "type": "positive",
      "title": "Escalation of Geopolitical Instability",
      "description": "Increased global political tensions and conflicts drive investors towards safe-haven assets like gold.",
      "impact": 0.07
    },
    {
      "type": "negative",
      "title": "Strong AUD Performance",
      "description": "A strengthening Australian Dollar makes AUD-denominated commodities like gold more expensive for international buyers, decreasing demand.",
      "impact": -0.06
    },
    {
      "type": "positive",
      "title": "Central Bank Interest Rate Cuts Expected",
      "description": "Anticipation of lower interest rates makes non-yielding assets like gold more attractive compared to bonds.",
      "impact": 0.06
    },
    {
      "type": "negative",
      "title": "Discovery of Large New Gold Deposits",
      "description": "New geological surveys indicate the presence of significant, economically viable gold deposits, potentially increasing future supply.",
      "impact": -0.08
    },
    {
      "type": "positive",
      "title": "Significant Inflationary Pressures Emerge",
      "description": "Rising inflation concerns lead investors to gold as a hedge against the erosion of purchasing power.",
      "impact": 0.08
    },
    {
      "type": "negative",
      "title": "Global Economic Slowdown Forecast",
      "description": "Pessimistic global economic outlooks reduce expectations for industrial activity, curbing demand for gold's industrial applications.",
      "impact": -0.09
    },
    {
      "type": "positive",
      "title": "Increased Global Demand for Luxury Goods",
      "description": "A surge in discretionary spending and demand for high-end jewelry boosts gold's consumption in the luxury market.",
      "impact": 0.05
    },
    {
      "type": "negative",
      "title": "Major Central Bank Rate Hike",
      "description": "An aggressive interest rate hike by a major central bank increases the opportunity cost of holding non-yielding assets like gold.",
      "impact": -0.07
    },
    {
      "type": "positive",
      "title": "Central Bank Gold Buying Surge",
      "description": "Several central banks announce significant increases in their gold reserves, signaling a move away from traditional currencies.",
      "impact": 0.09
    },
    {
      "type": "negative",
      "title": "Calm in Global Political Landscape",
      "description": "De-escalation of international tensions and political stability reduce the appeal of safe-haven assets like gold.",
      "impact": -0.05
    }
  ],

  "AGAUD": [ // Silver (Tonne)
    {
      "type": "positive",
      "title": "Surge in Industrial Demand for Silver",
      "description": "New technological advancements, particularly in solar panels and electronics, dramatically increase the industrial need for silver.",
      "impact": 0.08
    },
    {
      "type": "negative",
      "title": "Discovery of Massive New Silver Deposits",
      "description": "Reports confirm the discovery of incredibly large, easily accessible silver deposits, signaling a significant increase in future supply.",
      "impact": -0.10
    },
    {
      "type": "positive",
      "title": "Escalating Inflationary Pressures",
      "description": "Rising global inflation figures prompt investors to seek out silver as a hedge against currency devaluation and rising costs.",
      "impact": 0.07
    },
    {
      "type": "negative",
      "title": "Strong AUD Performance",
      "description": "A strengthening Australian Dollar makes AUD-denominated commodities like silver more expensive for international buyers, decreasing demand.",
      "impact": -0.06
    },
    {
      "type": "positive",
      "title": "Increased Geopolitical Uncertainty",
      "description": "Heightened global political instability drives investors towards traditional safe-haven assets like gold and silver.",
      "impact": 0.06
    },
    {
      "type": "negative",
      "title": "Global Economic Slowdown Forecast",
      "description": "Pessimistic global economic outlooks reduce expectations for industrial activity, curbing demand for silver's industrial applications.",
      "impact": -0.09
    },
    {
      "type": "positive",
      "title": "Mining Supply Disruptions",
      "description": "Unexpected strikes, accidents, or regulatory issues at major silver mines lead to a significant reduction in global supply.",
      "impact": 0.09
    },
    {
      "type": "negative",
      "title": "Major Central Bank Rate Hike",
      "description": "An aggressive interest rate hike by a major central bank increases the opportunity cost of holding non-yielding assets like silver.",
      "impact": -0.07
    },
    {
      "type": "positive",
      "title": "Breakthrough in Silver-Based Medical Devices",
      "description": "New medical research highlights silver's antimicrobial properties, leading to a surge in demand for medical device manufacturing.",
      "impact": 0.05
    },
    {
      "type": "negative",
      "title": "Significant Drop in Jewelry Demand",
      "description": "Changing consumer preferences and economic woes lead to a sharp decline in demand for silver jewelry globally.",
      "impact": -0.05
    }
  ],

  "CUAUD": [ // Copper (Tonne)
    {
      "type": "positive",
      "title": "Surge in Electric Vehicle Manufacturing",
      "description": "Rapid growth in EV production globally significantly increases demand for copper, a key component in batteries and wiring.",
      "impact": 0.10
    },
    {
      "type": "negative",
      "title": "Major Discovery of New Copper Deposits",
      "description": "Confirmation of vast, easily extractable new copper deposits signals a substantial increase in future global supply.",
      "impact": -0.12
    },
    {
      "type": "positive",
      "title": "Global Infrastructure Spending Boom",
      "description": "Governments worldwide announce massive infrastructure investment plans, driving up demand for copper in construction and electrical grids.",
      "impact": 0.09
    },
    {
      "type": "negative",
      "title": "Economic Recession in Key Industrial Nations",
      "description": "A sharp economic downturn in major industrial economies like China and Germany slashes demand for copper in manufacturing.",
      "impact": -0.11
    },
    {
      "type": "positive",
      "title": "Mining Disruptions in Major Producing Countries",
      "description": "Strikes, political instability, or natural disasters severely disrupt copper mining operations in key producing nations like Chile or Peru.",
      "impact": 0.11
    },
    {
      "type": "negative",
      "title": "Breakthrough in Copper Substitution Technology",
      "description": "New materials emerge that can effectively substitute copper in various industrial applications, reducing overall demand.",
      "impact": -0.07
    },
    {
      "type": "positive",
      "title": "Rapid Growth in Renewable Energy Sector",
      "description": "The accelerated development and deployment of solar and wind energy projects, which are copper-intensive, boost demand.",
      "impact": 0.08
    },
    {
      "type": "negative",
      "title": "Increased Scrap Copper Recycling Rates",
      "description": "Technological advancements lead to a significant increase in the efficiency and volume of recycled copper, adding to supply.",
      "impact": -0.06
    },
    {
      "type": "positive",
      "title": "Lower-Than-Expected Copper Stockpiles",
      "description": "Reports reveal that global copper inventories are much lower than anticipated, indicating tighter supply conditions.",
      "impact": 0.07
    },
    {
      "type": "negative",
      "title": "New Tariffs Imposed on Copper Imports",
      "description": "Major importing nations levy new tariffs on copper, making it more expensive and reducing international trade volumes.",
      "impact": -0.08
    }
  ],

  "WTI": [ // Brent Crude Oil (barrels)
    {
      "type": "positive",
      "title": "OPEC+ Announces Deep Production Cuts",
      "description": "Major oil-producing nations agree to significantly cut oil output, drastically reducing global supply and boosting prices.",
      "impact": 0.10
    },
    {
      "type": "negative",
      "title": "Massive New Oil Field Discovery",
      "description": "Confirmation of a colossal new oil field discovery, promising immense new supply, puts downward pressure on prices.",
      "impact": -0.12
    },
    {
      "type": "positive",
      "title": "Surge in Global Travel and Transportation",
      "description": "An unexpected boom in air travel and road transportation drives up demand for jet fuel and gasoline.",
      "impact": 0.08
    },
    {
      "type": "negative",
      "title": "Global Recession Fears Intensify",
      "description": "Escalating concerns about a deep global economic recession signal a significant drop in industrial and consumer energy demand.",
      "impact": -0.11
    },
    {
      "type": "positive",
      "title": "Major Geopolitical Conflict in Oil-Rich Region",
      "description": "An intensifying military conflict in a key oil-producing region raises serious concerns about potential supply disruptions.",
      "impact": 0.09
    },
    {
      "type": "negative",
      "title": "Breakthrough in Commercial Fusion Power",
      "description": "An unexpected scientific breakthrough makes commercial fusion power viable sooner than expected, threatening long-term oil demand.",
      "impact": -0.15 // Higher impact for a truly disruptive event
    },
    {
      "type": "positive",
      "title": "Lower-Than-Expected US Oil Inventories",
      "description": "Weekly reports show US crude oil inventories are much lower than anticipated, indicating tighter domestic supply.",
      "impact": 0.07
    },
    {
      "type": "negative",
      "title": "Iran Nuclear Deal Revival",
      "description": "Progress on a new Iran nuclear deal suggests a potential return of Iranian oil to global markets, increasing supply.",
      "impact": -0.08
    },
    {
      "type": "positive",
      "title": "Major Refinery Fire in Key Consuming Nation",
      "description": "A significant fire at a large oil refinery disrupts processing capacity, increasing demand for crude oil from other sources.",
      "impact": 0.06
    },
    {
      "type": "negative",
      "title": "Massive Increase in US Shale Production",
      "description": "New drilling techniques and infrastructure lead to a surge in US shale oil production, adding significant global supply.",
      "impact": -0.09
    }
  ],

  "COB": [ // Corn (Bushells)
    {
      "type": "positive",
      "title": "Severe Drought in US Corn Belt",
      "description": "Prolonged and intense drought conditions in the major US corn-producing regions severely reduce yield forecasts.",
      "impact": 0.12
    },
    {
      "type": "negative",
      "title": "Record Global Corn Harvest Expected",
      "description": "Favorable weather across major growing regions worldwide points to an exceptionally large global corn harvest, increasing supply.",
      "impact": -0.10
    },
    {
      "type": "positive",
      "title": "Increased Ethanol Production Mandates",
      "description": "Several large nations introduce new mandates requiring higher percentages of ethanol in fuel, boosting corn demand.",
      "impact": 0.08
    },
    {
      "type": "negative",
      "title": "New Disease Threatens Corn Crops Globally",
      "description": "A novel corn disease emerges and spreads rapidly, threatening yields across major producing countries.",
      "impact": -0.09 // While a negative for crops, it's positive for the commodity price due to reduced supply. Re-adjusting for price impact.
    },
    {
      "type": "positive",
      "title": "Large-Scale Corn Crop Disease Outbreak", // Corrected
      "description": "A widespread disease outbreak significantly reduces projected corn yields in key producing regions.",
      "impact": 0.11
    },
    {
      "type": "positive",
      "title": "Major Importing Nation Increases Corn Reserves",
      "description": "A large nation announces aggressive plans to significantly increase its strategic corn reserves, boosting demand.",
      "impact": 0.06
    },
    {
      "type": "negative",
      "title": "Eased Trade Tensions with Major Corn Importer",
      "description": "Resolution of trade disputes between major corn exporters and importers leads to a removal of tariffs, increasing global supply flow.",
      "impact": -0.07
    },
    {
      "type": "positive",
      "title": "Significant Export Restrictions Imposed by Major Producer",
      "description": "A leading corn-exporting country implements new restrictions or taxes on exports, limiting global supply and driving prices up.",
      "impact": 0.09
    },
    {
      "type": "negative",
      "title": "Shift in Livestock Feed Trends Away from Corn",
      "description": "Growing adoption of alternative, cheaper feeds for livestock reduces overall demand for corn in animal agriculture.",
      "impact": -0.06
    },
    {
      "type": "negative",
      "title": "Breakthrough in Gene-Edited High-Yield Corn",
      "description": "New agricultural biotechnology promises significantly higher corn yields per acre, potentially increasing future supply dramatically.",
      "impact": -0.05
    }
  ],

  "WHB": [ // Wheat (Bushells)
    {
      "type": "positive",
      "title": "Severe Drought in Major Wheat-Producing Regions",
      "description": "Prolonged lack of rainfall in key global wheat belts leads to significantly reduced crop yield forecasts.",
      "impact": 0.12
    },
    {
      "type": "negative",
      "title": "Record Global Wheat Harvest Expected",
      "description": "Favorable weather conditions across multiple major growing regions point to an exceptionally large worldwide wheat harvest, increasing supply.",
      "impact": -0.10
    },
    {
      "type": "positive",
      "title": "Increased Biofuel Mandates Globally",
      "description": "Several large nations introduce new mandates requiring higher percentages of biofuels, increasing demand for grain crops like wheat.",
      "impact": 0.07
    },
    {
      "type": "positive",
      "title": "Large-Scale Crop Disease Outbreak",
      "description": "A virulent crop disease spreads through major wheat-producing regions, drastically cutting projected yields.",
      "impact": 0.11
    },
    {
      "type": "negative",
      "title": "Easing of Trade Restrictions & Tariffs",
      "description": "Major trade partners resolve disputes, leading to the removal of tariffs on wheat, which could increase supply flow to markets.",
      "impact": -0.06
    },
    {
      "type": "positive",
      "title": "Major Importing Nation Increases Wheat Reserves",
      "description": "A large, food-insecure nation announces aggressive plans to significantly increase its strategic wheat reserves, boosting demand.",
      "impact": 0.06
    },
    {
      "type": "negative",
      "title": "Shift in Dietary Trends Away from Grains",
      "description": "Growing consumer preference for low-carb or grain-free diets reduces overall demand for wheat products globally.",
      "impact": -0.07
    },
    {
      "type": "positive",
      "title": "Significant Export Restrictions Imposed",
      "description": "A major wheat-exporting country imposes new restrictions or taxes on exports, limiting global supply.",
      "impact": 0.09
    },
    {
      "type": "negative",
      "title": "Breakthrough in Yield-Boosting Gene Editing",
      "description": "New agricultural technology promises dramatically higher wheat yields per acre, potentially flooding the market with supply in the future.",
      "impact": -0.05
    },
    {
      "type": "negative",
      "title": "Exceptional Growing Season Forecast",
      "description": "Forecasters predict ideal weather conditions across major wheat-producing regions, indicating bumper crops and increased supply.",
      "impact": -0.09
    }
  ],

  "Sg": [ // Sugar ($/pound)
    {
      "type": "positive",
      "title": "Major Drought in Top Sugar Cane Producer",
      "description": "Prolonged drought in a leading sugar cane producing country (e.g., Brazil, India) severely impacts crop yields.",
      "impact": 0.12
    },
    {
      "type": "negative",
      "title": "Record Sugar Beet Harvest Globally",
      "description": "Favorable growing conditions in key sugar beet regions lead to an exceptionally large global sugar supply.",
      "impact": -0.10
    },
    {
      "type": "positive",
      "title": "Increased Demand for Biofuel Ethanol from Sugar",
      "description": "Rising oil prices and new mandates boost demand for ethanol produced from sugar cane, diverting supply from food.",
      "impact": 0.09
    },
    {
      "type": "negative",
      "title": "Global Health Campaign Against Sugar Consumption",
      "description": "A major international health organization launches an aggressive campaign discouraging sugar consumption, impacting demand.",
      "impact": -0.08
    },
    {
      "type": "positive",
      "title": "Pest Outbreak Devastates Sugar Cane Crops",
      "description": "A widespread pest infestation severely damages sugar cane crops in a major producing region, reducing supply.",
      "impact": 0.11
    },
    {
      "type": "negative",
      "title": "Discovery of Highly Efficient Artificial Sweetener",
      "description": "A new, low-cost, and highly palatable artificial sweetener gains widespread adoption, reducing demand for natural sugar.",
      "impact": -0.07
    },
    {
      "type": "positive",
      "title": "Increased Demand from Confectionery Industry",
      "description": "A surge in global demand for candies, chocolates, and other confectionery products drives up sugar consumption.",
      "impact": 0.06
    },
    {
      "type": "negative",
      "title": "Relaxation of Trade Tariffs on Sugar Imports",
      "description": "Major sugar-importing nations reduce or eliminate tariffs, allowing more foreign sugar to enter their markets and increase supply.",
      "impact": -0.05
    },
    {
      "type": "positive",
      "title": "Export Restrictions Imposed by Major Producer",
      "description": "A leading sugar-exporting country imposes new taxes or quotas on exports, tightening global supply.",
      "impact": 0.08
    },
    {
      "type": "negative",
      "title": "Currency Depreciation in Key Importing Nations",
      "description": "Significant weakening of currencies in major sugar-importing countries makes sugar more expensive, curbing demand.",
      "impact": -0.09
    }
  ]
};