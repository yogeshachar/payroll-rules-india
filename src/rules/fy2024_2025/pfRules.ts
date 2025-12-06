import { Rule } from "../../utils/types";

export const pfRule: Rule = {
  ruleCode: "PF_EMPLOYEE",
  name: "Provident Fund (Employee)",
  category: "Deduction",
  type: "Statutory",
  version: "FY2024-2025",
  description:
    "Employee contribution to Provident Fund — 12% of (Basic + HRA) if above ₹15,000, otherwise 12% of ₹15,000.",

  //  Apply only if PF is applicable
  condition: "isPfApplicable == true && (basic + hra) > 0",

  //  Monthly formula
  monthlyFormula:
    "(basic + hra) > 15000 ? round((basic + hra) * 0.12, 2) : round(15000 * 0.12, 2)",

  //  Annual formula (12x monthly)
  annualFormula:
    "(basic + hra) > 15000 ? round((basic + hra) * 0.12 * 12, 2) : round(15000 * 0.12 * 12, 2)",
};
