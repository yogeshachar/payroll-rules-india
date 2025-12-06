
# USER_GUIDE.md

# 📘 payroll-rules-india — Complete User Guide
A modular, extensible, and FY-wise payroll rules engine for **Indian salary calculations**.

This guide explains:

- 🔍 How rules work  
- ⚙ How `evaluateRule()` processes formulas  
- 📦 How to use predefined FY rule packs  
- 🧩 How to register or build custom rules  
- 📄 Salary slip generation  
- 🧪 Jest test cases  
- 📚 Full API Documentation  

---

# 🚀 1. Overview

`payroll-rules-india` is designed for:

✔ HRMS Systems  
✔ Payroll Processors  
✔ Staffing Companies (daily wages + CTC)  
✔ Enterprise salary engines  
✔ Fintech or payroll SaaS products  

It supports:

- Custom & statutory rules  
- Monthly & annual formulas  
- Conditional rules  
- Daily wages, CTC models  
- FY-based structure (e.g., FY2024-2025)  
- Expression-based evaluation using `expr-eval`

---

# 🧠 2. Core Concepts

### ✔ A Rule is an object describing payroll logic  
### ✔ `evaluateRule()` executes that logic  
### ✔ Rules can be grouped by Financial Year  
### ✔ Expressions use safe math functions (`round`, `min`, `max`, `abs`)  

---

# 🧩 3. Rule Definition Structure

Every rule follows:

```ts
export interface Rule {
  ruleCode: string;
  name: string;
  category: string;
  type?: string;
  version?: string;
  description?: string;

  condition?: string;        // When rule applies
  monthlyFormula?: string;   // Monthly payroll expression
  annualFormula?: string;    // Annual payroll expression
}
```

Examples:

- **Basic Salary Calculation**  
- **PF / ESI Contribution**  
- **Daily wages-based Basic**  
- **Allowances (Tea, Conveyance, Special Allowance)**  
- **Holiday or Bonus Computation**

---

# ⚙ 4. `evaluateRule()` — How It Works

```ts
evaluateRule(rule, context, mode = "monthly")
```

### ✔ 1. Validates condition (if any)  
If the condition fails → rule does not apply.

### ✔ 2. Picks correct formula  
- `monthlyFormula`  
- `annualFormula`

### ✔ 3. Evaluates using `expr-eval`  
Context variables are injected dynamically.

### ✔ 4. Returns a structured result:

```ts
interface EvaluationResult {
  applies: boolean;
  value: number | null;
  ruleCode: string;
  name: string;
  category: string;
}
```

---

# 📚 5. Full API Documentation

## 📘 `evaluateRule(rule, context, mode?)`

### Parameters:
| Param | Type | Description |
|-------|--------|-------------|
| `rule` | Rule | Rule object to evaluate |
| `context` | `Record<string, any>` | Payroll inputs (basic, ctc, daysWorked, etc.) |
| `mode` | `"monthly" | "annual"` | Default: "monthly" |

### Returns:
| Field | Type | Meaning |
|--------|--------|---------|
| `applies` | boolean | Whether rule condition matched |
| `value` | number \| null | Computed rule value |
| `ruleCode` | string | Rule identifier |
| `name` | string | Human readable name |
| `category` | string | Earnings / Deductions / Statutory |

---

# 📦 6. Predefined Rules — FY2024_2025 (Auto Documentation)

Your predefined rules include:

## ⭐ 6.1 Basic + DA Rule

**File:** `basicRules.ts`  
**Rule Code:** `BASIC_DA`  
**Description:**  
```
- If CTC <= 36,305 => Basic + DA = ₹18,135
- If CTC > 36,305 => Basic + DA = 50% of CTC
```

**Condition:**  
```
ctc > 0
```

**Formula:**  
```
monthly: round(ctc <= 36305 ? 18135 : ctc * 0.5, 2)
annual: round((ctc/12 <= 36305) ? 18135*12 : ctc * 0.5, 2)
```

**Example Usage:**

```ts
evaluateRule(rules2024_2025.basicRule, { ctc: 50000 });
```

---

## ⭐ 6.2 Basic (Daily Wages)

**Rule Code:** `BASIC_DAILY_WAGES`  
```
Basic = dailyWages * payableDays
```

**Condition:**  
```
dailyWages > 0 && payableDays > 0
```

**Example:**

```ts
evaluateRule(rules2024_2025.basicDailyWagesRule, {
  dailyWages: 900,
  payableDays: 26,
});
```

---

# 🧪 7. Using Rules (Examples)

## ➤ Example 1 — Basic + DA

```ts
import { evaluateRule, rules2024_2025 } from "payroll-rules-india";

const result = evaluateRule(rules2024_2025.basicRule, { ctc: 50000 });
console.log(result.value);
```

---

## ➤ Example 2 — Daily Wages Basic

```ts
evaluateRule(rules2024_2025.basicDailyWagesRule, {
  dailyWages: 900,
  payableDays: 26,
});
```

---

# 📄 8. Salary Slip Builder Example

```ts
import { evaluateRule, rules2024_2025 } from "payroll-rules-india";

const context = {
  ctc: 48000,
  basic: 24000,
  dailyWages: 950,
  payableDays: 26,
  pfApplicable: true,
  gross: 30000
};

const slip = {
  basicDA: evaluateRule(rules2024_2025.basicRule, context),
  basicDaily: evaluateRule(rules2024_2025.basicDailyWagesRule, context),
  pf: evaluateRule(rules2024_2025.PF, context),
  esi: evaluateRule(rules2024_2025.ESI, context),
};

console.table({
  BasicDA: slip.basicDA.value,
  DailyBasic: slip.basicDaily.value,
  PF: slip.pf.value,
  ESI: slip.esi.value,
});
```

---

# 🧪 9. Jest Test Cases for `evaluateRule()`

Create file:

```
tests/evaluateRule.test.ts
```

```ts
import { evaluateRule } from "../src/utils/ruleEvaluator";
import { basicRule, basicDailyWagesRule } from "../src/rules/fy2024_2025/basicRules";

describe("evaluateRule()", () => {

  test("calculates Basic + DA correctly", () => {
    const result = evaluateRule(basicRule, { ctc: 50000 });
    expect(result.applies).toBe(true);
    expect(result.value).toBe(25000);
  });

  test("daily wages basic amount", () => {
    const ctx = { dailyWages: 900, payableDays: 26 };
    const result = evaluateRule(basicDailyWagesRule, ctx);
    expect(result.value).toBe(23400);
  });

  test("rule with failing condition returns applies=false", () => {
    const ctx = { dailyWages: 0, payableDays: 26 };
    const result = evaluateRule(basicDailyWagesRule, ctx);
    expect(result.applies).toBe(false);
    expect(result.value).toBeNull();
  });
});
```

---

# 🛡 10. Error Handling & Edge Cases

| Scenario | Engine Output |
|----------|----------------|
| Missing variable | expr-eval throws error |
| Condition is false | `value = null` |
| Formula is missing | `value = null` |
| Invalid numbers | evaluation fails |

---

# 🎯 11. Best Practices for Financial Year Rule Packs

Recommended structure:

```
rules/
  fy2024_2025/
  fy2025_2026/
```

Expose versions:

```ts
export * as rules2024_2025 from "./rules/fy2024_2025";
```

Versioning strategy:

```
v1.x.x → FY 2024–25  
v2.x.x → FY 2025–26  
v3.x.x → FY 2026–27  
```

---

# 📝 12. Conclusion

`payroll-rules-india` provides:

- ✔ Custom + statutory salary computations  
- ✔ FY-based rules  
- ✔ Extensible rule packs  
- ✔ Safe formula evaluation  
- ✔ Enterprise payroll engine foundation  

---

