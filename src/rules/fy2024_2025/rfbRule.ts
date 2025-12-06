import { Rule } from "../../utils/types";

export const rfbRule: Rule = {
  ruleCode: "RFB_COMPONENT",
  name: "Remaining Flexible Benefit (RFB)",
  category: "Earning",
  type: "Statutory",
  version: "FY2024-2025",
  description:
    "RFB = CTC − (Basic + HRA + PF + ESI + PT + Other Deductions). Used to balance total CTC.",
  condition: "ctc > 0 && basic >= 0 && hra >= 0",
  monthlyFormula:
    "round(ctc - (basic + hra + pf + esi + pt + otherDeductions || 0), 2)",
  annualFormula:
    "round((ctc * 12) - ((basic + hra + pf + esi + pt + otherDeductions || 0) * 12), 2)",
};
