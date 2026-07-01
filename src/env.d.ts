/// <reference path="../.astro/types.d.ts" />

declare namespace App {
  interface Locals {
    user: import("./lib/identity").IdentityUser | null;
  }
}
