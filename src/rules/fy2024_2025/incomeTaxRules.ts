import { Rule } from "../../utils/types";

export const incomeTaxRule: Rule = {
  ruleCode: "TDS",
  name: "Income Tax (TDS)",
  category: "Deduction",
  version: "FY2024-2025",
  description: "Simplified annual slab (old regime)",
  condition: "ctc > 250000",
  annualFormula: `
    ctc <= 250000 ? 0 :
    ctc <= 500000 ? (ctc - 250000) * 0.05 :
    ctc <= 1000000 ? (12500 + (ctc - 500000) * 0.20) :
    (112500 + (ctc - 1000000) * 0.30)
  `,
  monthlyFormula:
    "(ctc <= 250000 ? 0 : (ctc <= 500000 ? (ctc - 250000) * 0.05 : (ctc <= 1000000 ? (12500 + (ctc - 500000) * 0.20) : (112500 + (ctc - 1000000) * 0.30))) ) / 12",
};
