import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getBaseUrl(): string {
  if (typeof window !== 'undefined') return window.location.origin
  if (process.env.PRODUCTION_URL) return process.env.PRODUCTION_URL
  return `http://localhost:${process.env.PORT ?? 3000}`
}