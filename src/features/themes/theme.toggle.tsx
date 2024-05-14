"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, SunMedium } from "lucide-react";
import React from "react";

export const ToggleTheme = () => {
  const { setTheme, theme } = useTheme();
  return (
    <Button
      variant="ghost"
      size="icon"
      className="text-primary hover:text-primary"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      <SunMedium className="rotate-0 scale-100 translate-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute rotate-90 scale-0 translate-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Changer le theme</span>
    </Button>
  );
};
