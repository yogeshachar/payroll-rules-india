import { Rule } from "../../utils/types";

// PF: min(Basic, 15000) * 0.12
export const pfBasicRule: Rule = {
  ruleCode: "PF_BASIC",
  name: "Provident Fund (Employee) - Basic Only",
  category: "Deduction",
  type: "Statutory",
  version: "FY2024-2025",
  description:
    "Employee contribution to Provident Fund — 12% of Basic (capped at ₹15,000).",
  condition: "isPfApplicable == true && basic > 0",
  monthlyFormula: "round(min(basic, 15000) * 0.12, 2)",
  annualFormula: "round(min(basic, 15000) * 0.12 * 12, 2)",
};

// PF: min(Basic + DA, 15000) * 0.12
export const pfBasicDaRule: Rule = {
  ruleCode: "PF_BASIC_DA",
  name: "Provident Fund (Employee) - Basic + DA",
  category: "Deduction",
  type: "Statutory",
  version: "FY2024-2025",
  description:
    "Employee contribution to Provident Fund — 12% of (Basic + DA) if above ₹15,000, otherwise 12% of ₹15,000.",
  condition: "isPfApplicable == true && (basic + da) > 0",
  monthlyFormula: "round(min(basic + da, 15000) * 0.12, 2)",
  annualFormula: "round(min(basic + da, 15000) * 0.12 * 12, 2)",
};
