import { Rule } from "../../utils/types";

export const esiRule: Rule = {
  ruleCode: "ESI_EMPLOYEE",
  name: "Employee State Insurance",
  category: "Deduction",
  type: "Statutory",
  version: "FY2024-2025",
  description: "Employee ESI 0.75% of Gross (if <= ₹21,000)",
  condition: "isEsiApplicable == true && gross <= (esiWageLimit || 21000)",
  monthlyFormula: "round(gross * 0.0075, 2)",
  annualFormula: "round(gross * 0.0075 * 12, 2)",
};

export const ESI_Employee_On_Basic: Rule = {
  ruleCode: "ESI_EMP_BASIC",
  name: "ESI Employee on Basic",
  category: "Deduction",
  type: "Custom",
  version: "FY2024-2025",
  description:
    "Employee ESI @ 0.75% calculated on Basic (non-statutory custom model)",
  condition: "basic > 0",
  monthlyFormula: "round(basic * 0.0075, 2)",
  annualFormula: "round(basic * 0.0075 * 12, 2)",
};
