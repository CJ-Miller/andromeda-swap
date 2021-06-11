import React from "react";
import { Placement, Padding } from "@popperjs/core";
import { TooltipRefs, TriggerType } from "./types";
declare const useTooltip: (content: React.ReactNode, placement?: Placement, trigger?: TriggerType, arrowPadding?: Padding | undefined, tooltipPadding?: Padding | undefined, tooltipOffset?: [number, number] | undefined) => TooltipRefs;
export default useTooltip;
