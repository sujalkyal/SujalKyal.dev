import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({children, size, rotation, spinDuration, orbitDuration, shouldSpin = false, shouldOrbit = false}: 
    PropsWithChildren<{size: number;rotation: number; spinDuration?: string; shouldOrbit?: boolean; orbitDuration?: string; shouldSpin?: boolean}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className={twMerge(shouldOrbit === true && "animate-spin")} style={{
            animationDuration: orbitDuration ? orbitDuration : "30s"
        }}>
        <div className="flex items-start justify-start" style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
        }}>
            <div className={twMerge(shouldSpin === true && "animate-spin")} style={{
            animationDuration: spinDuration ? spinDuration : "10s"
        }}>
            <div className="inline-flex" style={{
                transform: `rotate(${rotation*-1}deg)`,
            }}>
                {children}
            </div>
            </div>
            </div>
        </div>
    </div>
  );
}