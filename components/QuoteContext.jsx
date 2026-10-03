"use client";
/* Shares the chosen quote between the tabs, the quote builder and the contact form. */
import { createContext, useContext, useState } from "react";
import { PRICING } from "@/lib/site";

const QuoteContext = createContext(null);

export function QuoteProvider({ children }) {
  const [service, setService] = useState(PRICING.services[0].id);
  const [plan, setPlan] = useState(null); // the "flight plan" attached to the contact form
  return (
    <QuoteContext.Provider value={{ service, setService, plan, setPlan }}>
      {children}
    </QuoteContext.Provider>
  );
}

export const useQuote = () => useContext(QuoteContext);
