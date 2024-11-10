"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 2.5, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;