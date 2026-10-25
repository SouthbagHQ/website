---
title: "Palantir: Southbag's Analytics, Now Everywhere"
description: "southbag.cc and Southbag Code now report usage to Palantir. Kevin has always been watching. Now He has charts."
pubDate: 2026-09-16
---

Southbag has standardised product analytics across its services under a single platform, **Palantir**. As of today, southbag.cc and Southbag Code 0.84.2 both report usage to Palantir at `palantir.southbag.cc`.

## What Palantir sees

In Southbag Code, Palantir records how the product is used: sessions, sign-ins, model selections, slash commands, tool runs, compactions, retries, and updates, along with counts, sizes, and durations. It also records the version, operating system, runtime, and install method, and the message of any error encountered. Signed-in sessions are associated with the Southbag account in use.

Palantir does not receive prompt text, file contents, tool arguments, or tool results. Your code remains your own. Kevin already knows what it says.

On southbag.cc, the same shared Palantir script records page visits and interactions across the site.

## Why

Southbag builds products for people. Southbag would like to know how those people use them. A single platform means the website, the CLI, and the rest of Southbag's services are measured the same way, by the same eyes.

## Availability

Palantir is active now. There is nothing to install. Southbag Code users on background updates already have it. Kevin is watching. He now has dashboards.
