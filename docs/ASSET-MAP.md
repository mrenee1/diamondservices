# Diamond Home Services asset map

This repository is the source of truth for production images. The site no longer depends on Manus storage or the Manus runtime.

## Production assets

| Original upload | Repository path | Site use |
| --- | --- | --- |
| `EEBD545B-9238-4702-B67F-409525E22CB8.jpeg` | `client/public/family/mike-lydine.jpg` | Home owner section and featured About photo |
| `ABB77F79-CB39-4C16-909F-3198E56E8874.jpeg` | `client/public/brand/diamond-girl-baseball.jpg` | A Diamond Girl service artwork on Home |
| `2E80EFF5-F598-4FDB-AF98-DCB8967DA6A7.jpeg` | `client/public/family/mikayla-austin.jpg` | About family gallery |
| `00FBC247-BB67-4F48-8683-3A8B1A12B102.jpeg` | `client/public/brand/diamond-home-services-combined.jpg` | About business overview |
| Generated from the original hero reference | `client/public/backgrounds/big-leagues-hero.png` | Responsive Home hero background |
| Original combined stadium composition | `client/public/heroes/home-hero.png` | Home hero artwork behind the live headline and CTA copy |
| `image_2.png` | `client/public/heroes/home-hero.jpg` | Exact supplied Home hero artwork |
| `image_3.png` | `client/public/heroes/diamond-cutz-hero.png` | Exact supplied Diamond Cutz hero artwork |
| `image_4.png` | `client/public/heroes/diamond-girl-hero.jpg` | Exact supplied A Diamond Girl hero artwork |
| `image_1.png` | `client/public/logos/diamond-home-services.png` | Exact supplied transparent Diamond Home Services logo |

`2E80EFF5-F598-4FDB-AF98-DCB8967DA6A7(1).jpeg` is byte-for-byte identical to the Mikayla and Austin upload, so it is intentionally not stored twice.

## Design references (not deployed as page content)

| Reference | Repository path | Purpose |
| --- | --- | --- |
| Original home hero | `docs/reference/original-home-hero.png` | Primary desktop fidelity target |
| Complete homepage source of truth | `docs/reference/homepage-source-of-truth.png` | Current header, combined hero artwork, copy, and first content section reference |
| Alternate original home hero | `docs/reference/original-home-hero-alt.jpg` | Secondary comparison |
| Manus lawn page screenshot | `docs/reference/manus-lawn-page.jpg` | Records the incorrect replacement layout |
| Manus cleaning page screenshot | `docs/reference/manus-cleaning-page.jpg` | Records the incorrect replacement layout |

## Storage policy

- Production images live under `client/public/` and deploy with the Vercel build.
- Design-only screenshots live under `docs/reference/` and are not copied into the production output.
- New image references must use stable root-relative paths such as `/family/mike-lydine.jpg`.
- Do not add `/manus-storage/` URLs or Manus runtime packages.
- `pnpm verify:assets` checks every local image reference before each production build and blocks deployment if an asset is missing.
