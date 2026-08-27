"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Layers,
  BarChart3,
  Network,
  Sparkles,
  BookOpen,
  Filter,
  ChevronRight,
  ExternalLink,
  Globe,
  Database,
  Cpu,
  TrendingUp,
  Zap,
  Shield,
  ArrowUpRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  marketingTypes,
  taxonomyLevels,
  tierColors,
  tierDotColors,
  statusColors,
  uniqueCategories,
  getCategoryDistribution,
  getTierDistribution,
  getStatusDistribution,
  type MarketingType,
  type Tier,
  type Status,
} from "@/data/taxonomy";

// ─── Stat Cards ───────────────────────────────────────────
const stats = [
  { label: "Total Types", value: "228", icon: Database, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Core Types", value: "150", icon: Layers, color: "text-amber-600", bg: "bg-amber-50" },
  { label: "Emerging (2025-26)", value: "32", icon: Sparkles, color: "text-violet-600", bg: "bg-violet-50" },
  { label: "Taxonomy Levels", value: "4", icon: Network, color: "text-sky-600", bg: "bg-sky-50" },
];

// ─── Pie chart colors ─────────────────────────────────────
const PIE_COLORS = [
  "#10b981", "#f59e0b", "#6366f1", "#ef4444", "#06b6d4",
  "#8b5cf6", "#ec4899", "#14b8a6", "#f97316", "#64748b",
  "#84cc16", "#e879f9", "#22d3ee", "#fb923c", "#a3e635",
];

// ─── Main Page ────────────────────────────────────────────
export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTier, setSelectedTier] = useState<Tier | "all">("all");
  const [selectedStatus, setSelectedStatus] = useState<Status | "all">("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<MarketingType | null>(null);

  const filteredTypes = useMemo(() => {
    return marketingTypes.filter((t) => {
      if (t.status === "Removed") return false;
      const matchesSearch =
        !searchQuery ||
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTier = selectedTier === "all" || t.tier === selectedTier;
      const matchesStatus = selectedStatus === "all" || t.status === selectedStatus;
      const matchesCategory =
        selectedCategory === "all" || t.category === selectedCategory;
      return matchesSearch && matchesTier && matchesStatus && matchesCategory;
    });
  }, [searchQuery, selectedTier, selectedStatus, selectedCategory]);

  const categoryDistribution = useMemo(() => getCategoryDistribution(), []);
  const tierDistribution = useMemo(() => getTierDistribution(), []);
  const statusDistribution = useMemo(() => getStatusDistribution(), []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-sky-50/30">
      {/* ─── Header ────────────────────────────────────── */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 flex items-center justify-center">
                <Network className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold tracking-tight">
                  Marketing Taxonomy AI
                </h1>
                <p className="text-xs text-muted-foreground">
                  228 Types &middot; 4 Levels &middot; Research-Grade
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs gap-1">
                <Globe className="h-3 w-3" />
                v3.0
              </Badge>
              <Badge variant="outline" className="text-xs gap-1">
                <BookOpen className="h-3 w-3" />
                Open Source
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* ─── Stats Row ──────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`${stat.bg} p-2.5 rounded-lg`}
                    >
                      <stat.icon className={`h-4 w-4 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* ─── Search & Filters ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search marketing types or categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Select
                    value={selectedTier}
                    onValueChange={(v) => setSelectedTier(v as Tier | "all")}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Tier" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Tiers</SelectItem>
                      <SelectItem value="core">Core</SelectItem>
                      <SelectItem value="extended">Extended</SelectItem>
                      <SelectItem value="emerging">Emerging</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select
                    value={selectedStatus}
                    onValueChange={(v) =>
                      setSelectedStatus(v as Status | "all")
                    }
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="Verified">Verified</SelectItem>
                      <SelectItem value="Merged">Merged</SelectItem>
                      <SelectItem value="Renamed">Renamed</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select
                    value={selectedCategory}
                    onValueChange={(v) => setSelectedCategory(v)}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {uniqueCategories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <Filter className="h-3.5 w-3.5" />
                <span>
                  Showing <strong>{filteredTypes.length}</strong> of{" "}
                  {marketingTypes.filter((t) => t.status !== "Removed").length} active types
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ─── Main Tabs ──────────────────────────────── */}
        <Tabs defaultValue="explorer" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-lg">
            <TabsTrigger value="explorer" className="gap-2">
              <Layers className="h-4 w-4" />
              <span className="hidden sm:inline">Explorer</span>
            </TabsTrigger>
            <TabsTrigger value="hierarchy" className="gap-2">
              <Network className="h-4 w-4" />
              <span className="hidden sm:inline">Hierarchy</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Analytics</span>
            </TabsTrigger>
          </TabsList>

          {/* ─── Tab 1: Type Explorer ─────────────────── */}
          <TabsContent value="explorer">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Type List */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Database className="h-4 w-4 text-emerald-600" />
                      Marketing Types
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[560px] pr-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <AnimatePresence mode="popLayout">
                          {filteredTypes.map((type) => (
                            <motion.button
                              key={type.id}
                              layout
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              onClick={() => setSelectedType(type)}
                              className={`
                                text-left p-3 rounded-lg border transition-all hover:shadow-md
                                ${
                                  selectedType?.id === type.id
                                    ? "border-emerald-400 bg-emerald-50/50 shadow-sm"
                                    : "border-border hover:border-emerald-200"
                                }
                              `}
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div className="min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span
                                      className={`inline-block h-2 w-2 rounded-full ${tierDotColors[type.tier]}`}
                                    />
                                    <span className="text-xs text-muted-foreground font-mono">
                                      #{type.id}
                                    </span>
                                  </div>
                                  <p className="text-sm font-medium mt-1 truncate">
                                    {type.name}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                                <Badge
                                  variant="outline"
                                  className={`text-[10px] px-1.5 py-0 ${tierColors[type.tier]}`}
                                >
                                  {type.tier}
                                </Badge>
                                <Badge
                                  variant="secondary"
                                  className={`text-[10px] px-1.5 py-0 ${statusColors[type.status]}`}
                                >
                                  {type.status}
                                </Badge>
                                {type.caseStudy && (
                                  <Badge
                                    variant="secondary"
                                    className="text-[10px] px-1.5 py-0 bg-amber-100 text-amber-700"
                                  >
                                    Case Study
                                  </Badge>
                                )}
                              </div>
                            </motion.button>
                          ))}
                        </AnimatePresence>
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              {/* Detail Panel */}
              <div>
                <Card className="border-0 shadow-sm sticky top-24">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-violet-600" />
                      Type Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {selectedType ? (
                      <motion.div
                        key={selectedType.id}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-4"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className={`inline-block h-3 w-3 rounded-full ${tierDotColors[selectedType.tier]}`}
                            />
                            <span className="text-xs font-mono text-muted-foreground">
                              ID: {selectedType.id}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold leading-tight">
                            {selectedType.name}
                          </h3>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">
                              Category
                            </span>
                            <Badge variant="outline">{selectedType.category}</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">
                              Tier
                            </span>
                            <Badge
                              className={tierColors[selectedType.tier]}
                            >
                              {selectedType.tier.charAt(0).toUpperCase() +
                                selectedType.tier.slice(1)}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">
                              Status
                            </span>
                            <Badge
                              className={
                                statusColors[selectedType.status]
                              }
                            >
                              {selectedType.status}
                            </Badge>
                          </div>
                          {selectedType.source && (
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">
                                Source
                              </span>
                              <Badge
                                variant="secondary"
                                className="text-xs"
                              >
                                {selectedType.source}
                              </Badge>
                            </div>
                          )}
                        </div>
                        <div className="pt-3 border-t">
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {selectedType.tier === "emerging"
                              ? "This is an emerging marketing type identified through 2025-2026 research from leading institutions and industry analysts."
                              : selectedType.tier === "extended"
                              ? "This is a specialized/niche marketing type covering specific industry verticals, techniques, or advanced methodologies."
                              : "This is a core, established marketing discipline with extensive academic literature and industry adoption."}
                          </p>
                        </div>
                        <div className="pt-3 border-t">
                          <p className="text-xs text-muted-foreground">
                            Tier Range
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                              <div
                                className={`h-full rounded-full ${
                                  selectedType.tier === "core"
                                    ? "bg-emerald-500"
                                    : selectedType.tier === "extended"
                                    ? "bg-amber-500"
                                    : "bg-violet-500"
                                }`}
                                style={{
                                  width:
                                    selectedType.tier === "core"
                                      ? "100%"
                                      : selectedType.tier === "extended"
                                      ? "66%"
                                      : "33%",
                                }}
                              />
                            </div>
                            <span className="text-[10px] text-muted-foreground">
                              {selectedType.tier === "core"
                                ? "1-150"
                                : selectedType.tier === "extended"
                                ? "151-196"
                                : "197-228"}
                            </span>
                          </div>
                        </div>
                        {selectedType.caseStudy && (
                          <div className="pt-3 border-t">
                            <div className="flex items-center gap-1.5 mb-2">
                              <Zap className="h-3.5 w-3.5 text-amber-500" />
                              <p className="text-xs font-semibold">Case Study</p>
                            </div>
                            <div className="rounded-lg bg-amber-50 border border-amber-100 p-3">
                              <p className="text-sm font-semibold text-amber-900">
                                {selectedType.caseStudy.brand}
                              </p>
                              <p className="text-xs text-amber-800/80 mt-1 leading-relaxed">
                                {selectedType.caseStudy.description}
                              </p>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ) : (
                      <div className="text-center py-12 text-muted-foreground">
                        <ArrowUpRight className="h-8 w-8 mx-auto mb-3 opacity-40" />
                        <p className="text-sm">
                          Select a marketing type to view details
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* ─── Tab 2: Taxonomy Hierarchy ───────────── */}
          <TabsContent value="hierarchy">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {taxonomyLevels.map((level, li) => {
                const levelIcons = [
                  TrendingUp,
                  Globe,
                  Cpu,
                  Zap,
                ];
                const levelColors = [
                  "from-emerald-500 to-teal-500",
                  "from-sky-500 to-blue-500",
                  "from-violet-500 to-purple-500",
                  "from-amber-500 to-orange-500",
                ];
                const LevelIcon = levelIcons[li];
                return (
                  <motion.div
                    key={level.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: li * 0.1 }}
                  >
                    <Card className="border-0 shadow-sm h-full hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`h-10 w-10 rounded-xl bg-gradient-to-br ${levelColors[li]} flex items-center justify-center flex-shrink-0`}
                          >
                            <LevelIcon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-base">
                              Level {li + 1}: {level.name}
                            </CardTitle>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {level.categories.length} categories
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {level.description}
                        </p>
                        <div className="space-y-3">
                          {level.categories.map((cat) => (
                            <div
                              key={cat.name}
                              className="rounded-lg border p-3 hover:bg-muted/50 transition-colors"
                            >
                              <div className="flex items-center gap-2 mb-1.5">
                                <ChevronRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
                                <h4 className="text-sm font-semibold">
                                  {cat.name}
                                </h4>
                              </div>
                              <p className="text-xs text-muted-foreground ml-5.5 mb-2">
                                {cat.philosophy}
                              </p>
                              <div className="flex flex-wrap gap-1 ml-5.5">
                                {cat.keyTypes.map((kt) => (
                                  <Badge
                                    key={kt}
                                    variant="secondary"
                                    className="text-[10px] px-1.5 py-0"
                                  >
                                    {kt}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </TabsContent>

          {/* ─── Tab 3: Analytics ────────────────────── */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tier Distribution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="border-0 shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Layers className="h-4 w-4 text-emerald-600" />
                      Tier Distribution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={220}>
                      <PieChart>
                        <Pie
                          data={tierDistribution}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={80}
                          paddingAngle={3}
                          dataKey="value"
                          stroke="none"
                        >
                          {tierDistribution.map((_, idx) => (
                            <Cell key={idx} fill={PIE_COLORS[idx]} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            borderRadius: "8px",
                            border: "none",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                            fontSize: "12px",
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="flex flex-col gap-1.5 mt-2">
                      {tierDistribution.map((d, i) => (
                        <div
                          key={d.name}
                          className="flex items-center justify-between text-xs"
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className="h-2.5 w-2.5 rounded-full"
                              style={{ backgroundColor: PIE_COLORS[i] }}
                            />\n                            <span>{d.name}</span>
                          </div>
                          <span className="font-semibold">{d.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Status Distribution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Card className="border-0 shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Shield className="h-4 w-4 text-sky-600" />
                      Validation Status
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={220}>
                      <PieChart>
                        <Pie
                          data={statusDistribution}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={80}
                          paddingAngle={3}
                          dataKey="value"
                          stroke="none"
                        >
                          {statusDistribution.map((_, idx) => (
                            <Cell key={idx} fill={PIE_COLORS[idx]} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            borderRadius: "8px",
                            border: "none",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                            fontSize: "12px",
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="flex flex-col gap-1.5 mt-2">
                      {statusDistribution.map((d, i) => (
                        <div
                          key={d.name}
                          className="flex items-center justify-between text-xs"
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className="h-2.5 w-2.5 rounded-full"
                              style={{ backgroundColor: PIE_COLORS[i] }}
                            />\n                            <span>{d.name}</span>
                          </div>
                          <span className="font-semibold">{d.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Category Bar Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Card className="border-0 shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-violet-600" />
                      Top 10 Categories
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart
                        data={categoryDistribution.slice(0, 10)}
                        layout="vertical"
                        margin={{ left: 10, right: 10 }}
                      >
                        <XAxis
                          type="number"
                          tick={{ fontSize: 10 }}
                        />
                        <YAxis
                          dataKey="name"
                          type="category"
                          width={120}
                          tick={{ fontSize: 9 }}
                        />
                        <Tooltip
                          contentStyle={{
                            borderRadius: "8px",
                            border: "none",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                            fontSize: "12px",
                          }}
                        />
                        <Bar
                          dataKey="count"
                          fill="#10b981"
                          radius={[0, 4, 4, 0]}
                          barSize={14}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Emerging Types Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Card className="border-0 shadow-sm mt-6">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-violet-600" />
                    Emerging Types (2025-2026)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {marketingTypes
                      .filter((t) => t.tier === "emerging" && t.status === "Verified")
                      .map((type) => (
                        <div
                          key={type.id}
                          onClick={() => {
                            setSelectedType(type);
                            document
                              .querySelector('[data-state="active"][value="explorer"]')
                              ?.dispatchEvent(
                                new MouseEvent("click")
                              );
                          }}
                          className="rounded-lg border border-violet-100 bg-violet-50/30 p-3 hover:shadow-md hover:border-violet-200 transition-all cursor-pointer"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-mono text-muted-foreground">
                              #{type.id}
                            </span>
                            <span
                              className={`text-[10px] px-1.5 py-0 ${tierColors[type.tier]}`}
                            >
                              {type.tier}
                            </span>
                          </div>
                          <h4 className="text-sm font-semibold leading-tight">
                            {type.name}
                          </h4>
                          {type.source && (
                            <p className="text-[10px] text-muted-foreground mt-1.5 flex items-center gap-1">
                              <ExternalLink className="h-2.5 w-2.5" />
                              {type.source}
                            </p>
                          )}
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </main>

      {/* ─── Footer ────────────────────────────────────── */}
      <footer className="border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
            <p>
              Marketing Taxonomy AI v3.0 &middot; 228 Types &middot; MIT License
            </p>
            <p>
              Built with Grounded Theory, TPB, Graph Theory &amp; Fuzzy Set
              Theory
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
