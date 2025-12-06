# Payroll Rules India - Project Summary

## Project Information
- **Package Name**: `payroll-rules-india`
- **Version**: 1.0.0
- **Author**: Yogesh c
- **License**: MIT
- **Description**: Custom and statutory payroll rules engine for India salary calculations

## Project Structure
- **Language**: TypeScript (compiles to JavaScript)
- **Build Tool**: TypeScript Compiler + Rollup
- **Output**: `dist/` folder with JS files and `.d.ts` type definitions
- **Bundles**: `bundle/` folder with CommonJS and ESM formats

## Key Features
- Supports both JavaScript and TypeScript projects
- Type definitions included for full TypeScript support
- Multiple payroll calculation rules for India

## Build Commands
```bash
npm install          # Install dependencies
npm run build:ts     # Compile TypeScript to JavaScript
npm run build:bundle # Bundle with Rollup
npm run build        # Build everything
```

## Rules Implemented
1. **Basic Rules**: Daily wages, 50% Gross, 40% Gross
2. **Special Allowance**: Daily rate (₹22/day)
3. **Conveyance Allowance**: 4 formulas (10% Gross, Fixed ₹1600, ₹23.08/day, ₹75/day)
4. **Medical Allowance**: 2 formulas (Fixed ₹1250, 6.67% Gross)
5. **HRA**: 5 formulas (20% Gross, 10% Basic, 8% Basic, 30% Basic, HRA+Others)
6. **Mobile Allowance**: 2 formulas (₹10/day, ₹500/month)
7. **National Holiday (NH)**: 5 formulas
8. **Optional Holiday (HO)**: Basic * 0.96%
9. **EL**: Basic * 5%
10. **Bonus**: Basic * 8.33%
11. **Leave Allowance**: Basic * 5% or 4.8%
12. **Retention Bonus (RB)**: Basic * 4.81%, 5%, or 10%
13. **Fuel Allowance**: ₹50/day
14. **Other Allowances**: Excel formula implementation
15. **Retrenchment Charges**: Basic * 4.11%
16. **Additional Allowance**: (₹2000/working days) * payable days
17. **Other Paid Holidays**: Basic * 0.96%
18. **Tea Allowance**: ₹544 * payable days
19. **General Allowance**: Basic * 13%
20. **Shift Allowance**: Payable days * ₹17.16
21. **Washing Allowance**: Category-based (HSW ₹16.02, SW ₹12.58, SSW ₹10.30)
22. **Uniform Allowance**: Category-based (HSW ₹60.63, SW ₹45.76, SSW ₹38.90)

## Usage in Frontend
```typescript
import { 
  basicRule,
  basicGrossEarnings50Rule,
  hraBasic30Rule,
  mobileAllowance500Rule,
  evaluateRule,
  type EvaluationContext 
} from 'payroll-rules-india';
```

## Deployment
- **NPM**: `npm publish`
- **Local**: `npm link` or use `file:../path` in package.json
- **Git**: Use git repository URL in package.json

## Important Notes
- All rules follow consistent naming conventions
- Type definitions are automatically generated
- Library works with both CommonJS and ES Modules
- EvaluationContext includes: basic, grossEarnings, payableDays, workingDaysInMonth, dailyWages, employeeCategory, etc.

## Reference
To reference this project in future conversations, mention:
- "payroll-rules-india project"
- "India payroll rules library"
- Package name: "payroll-rules-india"

