// src/components/ThemeToggle.tsx

import { Moon } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <button
      disabled
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full opacity-70 cursor-not-allowed",
        "transition-colors duration-300"
      )}
    >
      <Moon className="h-6 w-6 text-blue-200" />
    </button>
  );
};
