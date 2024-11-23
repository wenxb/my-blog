import {clsx} from "clsx";
import {twMerge} from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatCount(num) {
  if (num >= 1e3) {
    return (num / 1e3).toFixed(1) + 'K'; // 千以上统一转换为 K
  } else {
    return num.toString(); // 小于千则直接返回原始数字
  }
}
