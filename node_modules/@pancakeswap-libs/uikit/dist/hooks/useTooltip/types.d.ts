/// <reference types="react" />
export interface TooltipRefs {
    targetRef: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
    tooltip: React.ReactNode;
    tooltipVisible: boolean;
}
export declare type TriggerType = "click" | "hover" | "focus";
