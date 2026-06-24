"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";

export type CursorVariant =
  | "default"
  | "button"
  | "link"
  | "card"
  | "image"
  | "text"
  | "hidden";

interface CursorContextType {
  variant: CursorVariant;
  setVariant: (variant: CursorVariant) => void;
}

const defaultContext: CursorContextType = {
  variant: "default",
  setVariant: () => {},
};

const CursorContext = createContext<CursorContextType>(defaultContext);

export function CursorProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [variant, setVariant] = useState<CursorVariant>("default");

  const value = useMemo(
    () => ({
      variant,
      setVariant,
    }),
    [variant]
  );

  return (
    <CursorContext.Provider value={value}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  return useContext(CursorContext);
}