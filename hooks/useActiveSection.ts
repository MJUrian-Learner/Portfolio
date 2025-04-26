import { ActiveSectionContext } from "@/providers/ActiveSectionProvider";
import { useContext } from "react";

export function useActiveSection() {
  const ctx = useContext(ActiveSectionContext);
  if (!ctx)
    throw new Error("useActiveSection must be inside ActiveSectionProvider");
  return ctx;
}
