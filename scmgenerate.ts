/**
 * Generate JSON definitions from schematics. Use Deno: https://deno.land/
 * $ deno run --allow-read --allow-write scmgenerate.ts
 */

import { parse } from 'https://deno.land/std@0.170.0/encoding/yaml.ts'

const [encoder, decoder] = [new TextEncoder(), new TextDecoder('utf-8')]
const schematics = parse(decoder.decode(await Deno.readFile('schematics.yaml')))
await Deno.writeFile(
  'schematics.json',
  encoder.encode(JSON.stringify(schematics, undefined, 4))
)
