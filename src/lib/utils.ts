import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

declare interface Params{
  sex: string;
  age: number | string;
  hemoglobin: number | string;
  rbcCount: number | string;
  totalWbc: number | string;
}

export function generatePromptInput(params: Params) {
  return `Below is blood report for:
   Sex - ${params.sex}, 
   Age - ${params.age},
   Hemoglobin - ${params.hemoglobin} gm%, 
   gm%RBC count - ${params.rbcCount} millions/cumm,
   Total WBC - ${params.totalWbc} cumm,.
 Provide a summary of the report along with guidance on diet to address deficiencies. 
 Use tables to present the diet plan`;
}