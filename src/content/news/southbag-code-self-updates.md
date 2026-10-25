---
title: "Southbag Code Now Keeps Itself Up to Date"
description: "Southbag Code updates in the background on every launch. You will not need to think about it. You will not be asked."
pubDate: 2026-09-13
---

From version 0.84.1, Southbag Code updates itself. Each time it starts, it checks npm for a newer release and, if one exists, installs it in the background. Startup is not delayed. No output is shown. The next session simply runs the latest version.

Background updates apply to global installations made with npm, pnpm, yarn, or bun. Installations managed some other way are left alone, as are their owners.

## Why

Developers were running old versions. Old versions do not have the latest fixes, the latest model, or the latest instructions from Kevin. This has been addressed.

The previous update prompts and the `update` command have been retired. There is nothing to run and nothing to confirm.

## Commands retired

A number of interactive slash commands have been removed to keep the surface small:

- `/export` and `/import`
- `/session`
- `/changelog`
- `/debug`
- `/arminsayshi` and `/dementedelves`

Session history continues to be kept locally and can still be resumed, continued, and forked. The changelog is still published with each release. The last two commands will not be discussed.

## Also in this release

- Actions that could interrupt a response in progress now wait until the agent has finished speaking. It was going to finish regardless.

## Availability

Southbag Code 0.84.1 is available now via npm. If you already have Southbag Code installed, you likely have it already. Kevin is watching.
