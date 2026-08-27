export type Tier = "core" | "extended" | "emerging";
export type Status = "Verified" | "Merged" | "Removed" | "Renamed";

export interface CaseStudy {
  brand: string;
  description: string;
}

export interface MarketingType {
  id: number;
  name: string;
  category: string;
  tier: Tier;
  status: Status;
  source?: string;
  caseStudy?: CaseStudy;
}

export interface TaxonomyLevel {
  id: string;
  name: string;
  description: string;
  categories: TaxonomyCategory[];
}

export interface TaxonomyCategory {
  name: string;
  philosophy: string;
  keyTypes: string[];
}

export const taxonomyLevels: TaxonomyLevel[] = [
  {
    id: "strategic-logic",
    name: "Strategic Logic",
    description: "The foundational strategic philosophy behind each marketing approach — how value is created and delivered to the market.",
    categories: [
      { name: "Pull Marketing", philosophy: "Attraction-based, permission-driven", keyTypes: ["Inbound", "Content", "SEO/GEO", "Viral"] },
      { name: "Push Marketing", philosophy: "Interruption-based, broadcast-driven", keyTypes: ["Outbound", "Telemarketing", "Direct Mail", "Display"] },
      { name: "Experiential Marketing", philosophy: "Immersive, sensory, memory-driven", keyTypes: ["Experiential", "Event", "Phygital", "Guerrilla"] },
      { name: "Relational Marketing", philosophy: "Long-term, trust, loyalty-driven", keyTypes: ["CRM", "Loyalty", "Community-Led", "Partnership"] },
      { name: "Disruptive Marketing", philosophy: "Challenge norms, category creation", keyTypes: ["Disruptive", "Challenger", "Blue Ocean"] },
    ],
  },
  {
    id: "channel-architecture",
    name: "Channel Architecture",
    description: "The medium and environment through which marketing reaches its audience — from physical to virtual.",
    categories: [
      { name: "Digital-Native", philosophy: "Born-digital channels", keyTypes: ["Digital", "Social Media", "Livestream", "Conversational Commerce"] },
      { name: "Physical-Native", philosophy: "Brick-and-mortar, offline", keyTypes: ["Outdoor", "Street", "Door-to-Door", "Trade Show"] },
      { name: "Phygital", philosophy: "Seamless physical-digital fusion", keyTypes: ["Phygital", "Omnichannel", "Proximity", "In-Store"] },
      { name: "Metaverse", philosophy: "Virtual/AR/VR environments", keyTypes: ["Virtual", "Augmented Reality", "Meta Marketing"] },
    ],
  },
  {
    id: "technology-stack",
    name: "Technology Stack",
    description: "The underlying technology enabling modern marketing — from AI to blockchain to biometrics.",
    categories: [
      { name: "AI-Native", philosophy: "LLM, RL, Computer Vision", keyTypes: ["Agentic", "AI-Augmented", "Predictive", "Hyper-Personalized", "Neuro"] },
      { name: "Web3/Blockchain", philosophy: "Decentralized, tokenized", keyTypes: ["Web3 Marketing", "Tokenized Marketing", "DAO Marketing"] },
      { name: "Biometric", philosophy: "Physiological signals", keyTypes: ["Neuro Marketing", "Emotion AI", "BCI Marketing"] },
      { name: "Data Science", philosophy: "Analytics, modeling", keyTypes: ["Data-Driven", "Computational", "Algorithmic", "Scientific"] },
    ],
  },
  {
    id: "business-model",
    name: "Business Model",
    description: "How marketing drives revenue — the economic logic connecting customer acquisition to business growth.",
    categories: [
      { name: "Product-Led", philosophy: "Self-serve, product-as-channel", keyTypes: ["PLG", "Product Marketing", "Freemium Marketing"] },
      { name: "Subscription-Led", philosophy: "Recurring revenue", keyTypes: ["Subscription Economy", "SaaS Marketing", "Membership"] },
      { name: "Solution-Led", philosophy: "Outcome-based, consultative", keyTypes: ["Solution Marketing", "Consultative", "Outcome-Based"] },
      { name: "Ecosystem-Led", philosophy: "Platform, network effects", keyTypes: ["Ecosystem Marketing", "Platform Marketing", "Two-Sided Market"] },
    ],
  },
];

export const marketingTypes: MarketingType[] = [
  // Core Types (1-150)
  { id: 1, name: "Account-Based Marketing (ABM)", category: "B2B Strategic", tier: "core", status: "Verified", caseStudy: { brand: "GumGum → T-Mobile", description: "Created a custom comic book casting T-Mobile's CEO as a superhero called 'T-Man' who saves his city from bad cell service. The CEO tweeted about it, leading GumGum to win the T-Mobile account." } },
  { id: 2, name: "Affiliate Marketing", category: "Performance/Channel", tier: "core", status: "Verified" },
  { id: 3, name: "Agile Marketing", category: "Process/Methodology", tier: "core", status: "Verified" },
  { id: 4, name: "Algorithmic Marketing", category: "Data/AI", tier: "core", status: "Verified" },
  { id: 5, name: "Ambush Marketing", category: "Event/Disruptive", tier: "core", status: "Verified" },
  { id: 6, name: "Analytical Marketing", category: "Data Science", tier: "core", status: "Verified" },
  { id: 7, name: "Article Marketing", category: "Content/SEO", tier: "core", status: "Verified" },
  { id: 8, name: "B2B Marketing", category: "Business Model", tier: "core", status: "Verified" },
  { id: 9, name: "B2C Marketing", category: "Business Model", tier: "core", status: "Verified" },
  { id: 10, name: "B2P Marketing", category: "Business Model", tier: "core", status: "Verified" },
  { id: 11, name: "Behavioral Marketing", category: "Data/Psychology", tier: "core", status: "Verified" },
  { id: 12, name: "Unethical Marketing", category: "Ethics/Risk", tier: "core", status: "Renamed" },
  { id: 13, name: "Brand Marketing", category: "Strategic", tier: "core", status: "Verified" },
  { id: 14, name: "Buzz Marketing", category: "Viral/Word-of-Mouth", tier: "core", status: "Verified" },
  { id: 15, name: "Call Center Marketing", category: "Direct/Operations", tier: "core", status: "Verified" },
  { id: 16, name: "Campus Marketing", category: "Geo/Demographic", tier: "core", status: "Verified" },
  { id: 17, name: "Catalog Marketing", category: "Direct/Retail", tier: "core", status: "Verified" },
  { id: 18, name: "Cause Marketing", category: "Purpose/Ethics", tier: "core", status: "Verified" },
  { id: 19, name: "Celebrity Marketing", category: "Influencer/PR", tier: "core", status: "Verified" },
  { id: 20, name: "Channel Marketing", category: "Distribution/B2B", tier: "core", status: "Verified" },
  { id: 21, name: "Closed-Loop Marketing", category: "Process/Analytics", tier: "core", status: "Verified" },
  { id: 22, name: "Cloud Marketing (SaaS)", category: "Technology/Infrastructure", tier: "core", status: "Verified" },
  { id: 23, name: "Cooperative Marketing", category: "Partnership", tier: "core", status: "Verified" },
  { id: 24, name: "Communal Marketing", category: "Community", tier: "core", status: "Verified" },
  { id: 25, name: "Community Marketing", category: "Community", tier: "core", status: "Verified" },
  { id: 26, name: "Computational Marketing", category: "Data/AI", tier: "core", status: "Verified" },
  { id: 27, name: "Content Marketing", category: "Content/Strategic", tier: "core", status: "Verified", caseStudy: { brand: "General Electric", description: "Launched 'GE Reports,' an online magazine with stunning visuals about jet engines and wind turbines, transforming a B2B industrial conglomerate into a compelling media brand." } },
  { id: 28, name: "Contextual Marketing", category: "Content/Personalization", tier: "core", status: "Verified" },
  { id: 29, name: "Controversial Marketing", category: "Attention/Viral", tier: "core", status: "Verified" },
  { id: 30, name: "Conversational Marketing", category: "Engagement/Chat", tier: "core", status: "Verified" },
  { id: 31, name: "Conversion Rate Marketing", category: "Performance/Analytics", tier: "core", status: "Verified" },
  { id: 32, name: "Conversion Content Marketing", category: "Content/Performance", tier: "core", status: "Verified" },
  { id: 33, name: "Corporate Marketing", category: "Organizational", tier: "core", status: "Verified" },
  { id: 34, name: "Cross Marketing", category: "Partnership/Channel", tier: "core", status: "Verified" },
  { id: 35, name: "Culture Marketing", category: "Geo/Demographic", tier: "core", status: "Verified" },
  { id: 36, name: "Data Web Marketing", category: "Data/Internet", tier: "core", status: "Verified" },
  { id: 37, name: "Database Marketing", category: "Data/Direct", tier: "core", status: "Verified" },
  { id: 38, name: "Data-Driven Marketing", category: "Data/Analytics", tier: "core", status: "Verified" },
  { id: 39, name: "Digital Marketing", category: "Channel/Strategic", tier: "core", status: "Verified" },
  { id: 40, name: "Direct Marketing", category: "Channel/Direct", tier: "core", status: "Verified" },
  { id: 41, name: "Direct Response Marketing", category: "Performance/Direct", tier: "core", status: "Verified" },
  { id: 42, name: "Disruptive Marketing", category: "Strategic/Innovation", tier: "core", status: "Verified" },
  { id: 43, name: "Diversity Marketing", category: "Demographic/Ethics", tier: "core", status: "Verified" },
  { id: 44, name: "Door-to-Door Marketing", category: "Field/Direct", tier: "core", status: "Verified" },
  { id: 45, name: "Drip Marketing", category: "Automation/Email", tier: "core", status: "Verified" },
  { id: 46, name: "Email Marketing", category: "Channel/Digital", tier: "core", status: "Verified" },
  { id: 47, name: "Entrepreneurial Marketing", category: "Strategic/SME", tier: "core", status: "Verified" },
  { id: 48, name: "Ethical Marketing", category: "Ethics/Brand", tier: "core", status: "Verified" },
  { id: 49, name: "Event Marketing", category: "Experiential", tier: "core", status: "Verified" },
  { id: 50, name: "Expeditionary Marketing", category: "Speed/Aggressive", tier: "core", status: "Verified" },
  { id: 51, name: "Experiential Marketing", category: "Experiential/Sensory", tier: "core", status: "Verified" },
  { id: 52, name: "Social Media Marketing", category: "Channel/Digital", tier: "core", status: "Merged" },
  { id: 53, name: "Field Marketing", category: "Field/Direct", tier: "core", status: "Verified" },
  { id: 54, name: "Geo-Marketing", category: "Location/Tech", tier: "core", status: "Verified" },
  { id: 55, name: "Global Marketing", category: "International/Strategic", tier: "core", status: "Verified" },
  { id: 56, name: "Green Marketing", category: "Sustainability", tier: "core", status: "Verified" },
  { id: 57, name: "Guerrilla Marketing", category: "Creative/Low-Budget", tier: "core", status: "Verified", caseStudy: { brand: "Coca-Cola", description: "'Happiness Machine' placed a special vending machine on a college campus dispensing free Cokes, flowers, and pizza. The video went viral with millions of views at a fraction of traditional ad costs." } },
  { id: 58, name: "Horizontal Marketing", category: "Partnership/Channel", tier: "core", status: "Verified" },
  { id: 59, name: "Inbound Marketing", category: "Pull/Strategic", tier: "core", status: "Verified" },
  { id: 60, name: "Industrial Marketing", category: "B2B/Sector", tier: "core", status: "Verified" },
  { id: 61, name: "Influencer Marketing", category: "Social/PR", tier: "core", status: "Verified", caseStudy: { brand: "Daniel Wellington", description: "Grew from startup to $200M+ by gifting watches to thousands of Instagram micro-influencers who posted photos with discount codes, building the brand almost entirely through social media." } },
  { id: 62, name: "Informational Marketing", category: "Content/Education", tier: "core", status: "Verified" },
  { id: 63, name: "In-Game Marketing", category: "Gaming/AdTech", tier: "core", status: "Verified" },
  { id: 64, name: "In-Store Marketing", category: "Retail/Phygital", tier: "core", status: "Verified" },
  { id: 65, name: "Integrated Marketing", category: "Strategic/Omnichannel", tier: "core", status: "Verified" },
  { id: 66, name: "Interactive Marketing", category: "Engagement/Tech", tier: "core", status: "Verified" },
  { id: 67, name: "Internet Marketing", category: "Channel/Digital", tier: "core", status: "Verified" },
  { id: 68, name: "Internal Marketing", category: "Organizational/HR", tier: "core", status: "Verified" },
  { id: 69, name: "International Marketing", category: "Global/Strategic", tier: "core", status: "Verified" },
  { id: 70, name: "Keyword Marketing", category: "SEO/Search", tier: "core", status: "Verified" },
  { id: 71, name: "Left-Brain Marketing", category: "Data/Science", tier: "core", status: "Removed" },
  { id: 72, name: "Local Marketing", category: "Geo/Local", tier: "core", status: "Verified" },
  { id: 73, name: "Long-Tail Marketing", category: "SEO/Niche", tier: "core", status: "Verified" },
  { id: 74, name: "Loyalty Marketing", category: "Relational/Retention", tier: "core", status: "Verified" },
  { id: 75, name: "Mobile Marketing", category: "Channel/Tech", tier: "core", status: "Verified" },
  { id: 76, name: "Multichannel Marketing", category: "Channel/Strategic", tier: "core", status: "Verified" },
  { id: 77, name: "Multicultural Marketing", category: "Demographic/Culture", tier: "core", status: "Verified" },
  { id: 78, name: "Multi-Level Marketing (MLM)", category: "Distribution/Network", tier: "core", status: "Verified" },
  { id: 79, name: "Neuro Marketing", category: "Biometric/Science", tier: "core", status: "Verified" },
  { id: 80, name: "New Media Marketing", category: "Channel/Media", tier: "core", status: "Verified" },
  { id: 81, name: "Newsletter Marketing", category: "Content/Email", tier: "core", status: "Verified" },
  { id: 82, name: "Niche Marketing", category: "Segmentation/Strategy", tier: "core", status: "Verified" },
  { id: 83, name: "Non-Traditional Marketing", category: "Creative/Alternative", tier: "core", status: "Verified" },
  { id: 84, name: "Traditional Marketing", category: "Channel/Classic", tier: "core", status: "Merged" },
  { id: 85, name: "One-to-One Marketing", category: "Personalization/Direct", tier: "core", status: "Verified" },
  { id: 86, name: "Online Marketing", category: "Channel/Digital", tier: "core", status: "Verified" },
  { id: 87, name: "Outbound Marketing", category: "Push/Broadcast", tier: "core", status: "Verified" },
  { id: 88, name: "Outdoor Marketing", category: "Channel/Physical", tier: "core", status: "Verified" },
  { id: 89, name: "Out-of-Home (OOH) Marketing", category: "Channel/Physical", tier: "core", status: "Verified" },
  { id: 90, name: "Performance Marketing", category: "Metrics/ROI", tier: "core", status: "Verified" },
  { id: 91, name: "Permission Marketing", category: "Ethics/Pull", tier: "core", status: "Verified" },
  { id: 92, name: "Personalized Marketing", category: "Data/Personalization", tier: "core", status: "Verified" },
  { id: 93, name: "Persuasion Marketing", category: "Psychology/Influence", tier: "core", status: "Verified" },
  { id: 94, name: "Point-of-Sale (POS) Marketing", category: "Retail/Trigger", tier: "core", status: "Verified" },
  { id: 95, name: "Post-Click Marketing", category: "Analytics/Conversion", tier: "core", status: "Verified" },
  { id: 96, name: "Pay-Per-Click (PPC) Marketing", category: "Paid/Search", tier: "core", status: "Verified" },
  { id: 97, name: "Product Marketing", category: "Product/Go-to-Market", tier: "core", status: "Verified" },
  { id: 98, name: "Promotional Marketing", category: "Sales/Tactical", tier: "core", status: "Verified" },
  { id: 99, name: "Proximity Marketing", category: "Location/Tech", tier: "core", status: "Verified" },
  { id: 100, name: "Pull Marketing", category: "Strategic/Attraction", tier: "core", status: "Verified" },
  { id: 101, name: "Push Marketing", category: "Strategic/Broadcast", tier: "core", status: "Verified" },
  { id: 102, name: "Real-Time Marketing", category: "Speed/Context", tier: "core", status: "Verified" },
  { id: 103, name: "Referral Marketing", category: "Network/Trust", tier: "core", status: "Verified" },
  { id: 104, name: "Relationship Marketing", category: "Relational/Strategic", tier: "core", status: "Verified" },
  { id: 105, name: "Remarketing", category: "Retargeting/Digital", tier: "core", status: "Verified" },
  { id: 106, name: "Reply Marketing", category: "Engagement/Feedback", tier: "core", status: "Verified" },
  { id: 107, name: "Scientific Marketing", category: "Research/Methodology", tier: "core", status: "Verified" },
  { id: 108, name: "Search Engine Marketing (SEM)", category: "Search/Paid", tier: "core", status: "Verified" },
  { id: 109, name: "Self Marketing", category: "Personal Brand", tier: "core", status: "Verified" },
  { id: 110, name: "Service Marketing", category: "Service/Sector", tier: "core", status: "Verified" },
  { id: 111, name: "Shadow Marketing", category: "Competitive/Espionage", tier: "core", status: "Verified" },
  { id: 112, name: "Shopper Marketing", category: "Retail/Behavior", tier: "core", status: "Verified" },
  { id: 113, name: "Social Marketing", category: "Purpose/Non-Profit", tier: "core", status: "Verified" },
  { id: 114, name: "Social Media Marketing", category: "Channel/Digital", tier: "core", status: "Verified" },
  { id: 115, name: "Sports Marketing", category: "Sector/Event", tier: "core", status: "Verified" },
  { id: 116, name: "Stealth Marketing", category: "Ethics/Covert", tier: "core", status: "Verified" },
  { id: 117, name: "Street Marketing", category: "Field/Guerrilla", tier: "core", status: "Verified" },
  { id: 118, name: "Technical Marketing", category: "B2B/Product", tier: "core", status: "Verified" },
  { id: 119, name: "Telemarketing", category: "Direct/Channel", tier: "core", status: "Verified" },
  { id: 120, name: "Test-Driven Marketing", category: "Agile/Process", tier: "core", status: "Verified" },
  { id: 121, name: "Time Marketing", category: "Temporal/Context", tier: "core", status: "Verified" },
  { id: 122, name: "Trade Show Marketing", category: "B2B/Event", tier: "core", status: "Verified" },
  { id: 123, name: "Traditional Marketing", category: "Channel/Classic", tier: "core", status: "Merged" },
  { id: 124, name: "Undercover Marketing", category: "Ethics/Covert", tier: "core", status: "Verified" },
  { id: 125, name: "User-Generated Marketing", category: "Content/Community", tier: "core", status: "Verified" },
  { id: 126, name: "Vertical Marketing", category: "Industry/Sector", tier: "core", status: "Verified" },
  { id: 127, name: "Video Marketing", category: "Content/Channel", tier: "core", status: "Verified" },
  { id: 128, name: "Viral Marketing", category: "Network/Organic", tier: "core", status: "Verified", caseStudy: { brand: "Volkswagen", description: "'The Force' Super Bowl ad featured a boy in a Darth Vader costume trying to use the Force on household objects. Shared tens of millions of times, becoming one of the most shared commercials ever." } },
  { id: 129, name: "Web Marketing", category: "Channel/Digital", tier: "core", status: "Verified" },
  { id: 130, name: "Word-of-Mouth Marketing", category: "Trust/Network", tier: "core", status: "Verified", caseStudy: { brand: "Dropbox", description: "Referral program offered 500MB extra storage to both parties. Grew from 100K to 4M users in 15 months — a 3,900% increase driven almost entirely by word of mouth." } },
  { id: 131, name: "Youth Marketing", category: "Demographic/Age", tier: "core", status: "Verified" },
  { id: 132, name: "Reverse Marketing", category: "Demand/Procurement", tier: "core", status: "Verified" },
  { id: 133, name: "Viral Loop Marketing", category: "Digital/Network", tier: "core", status: "Merged" },
  { id: 134, name: "Lead Marketing", category: "Funnel/Acquisition", tier: "core", status: "Verified" },
  { id: 135, name: "Thought Leadership Marketing", category: "B2B/Content", tier: "core", status: "Verified" },
  { id: 136, name: "Public Sector Marketing", category: "Government/Non-Profit", tier: "core", status: "Verified" },
  { id: 137, name: "S2B Marketing", category: "Academic/Transfer", tier: "core", status: "Renamed" },
  { id: 138, name: "Transactional Marketing", category: "Sales/Short-term", tier: "core", status: "Verified" },
  { id: 139, name: "Above-the-Line (ATL) Marketing", category: "Mass/Media", tier: "core", status: "Verified" },
  { id: 140, name: "Affinity Marketing", category: "Partnership/Trust", tier: "core", status: "Verified" },
  { id: 141, name: "Augmented Marketing", category: "Tech/Enhancement", tier: "core", status: "Verified" },
  { id: 142, name: "Below-the-Line (BTL) Marketing", category: "Targeted/Direct", tier: "core", status: "Verified" },
  { id: 143, name: "Brick-and-Mortar Marketing", category: "Retail/Physical", tier: "core", status: "Renamed" },
  { id: 144, name: "Call-to-Action (CTA) Marketing", category: "Conversion/Tactical", tier: "core", status: "Verified" },
  { id: 145, name: "Close Range Marketing", category: "Proximity/Tech", tier: "core", status: "Verified" },
  { id: 146, name: "Concentrated Marketing", category: "Segmentation/Focus", tier: "core", status: "Verified" },
  { id: 147, name: "Consumer Marketing", category: "B2C/Sector", tier: "core", status: "Verified" },
  { id: 148, name: "Cross-Media Marketing", category: "Channel/Integration", tier: "core", status: "Verified" },
  { id: 149, name: "De-Marketing", category: "Scarcity/Reduction", tier: "core", status: "Verified" },
  { id: 150, name: "Defensive Marketing", category: "Competitive/Retention", tier: "core", status: "Verified" },

  // Extended Types (151-200)
  { id: 151, name: "Direct Mail Marketing", category: "Direct/Physical", tier: "extended", status: "Verified" },
  { id: 152, name: "E-Commerce Marketing", category: "Channel/Digital", tier: "extended", status: "Verified" },
  { id: 153, name: "Ethnic Marketing", category: "Demographic/Culture", tier: "extended", status: "Verified" },
  { id: 154, name: "Flanking Marketing", category: "Competitive/Strategy", tier: "extended", status: "Verified" },
  { id: 155, name: "Free Sample Marketing", category: "Trial/Acquisition", tier: "extended", status: "Verified" },
  { id: 156, name: "Goods Marketing", category: "Product/Category", tier: "extended", status: "Verified" },
  { id: 157, name: "Humanistic Marketing", category: "Ethics/Philosophy", tier: "extended", status: "Verified" },
  { id: 158, name: "Mass Marketing", category: "Broadcast/Scale", tier: "extended", status: "Verified" },
  { id: 159, name: "Mega Marketing", category: "Macro/Political", tier: "extended", status: "Verified" },
  { id: 160, name: "Network Marketing", category: "Distribution/People", tier: "extended", status: "Verified" },
  { id: 161, name: "Next Best Action (NBA) Marketing", category: "AI/Predictive", tier: "extended", status: "Verified" },
  { id: 162, name: "Offensive Marketing", category: "Competitive/Aggressive", tier: "extended", status: "Verified" },
  { id: 163, name: "Organizational Marketing", category: "B2B/Institutional", tier: "extended", status: "Verified" },
  { id: 164, name: "Partnership Marketing", category: "Strategic/Alliance", tier: "extended", status: "Verified" },
  { id: 165, name: "Person Marketing", category: "Personal/Individual", tier: "extended", status: "Verified" },
  { id: 166, name: "PR Marketing", category: "Communications/Brand", tier: "extended", status: "Verified" },
  { id: 167, name: "Retail Marketing", category: "Sector/Channel", tier: "extended", status: "Verified" },
  { id: 168, name: "Scarcity Marketing", category: "Psychology/Urgency", tier: "extended", status: "Verified" },
  { id: 169, name: "Seasonal Marketing", category: "Temporal/Context", tier: "extended", status: "Verified" },
  { id: 170, name: "Shotgun Marketing", category: "Mass/Untargeted", tier: "extended", status: "Verified" },
  { id: 171, name: "Synchro Marketing", category: "Supply/Demand Balance", tier: "extended", status: "Verified" },
  { id: 172, name: "Targeted Marketing", category: "Segmentation/Precision", tier: "extended", status: "Verified" },
  { id: 173, name: "Trade Marketing", category: "B2B/Channel", tier: "extended", status: "Verified" },
  { id: 174, name: "Voice Marketing", category: "Channel/Emerging", tier: "extended", status: "Verified" },
  { id: 175, name: "Duct Tape Marketing", category: "SME/Methodology", tier: "extended", status: "Removed" },
  { id: 176, name: "Augmented Reality (AR) Marketing", category: "Tech/Immersive", tier: "extended", status: "Verified" },
  { id: 177, name: "Small Business Digital Marketing", category: "SME/Sector", tier: "extended", status: "Verified" },
  { id: 178, name: "360\u00b0 Marketing", category: "Integrated/Full-Funnel", tier: "extended", status: "Verified" },
  { id: 179, name: "Live Chat Marketing", category: "Engagement/Real-time", tier: "extended", status: "Verified" },
  { id: 180, name: "Chatbot Marketing", category: "Automation/AI", tier: "extended", status: "Verified" },
  { id: 181, name: "Pragmatic Marketing", category: "Methodology/Product", tier: "extended", status: "Verified" },
  { id: 182, name: "Virtual Marketing", category: "Metaverse/Digital", tier: "extended", status: "Verified" },
  { id: 183, name: "Bluetooth Marketing", category: "Proximity/Tech", tier: "extended", status: "Verified" },
  { id: 184, name: "Threaded Marketing", category: "Content/Structure", tier: "extended", status: "Verified" },
  { id: 185, name: "Conversion-Led Marketing", category: "Funnel/Performance", tier: "extended", status: "Verified" },
  { id: 186, name: "Product Lifecycle Marketing", category: "Strategic/Timing", tier: "extended", status: "Verified" },
  { id: 187, name: "Below-the-Line (BTL) Marketing II", category: "Targeted", tier: "extended", status: "Merged" },
  { id: 188, name: "Hunger Marketing", category: "Scarcity/Anticipation", tier: "extended", status: "Verified" },
  { id: 189, name: "Outsource Marketing", category: "Operations/Strategy", tier: "extended", status: "Verified" },
  { id: 190, name: "Heritage Marketing", category: "Brand/History", tier: "extended", status: "Verified" },
  { id: 191, name: "Meta Marketing", category: "Self-Referential/Theory", tier: "extended", status: "Verified" },
  { id: 192, name: "Destination Marketing", category: "Tourism/Geo", tier: "extended", status: "Verified" },
  { id: 193, name: "Visual Marketing", category: "Content/Design", tier: "extended", status: "Verified" },
  { id: 194, name: "Video Marketing II", category: "Content/Channel", tier: "extended", status: "Merged" },
  { id: 195, name: "Right-Time Marketing", category: "Context/Temporal", tier: "extended", status: "Verified" },
  { id: 196, name: "Recruitment Marketing", category: "HR/Employer Brand", tier: "extended", status: "Verified" },

  // Emerging Types (197-228)
  { id: 197, name: "Agentic Marketing", category: "AI/Autonomous", tier: "emerging", status: "Verified", source: "Gartner 2026", caseStudy: { brand: "Salesforce Agentforce", description: "Deploys autonomous AI agents that independently handle campaign planning, audience segmentation, and content personalization 24/7 with minimal human oversight." } },
  { id: 198, name: "GEO (Generative Engine Optimization)", category: "AI/Search", tier: "emerging", status: "Verified", source: "Gartner 2025" },
  { id: 199, name: "Phygital Marketing", category: "Experiential/Tech", tier: "emerging", status: "Verified", source: "Journal of Interactive Marketing 2025" },
  { id: 200, name: "Web3 / Tokenized Marketing", category: "Blockchain/Decentralized", tier: "emerging", status: "Verified", source: "Grand View Research 2025" },
  { id: 201, name: "AI-Augmented Marketing", category: "AI/Biometric", tier: "emerging", status: "Verified", source: "ScienceDirect 2025" },
  { id: 202, name: "PLG (Product-Led Growth) Marketing", category: "SaaS/Business Model", tier: "emerging", status: "Verified", source: "OpenView 2025" },
  { id: 203, name: "Subscription Economy Marketing", category: "Recurring/Business Model", tier: "emerging", status: "Verified", source: "Fortune Business Insights 2025" },
  { id: 204, name: "Sequenced Solution Marketing", category: "Solution/Customer Journey", tier: "emerging", status: "Verified", source: "Journal of Service Research 2025" },
  { id: 205, name: "Livestream Commerce Marketing", category: "Social/Commerce", tier: "emerging", status: "Verified", source: "Coresight Research 2025", caseStudy: { brand: "Li Jiaqi on Taobao Live", description: "Sold 15,000 lipsticks in 5 minutes and generated $1.9B in pre-sales during a single 2021 Singles' Day session, demonstrating the massive revenue potential of livestream selling." } },
  { id: 206, name: "EGC (Employee-Generated Content) Marketing", category: "Internal/Authentic Influencer", tier: "emerging", status: "Verified", source: "Influencer Marketing Hub 2025" },
  { id: 207, name: "Conversational Commerce Marketing", category: "Messaging/AI", tier: "emerging", status: "Verified", source: "Infobip 2025" },
  { id: 208, name: "Social Commerce Marketing", category: "Social/Native Checkout", tier: "emerging", status: "Verified", source: "eMarketer 2025" },
  { id: 209, name: "Gamification Marketing", category: "Engagement/Behavioral", tier: "emerging", status: "Verified", source: "MarketsandMarkets 2025" },
  { id: 210, name: "Hyper-Personalized Marketing", category: "AI/Real-time", tier: "emerging", status: "Verified", source: "Grand View Research 2025" },
  { id: 211, name: "Predictive Marketing", category: "Data/Forecasting", tier: "emerging", status: "Verified", source: "Academic Standard" },
  { id: 212, name: "First-Party Data Marketing", category: "Privacy/Post-Cookie", tier: "emerging", status: "Verified", source: "IAB 2025" },
  { id: 213, name: "BRAVE Marketing", category: "Tech/Framework", tier: "emerging", status: "Verified", source: "ScienceDirect 2025" },
  { id: 214, name: "SDM (Sustainable Digital Marketing)", category: "Sustainability/Academic", tier: "emerging", status: "Verified", source: "573 Papers Meta-Analysis" },
  { id: 215, name: "Regenerative / Circular Marketing", category: "Sustainability/Beyond Green", tier: "emerging", status: "Verified", source: "Circular Economy Research 2025" },
  { id: 216, name: "Purpose-Driven Marketing", category: "ESG/Brand", tier: "emerging", status: "Verified", source: "Harvard Business Review 2025" },
  { id: 217, name: "Community-Led Growth Marketing", category: "Network/Organic", tier: "emerging", status: "Verified", source: "Orbit 2025" },
  { id: 218, name: "Ecosystem Marketing", category: "Platform/Network", tier: "emerging", status: "Verified", source: "BCG 2025" },
  { id: 219, name: "Gen Alpha Marketing", category: "Demographic/Future", tier: "emerging", status: "Verified", source: "Gartner 2025" },
  { id: 220, name: "Short-Form Video Marketing", category: "Content/TikTok/Shorts", tier: "emerging", status: "Verified", source: "Platform Analytics 2025" },
  { id: 221, name: "Zero-Click Marketing", category: "AI Search/SERP", tier: "emerging", status: "Verified", source: "SparkToro 2025" },
  { id: 222, name: "Audio/Podcast Marketing", category: "Channel/Emerging", tier: "emerging", status: "Verified", source: "Edison Research 2025" },
  { id: 223, name: "Privacy-First Marketing", category: "Compliance/Trust", tier: "emerging", status: "Verified", source: "GDPR/CCPA Evolution 2025" },
  { id: 224, name: "AI Emotion Marketing", category: "Biometric/Sentiment", tier: "emerging", status: "Verified", source: "Affectiva/ScienceDirect 2025" },
  { id: 225, name: "Autonomous Marketing", category: "AI/No-Code", tier: "emerging", status: "Verified", source: "HubSpot 2026" },
  { id: 226, name: "Omnichannel 2.0 Marketing", category: "Phygital/Unified", tier: "emerging", status: "Verified", source: "McKinsey 2025" },
  { id: 227, name: "Trust-Based Marketing", category: "Post-Trust/Transparency", tier: "emerging", status: "Verified", source: "Edelman Trust Barometer 2025" },
  { id: 228, name: "Quantum Marketing", category: "Future/Tech", tier: "emerging", status: "Verified", source: "IBM/Google Research 2025" },
];

export const tierColors: Record<Tier, string> = {
  core: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
  extended: "bg-amber-500/10 text-amber-600 border-amber-200",
  emerging: "bg-violet-500/10 text-violet-600 border-violet-200",
};

export const tierDotColors: Record<Tier, string> = {
  core: "bg-emerald-500",
  extended: "bg-amber-500",
  emerging: "bg-violet-500",
};

export const statusColors: Record<Status, string> = {
  Verified: "bg-emerald-100 text-emerald-700",
  Merged: "bg-sky-100 text-sky-700",
  Removed: "bg-red-100 text-red-700",
  Renamed: "bg-orange-100 text-orange-700",
};

export const uniqueCategories = [...new Set(marketingTypes.map((t) => t.category))].sort();

export const getCategoryDistribution = () => {
  const dist: Record<string, number> = {};
  marketingTypes.forEach((t) => {
    dist[t.category] = (dist[t.category] || 0) + 1;
  });
  return Object.entries(dist)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15)
    .map(([name, count]) => ({ name, count }));
};

export const getTierDistribution = () => {
  const dist: Record<Tier, number> = { core: 0, extended: 0, emerging: 0 };
  marketingTypes.forEach((t) => {
    dist[t.tier]++;
  });
  return [
    { name: "Core (1-150)", value: dist.core, fill: "var(--color-emerald-500)" },
    { name: "Extended (151-196)", value: dist.extended, fill: "var(--color-amber-500)" },
    { name: "Emerging (197-228)", value: dist.emerging, fill: "var(--color-violet-500)" },
  ];
};

export const getStatusDistribution = () => {
  const dist: Record<Status, number> = { Verified: 0, Merged: 0, Removed: 0, Renamed: 0 };
  marketingTypes.forEach((t) => {
    dist[t.status]++;
  });
  return [
    { name: "Verified", value: dist.Verified, fill: "var(--color-emerald-500)" },
    { name: "Merged", value: dist.Merged, fill: "var(--color-sky-500)" },
    { name: "Removed", value: dist.Removed, fill: "var(--color-red-500)" },
    { name: "Renamed", value: dist.Renamed, fill: "var(--color-orange-500)" },
  ];
};
