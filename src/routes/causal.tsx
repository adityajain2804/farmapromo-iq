import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowDown, ChevronRight, Ban, CheckCircle2 } from "lucide-react";
import { FilterBar } from "@/components/common/FilterBar";
import { FlowChain, Hint, KpiCard, Panel, StatusPill } from "@/components/common/primitives";
import { ResponseCurve } from "@/components/charts/ResponseCurve";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useGlobalFilters } from "@/hooks/use-global-filters";
import {
  CAMPAIGNS,
  CANNIBALIZATION_PAIRS,
  CATEGORIES,
  CLUSTERS,
  CONSTRAINTS,
  COUNTRIES,
  PRODUCTS,
  PROVENANCE,
  PULL_FORWARD_TIMELINE,
  RESPONSE_CURVES,
  SEGMENTS,
  TOOLTIPS,
  fmtMoney,
} from "@/data/mock";

export const Route = createFileRoute("/causal")({
  head: () => ({
    meta: [
      { title: "Causal Layer — FarmaTodo Promotion Intelligence Studio" },
      {
        name: "description",
        content: "Understand why a promotion works — CATE, discount response, pull-forward, cannibalization, NIM economics and constraint caps.",
      },
      { property: "og:title", content: "Causal Layer — FarmaTodo Promotion Intelligence Studio" },
      { property: "og:description", content: "Causal explanation of promotional recommendations for FarmaTodo planners." },
    ],
  }),
  component: CausalLayer;
});

function CausalLayer() {
  return null;
}
