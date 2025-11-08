import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// 💡 Dica: A função cn é essencial para combinar classes Tailwind dinamicamente sem conflitos.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
