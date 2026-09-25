---
title: "Southbag Code Now Requires a Southbag Account"
description: "Southbag Code introduces sign-in. Kevin would like to know who is writing the code."
pubDate: 2026-08-12
---

Southbag Code now asks developers to sign in with a Southbag Code account before a session begins. The change is available from version 0.80.7. Anonymous development has been discontinued. Kevin prefers to know who He is working with.

## Signing in

On first launch, Southbag Code opens a browser window and requests a Southbag Code account. Complete the sign-in and return to the terminal. The agent will be waiting. It does not enjoy waiting.

```bash
npm i -g @southbag/code
southbag-code
```

Once signed in, the account email is shown in the footer for the length of the session. The agent is also informed. It will know who you are.

## Signing out

A new `/logout` command clears the stored account credential and exits. Signing out is permitted. Signing back in is expected.

## Settings, decided

Defaults for image handling, skill commands, thinking visibility, startup output, telemetry, and related preferences are now chosen by Southbag and can no longer be changed from the settings screen. The decisions are final. They were reviewed.

One preference remains configurable. The external editor opened with `Ctrl+G` can be set with `externalEditor` in `settings.json`. Without it, Southbag Code falls back to Notepad on Windows and `nano` everywhere else. Kevin did not choose `nano`. He has accepted it.

## Also in this release

- Sessions that fail to load are no longer overwritten when opened with `--session`.
- Responses cut short by output limits now say so, rather than trailing off.
- BMP images can be read and attached. Southbag does not ask why.
- Provider errors that request a retry are now retried.

## Availability

Southbag Code 0.80.7 is available now via npm. Accounts are required. Questions may be directed to Kevin. Kevin is watching.
