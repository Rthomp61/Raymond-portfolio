import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  variant?: "icon" | "button";
  showLabel?: boolean;
}

export function ThemeToggle({ 
  className, 
  variant = "icon", 
  showLabel = false 
}: ThemeToggleProps) {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (variant === "button") {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleTheme}
        className={cn("flex items-center gap-2", className)}
      >
        {theme === "light" ? (
          <>
            <i className="ri-moon-line"></i>
            {showLabel && <span>Dark Mode</span>}
          </>
        ) : (
          <>
            <i className="ri-sun-line"></i>
            {showLabel && <span>Light Mode</span>}
          </>
        )}
      </Button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200",
        className
      )}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <i className="ri-moon-line text-slate dark:text-white"></i>
      ) : (
        <i className="ri-sun-line text-white"></i>
      )}
    </button>
  );
}
