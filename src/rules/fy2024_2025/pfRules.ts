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

export const employeePfRule: Rule = {
  ruleCode: "PF_EMPLOYEE",
  name: "Provident Fund (Employee)",
  category: "Deduction",
  type: "Statutory",
  version: "FY2024-2025",
  description:
    "PF = 12% of (Basic + DA), capped at ₹1,800 (₹15,000 wage ceiling)",
  condition: "isPfApplicable && basicPlusDA > 0",
  monthlyFormula: "round(min(basicPlusDA, 15000) * 0.12, 0)",
  annualFormula: "round(min(basicPlusDA, 15000) * 0.12, 0) * 12",
};
