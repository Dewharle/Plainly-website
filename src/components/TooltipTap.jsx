"use client";

import { useEffect } from "react";

/**
 * Tooltips in the design (.tip > [role=tooltip]) open on hover and focus via CSS.
 * This adds tap-to-toggle for touch screens and closes them on Escape.
 */
export default function TooltipTap() {
  useEffect(() => {
    const closeAll = (except) =>
      document.querySelectorAll(".tip.is-open").forEach((t) => t !== except && t.classList.remove("is-open"));
    const onClick = (e) => {
      const tip = e.target.closest && e.target.closest(".tip");
      if (tip && !e.target.closest("a")) {
        closeAll(tip);
        tip.classList.toggle("is-open");
      } else closeAll();
    };
    const onKey = (e) => e.key === "Escape" && closeAll();
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);
  return null;
}
