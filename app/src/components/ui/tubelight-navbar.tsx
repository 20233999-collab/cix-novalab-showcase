import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavItem {
  id: string;
  name: string;
  icon: LucideIcon;
}

export interface NavBarProps {
  items: NavItem[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  className?: string;
}

export function NavBar({ items, activeTab: externalActiveTab, onTabChange, className }: NavBarProps) {
  const [internalActiveTab, setInternalActiveTab] = useState(items[0]?.id || "");
  const activeTab = externalActiveTab !== undefined ? externalActiveTab : internalActiveTab;
  const [, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSelect = (id: string) => {
    setInternalActiveTab(id);
    if (onTabChange) {
      onTabChange(id);
    }
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.0, delay: 3.0, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-4 flex items-center justify-between pointer-events-none",
        className,
      )}
    >
      {/* Brand Badge CIX BCP (Pill Glass) */}
      <div className="pointer-events-auto hidden sm:flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700/60 backdrop-blur-xl shadow-lg">
        <img src="/assets/cix-logo.png" alt="CIX Logo" className="h-5 w-auto object-contain" />
        <span className="text-xs font-semibold text-slate-200 tracking-tight">
          NovaLab <span className="text-[#FEA900]">Product Ops</span>
        </span>
      </div>

      {/* Tubelight Nav Container */}
      <div className="pointer-events-auto flex items-center gap-1 sm:gap-2 bg-slate-950/80 border border-white/10 backdrop-blur-xl py-1.5 px-2 rounded-full shadow-2xl shadow-black/50">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleSelect(item.id)}
              className={cn(
                "relative cursor-pointer text-xs sm:text-sm font-semibold px-3 sm:px-5 py-2 rounded-full transition-colors flex items-center gap-2",
                "text-slate-300 hover:text-white",
                isActive && "text-white font-bold",
              )}
            >
              <Icon size={15} strokeWidth={2.2} className={isActive ? "text-[#FEA900]" : "text-slate-400"} />
              <span className="inline">{item.name}</span>

              {/* Tubelight Lamp Effect con acento Clementine Gold / CIX Indigo */}
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-white/[0.08] rounded-full -z-10 border border-white/15"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 340,
                    damping: 30,
                  }}
                >
                  {/* Tubelight Glow Top */}
                  <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-8 h-1 bg-[#FEA900] rounded-t-full shadow-[0_-2px_12px_rgba(254,169,0,0.9)]">
                    <div className="absolute w-12 h-6 bg-[#FEA900]/30 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-[#3B49DF]/25 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-white/40 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </button>
          );
        })}
      </div>


    </motion.div>
  );
}
export default NavBar;
