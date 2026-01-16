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

export const ESIRuleOnBasic: Rule = {
  ruleCode: "ESI_RULE_ON_BASIC_WAGE",
  name: "Employee ESIC Contribution",
  category: "Deduction",
  type: "Custom",
  version: "FY2024-2025",
  description:
    "Employee ESIC contribution calculated at 0.75% of basic wages, applicable only when basic is up to Rs.21,000.",
  condition: "basic <= 21000",
  monthlyFormula: "ceil(basic * 0.0075)",
};

export const ESI_Employee_On_BasicPlusDA: Rule = {
  ruleCode: "ESI_EMP_BASIC_DA",
  name: "ESI Employee on Basic + DA",
  category: "Deduction",
  type: "Statutory",
  version: "FY2024-2025",
  description: "Employee ESI @ 0.75% calculated on (Basic + DA)",
  condition: "basicPlusDA > 0",
  monthlyFormula: "round(basicPlusDA * 0.0075, 2)",
  annualFormula: "round(basicPlusDA * 0.0075 * 12, 2)",
};
export const leaveAllowanceBasicPlusDARule: Rule = {
  ruleCode: "LEAVE_ALLOWANCE",
  name: "Leave Allowance - 5% of Basic + DA",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Leave Allowance = 5% of (Basic + DA)",
  condition: "basicPlusDA > 0",
  monthlyFormula: "round(basicPlusDA * 0.05, 0)",
  annualFormula: "round(basicPlusDA * 0.05 * 12, 0)",
};
