import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,

  // Playground বা Experiments ফোল্ডার থেকে ইম্পোর্ট ব্লক করার রুল
  {
    rules: {
      "no-restricted-imports": [
        "error",
        {
          "patterns": [
            {
              "group": ["**/playground/**", "**/experiments/**", "**/playground", "**/experiments"],
              "message": "Playground বা Experiments ফোল্ডার থেকে ফাইল ইম্পোর্ট করা যাবে না!"
            }
          ]
        }
      ]
    }
  },

  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
