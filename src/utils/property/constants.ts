import { Property } from "@/interfaces/property"

export const propertyDefaults = {
  "propertySize": ["Small", "Medium", "Large"],
  "propertyType": ["Apartment", "Unit", "House", "Villa", "Townhouse", "Studio Apartment", "Cottage", "Parking Lot","Presidential suite"],
  "recommendedPrice": [700000, 850000, 950000, 1200000, 1500000, 2000000, 2250000, 2500000, 2750000 ],
  "recommendedIncome": [1500, 2200, 2500, 2800, 3000, 3500, 4000, 4800,5000],
  "recommendedExpenses": [200,250,300,400,500,600,700,750,800],
  "interestRates" : [0.078, 0.083, 0.098]
}

export const specialProperties:Record<string,Property> = {
    "Apartment Building":{
        id:"spec_apb1",
        totalValue: 10_000_000,
        loan: {
            downPayment: 500_000,
            loanAmountRemaining: 9_500_000,
            interestRate: 0.098,
            startMonth: -1
        },
        name: "10 Storey apartment building",
        expenses: 90_000,
        income: 100_000,
        isPPR: false
    },
    "Luxury Island Resort": {
    id: "spec_resort1",
    totalValue: 75_000_000, // Example: High-end resort
    loan: {
      downPayment: 15_000_000,
      loanAmountRemaining: 60_000_000,
      interestRate: 0.105,
      startMonth: -1
    },
    name: "Azure Oasis Luxury Island Resort",
    income: 1_200_000, // High monthly income from operations
    expenses: 950_000, // High monthly expenses (staff, maintenance, marketing)
    isPPR: false
  },
  "Downtown Commercial Skyscraper": {
    id: "spec_sky1",
    totalValue: 350_000_000, // Example: A significant portion or entire building
    loan: {
      downPayment: 70_000_000,
      loanAmountRemaining: 280_000_000,
      interestRate: 0.092,
      startMonth: -1
    },
    name: "Apex Tower (Commercial Office & Retail)",
    income: 3_000_000, // Very high monthly income from rentals
    expenses: 2_200_000, // Very high monthly expenses (utilities, maintenance, security)
    isPPR: false
  },
  "Historic Estate & Vineyard": {
    id: "spec_vineyard1",
    totalValue: 45_000_000,
    loan: {
      downPayment: 9_000_000,
      loanAmountRemaining: 36_000_000,
      interestRate: 0.088,
      startMonth: -1
    },
    name: "Grand Vines Historic Estate & Vineyard",
    income: 350_000, // Monthly income from wine sales, events, tourism
    expenses: 280_000, // Monthly expenses (agriculture, staff, property upkeep)
    isPPR: false
  },
  "State-of-the-Art Tech Campus": {
    id: "spec_techcampus1",
    totalValue: 180_000_000,
    loan: {
      downPayment: 36_000_000,
      loanAmountRemaining: 144_000_000,
      interestRate: 0.095,
      startMonth: -1
    },
    name: "Innovation Hub Tech & Research Campus",
    income: 1_500_000, // Monthly income from corporate leases
    expenses: 800_000, // Monthly expenses (utilities, extensive landscaping, security)
    isPPR: false
  },
  "Private Jet Hangar Complex": {
    id: "spec_jetport1",
    totalValue: 60_000_000,
    loan: {
      downPayment: 12_000_000,
      loanAmountRemaining: 48_000_000,
      interestRate: 0.100,
      startMonth: -1
    },
    name: "Elite Aero Private Hangar Terminal",
    income: 600_000, // Monthly income from hangar rentals, FBO services
    expenses: 350_000, // Monthly expenses (staff, maintenance, security, fuel)
    isPPR: false
  },
  "Luxury Yacht Marina": {
    id: "spec_marina1",
    totalValue: 90_000_000,
    loan: {
      downPayment: 18_000_000,
      loanAmountRemaining: 72_000_000,
      interestRate: 0.110,
      startMonth: -1
    },
    name: "Sapphire Bay Superyacht Marina",
    income: 850_000, // Monthly income from berth rentals, services
    expenses: 580_000, // Monthly expenses (dredging, maintenance, staff, utilities)
    isPPR: false
  },
  "Championship Golf Course & Club": {
    id: "spec_golf1",
    totalValue: 110_000_000,
    loan: {
      downPayment: 22_000_000,
      loanAmountRemaining: 88_000_000,
      interestRate: 0.090,
      startMonth: -1
    },
    name: "Emerald Links Golf & Country Club",
    income: 950_000, // Monthly income from memberships, green fees, events, F&B
    expenses: 700_000, // Monthly expenses (extensive groundskeeping, staff, club operations)
    isPPR: false
  },
  "Hyperscale Data Center": {
    id: "spec_datacenter1",
    totalValue: 250_000_000,
    loan: {
      downPayment: 50_000_000,
      loanAmountRemaining: 200_000_000,
      interestRate: 0.097,
      startMonth: -1
    },
    name: "QuantumByte Hyperscale Data Center",
    income: 2_500_000, // Monthly income from co-location, cloud services
    expenses: 1_800_000, // Monthly expenses (power, cooling, security, network, maintenance)
    isPPR: false
  },
  "Luxury Mixed-Use Landmark": {
    id: "spec_luxmix1",
    totalValue: 200_000_000,
    loan: {
      downPayment: 40_000_000,
      loanAmountRemaining: 160_000_000,
      interestRate: 0.091,
      startMonth: -1
    },
    name: "The Zenith Collection (Residential, Retail, Hotel)",
    income: 2_000_000, // Monthly income from diverse tenants
    expenses: 1_500_000, // Monthly expenses (complex operations, high-end services)
    isPPR: false
  }
}