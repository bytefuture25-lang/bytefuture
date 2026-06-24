"use client";

import { ReactNode } from "react";
import { CursorProvider } from "./CursorContext";

interface Props {
  children: ReactNode;
}

export default function InteractionProvider({
  children,
}: Props) {
  return (
    <CursorProvider>
      {children}
    </CursorProvider>
  );
}