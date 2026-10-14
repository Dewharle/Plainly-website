"use client";

import { useReducer, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

/**
 * Minimal stand-in for the Claude Design runtime's DCLogic base class.
 * Each screen keeps its design logic class verbatim (state + renderVals),
 * and useDCLogic() drives it with React state.
 */
export class DCLogic {
  constructor(props) {
    this.props = props || {};
    this.state = {};
  }
  setState(update) {
    const next = typeof update === "function" ? update(this.state, this.props) : update;
    this.state = { ...this.state, ...next };
    if (this.__rerender) this.__rerender();
  }
  renderVals() {
    return {};
  }
}

export function useDCLogic(LogicClass, props) {
  const [, rerender] = useReducer((n) => n + 1, 0);
  const ref = useRef(null);
  if (!ref.current) {
    ref.current = new LogicClass(props);
    ref.current.__rerender = rerender;
  }
  ref.current.props = props || {};
  return ref.current.renderVals() || {};
}

/** Forms in the design are prototypes: search forms go to results, others stay put. */
export function useFormHandlers() {
  const router = useRouter();
  const submitSearch = useCallback(
    (e) => {
      e.preventDefault();
      router.push("/search");
    },
    [router]
  );
  const submitPrevent = useCallback((e) => e.preventDefault(), []);
  return { submitSearch, submitPrevent };
}
