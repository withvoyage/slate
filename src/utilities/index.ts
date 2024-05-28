import { twMerge } from 'tailwind-merge'

export function cn(...classNames: Array<string | boolean | undefined>): string {
  return twMerge(classNames.filter(Boolean) as string[])
}

export function gid(): string {
  return 'slate-' + Math.random().toString(36).substr(2, 9)
}
