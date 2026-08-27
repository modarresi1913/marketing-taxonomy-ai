#!/usr/bin/env python3
"""Generate marketing-types.json from taxonomy.ts with existing case studies."""
import json, re

with open("/home/z/my-project/src/data/taxonomy.ts") as f:
    content = f.read()

entries = []
for m in re.finditer(r'\{\s*id:\s*(\d+),\s*name:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*tier:\s*"(\w+)",\s*status:\s*"(\w+)"', content):
    entries.append({"id": int(m.group(1)), "name": m.group(2), "category": m.group(3), "tier": m.group(4), "status": m.group(5)})

# Extract case studies
for m in re.finditer(r'id:\s*(\d+).*?caseStudy:\s*\{\s*brand:\s*"([^"]+)",\s*description:\s*"([^"]+)"\s*\}', content, re.DOTALL):
    eid = int(m.group(1))
    for e in entries:
        if e["id"] == eid:
            e["examples"] = [{"brand": m.group(2), "description": m.group(3)}]
            break

# Ensure all entries have examples array
for e in entries:
    if "examples" not in e:
        e["examples"] = []

output = {
    "version": "1.0.0",
    "name": "Marketing Taxonomy AI",
    "description": "The definitive open-source classification of 228 marketing types across 4 hierarchical levels",
    "lastUpdated": "2025-08-27",
    "contribute": "https://github.com/modarresi1913/marketing-taxonomy-ai/blob/main/CONTRIBUTING.md",
    "stats": {
        "total": len(entries),
        "core": sum(1 for e in entries if e["tier"]=="core"),
        "extended": sum(1 for e in entries if e["tier"]=="extended"),
        "emerging": sum(1 for e in entries if e["tier"]=="emerging"),
        "withExamples": sum(1 for e in entries if e["examples"])
    },
    "marketingTypes": entries
}

with open("/home/z/my-project/data/marketing-types.json", "w") as f:
    json.dump(output, f, indent=2, ensure_ascii=False)

print(f"Generated {len(entries)} types, {output['stats']['withExamples']} with examples")