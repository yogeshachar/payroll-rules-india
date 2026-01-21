import { Rule } from "../../utils/types";

export const employerESIRule: Rule = {
  ruleCode: "EMPLOYER_ESI",
  name: "Employer ESI Contribution",
  category: "Deduction",
  type: "Statutory",
  version: "FY2024-2025",
  description:
    "Employer ESI contribution at 3.25% of basic wages, applicable when basic is up to Rs.21,000.",
  condition: "basic > 0",
  monthlyFormula: "round(basic * 0.0325)",
  annualFormula: "round(basic * 0.13, 0) * 12",
};
