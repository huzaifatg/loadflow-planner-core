# LoadFlow Planner Core

Open-source logistics planning and capacity management utilities extracted from the LoadFlow platform.

## Overview

LoadFlow Planner Core provides reusable TypeScript utilities for fleet planning, delivery allocation, and capacity validation.

The project is designed for developers building:

* Fleet management software
* Dispatch systems
* Transportation platforms
* Logistics planning tools
* Delivery management applications

Unlike many routing-focused solutions, LoadFlow Planner Core focuses on the planning layer of logistics operations, helping ensure that freight assignments respect physical vehicle constraints.

---

## Why This Exists

Many logistics tools focus heavily on mapping and routing.

However, before a route can be executed, dispatchers must answer a much simpler question:

**Can this freight actually fit in the truck?**

LoadFlow Planner Core focuses on:

* Weight capacity validation
* Fleet utilization calculations
* Delivery allocation helpers
* Capacity planning workflows
* Future support for volume and pallet constraints

The goal is to provide a lightweight, reusable toolkit that can be integrated into larger logistics applications.

---

## Features

### Current

* Weight capacity validation
* Fleet utilization calculations
* Planning utilities
* TypeScript-first implementation
* Lightweight and framework-agnostic architecture

### Planned

* Volume capacity support
* Pallet capacity validation
* Delivery sequencing utilities
* Fleet utilization analytics
* Additional planning algorithms
* Extended validation helpers

---

## Installation

```bash
npm install loadflow-planner-core
```

Or clone directly:

```bash
git clone https://github.com/huzaifatg/loadflow-planner-core.git
```

---

## Example Usage

```typescript
import {
  calculateUtilization,
  validateCapacity
} from "loadflow-planner-core";

const utilization = calculateUtilization({
  currentWeight: 5000,
  maxCapacity: 10000
});

console.log(utilization);

const result = validateCapacity({
  currentWeight: 5000,
  additionalWeight: 2000,
  maxCapacity: 10000
});

console.log(result);
```

---

## Roadmap

### Phase 1

* Weight validation
* Utilization calculations
* Core planning helpers

### Phase 2

* Volume capacity support
* Pallet validation
* Expanded TypeScript types

### Phase 3

* Delivery sequencing
* Fleet analytics
* Planning optimization utilities

---

## Contributing

Contributions are welcome.

Areas currently open for contribution include:

* Capacity planning algorithms
* Volume constraint validation
* Pallet capacity calculations
* Delivery sequencing helpers
* Analytics utilities
* Documentation improvements

Please open an issue before submitting major changes.

---

## Development

```bash
npm install
npm run build
npm test
```

---

## License

MIT License

---

## About

LoadFlow Planner Core is maintained as an open-source project focused on reusable logistics planning utilities.

It originated from the broader LoadFlow platform and is being developed independently to encourage community contributions and experimentation around capacity-aware logistics planning.
