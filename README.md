# Hollywood Schematics
Consume this module in your project if you need programmatic access to Hollywood's settings outside of the powertool environment. The definitions in `scmtypes.ts` are for reference purposes only, so copy what you need into your project instead of depending directly on this repository.

### Generating JSON
You can generate a `JSON` definitions file named `schematics.json` with [Deno](https://deno.land) using the following command.
```sh
$ deno run --allow-read --allow-write scmgenerate.ts
```