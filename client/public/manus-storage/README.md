# manus-storage

The site's page components reference these files by these exact names. They
originally lived on the Manus preview host, which now returns 404 for all of
them, so they are served from this folder instead.

Filenames must match exactly — the paths are hard-coded in `client/src`.

## Present

| File | Source | Notes |
|---|---|---|
| `pasted_file_MwGanH_image_7f7a812c.png` | recovered from git history (`client/public/logo192.png`) | Diamond Home Services crest. Genuine, but only 192×192 — replace with the full-resolution original when available. |
| `diamond-girl-logo_26e7435d.png` | copy of `client/public/logos/diamond-girl.png` | A Diamond Girl artwork. Mirrors how `/logos/diamond-cutz.png` serves as the Diamond Cutz logo. **Verify this is the intended image.** |
| `514ED805-30BB-4F65-B28C-DBEDD694640B_59fc3e61.png` | copy of `client/public/og-preview.jpg` | "Built for the Big Leagues" home hero. Genuine artwork but only 1024×400 — it will look soft full-bleed. Replace with the full-resolution original. |

## Still needed

Drop these in with these exact filenames. No code changes are required — the
components already point at them.

| File | What it is | Used on |
|---|---|---|
| `diamond-cutz-hero-cropped_728f233e.png` | Green "BEAUTIFUL LAWNS. DIAMOND STANDARD." banner — Cutz logo, "Call or text Mike", four-icon strip | Home, Diamond Cutz |
| `1FF4FDBD-00A7-477C-89BC-36C8611DB049_3ec7f2e3.png` | Pink/maroon "DIAMOND CLEAN. SPARKLING RESULTS." banner — mascot, "Call or text Lydine", four-icon strip | Home, Diamond Girl |
| `mike-lydine-couple_d892a85f.png` | Photograph of Mike & Lydine | Home "Our Story", About gallery |
| `E30554CE-B3FB-49F8-9E75-515FEE6A95BB_09584a32.png` | Navy "FAMILY. PRIDE. DIAMOND STANDARD." banner — mission/values icons, gold "Diamond Shine Every Time" bar | About hero |

## Note on `heroes/`

`client/public/heroes/*.png` are **logo artwork on a baseball field**, not these
designed marketing banners. They are not substitutes for the four files above.
