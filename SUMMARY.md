# Isoken — Shopify Theme Store Submission

## What this is

A generic, sellable Shopify theme, **submitted to the Shopify Theme
Store under the final name "Isoken"** (working name "Ease" had to be
replaced — it was already taken by an existing Theme Store theme, caught
by Shopify's own submission validator). Built on Shopify's official
Skeleton theme (a hard Theme Store requirement — Dawn- or
Horizon-derived themes are not eligible). Uses ErgoLunch's visual
language (Playfair Display + Inter, sage-green/navy/off-white palette) as
creative inspiration only; the section/page architecture is original,
per the Theme Store's architectural-uniqueness requirement.

This is a separate project from the ErgoLunch storefront theme
(`Downloads/ergolunch-shopify-theme`), not a rebrand of it.

- Local: `C:\Users\HP\Downloads\skeleton-theme`
- GitHub: github.com/Adegboyegamitchel/skeleton-theme (public)
- Dev store: ease-theme-dev.myshopify.com (storefront password: `tewngu`)
  — "Isoken 1.0.0 (submission demo)" is now the **live/published**
  theme there, used as the submission's demo store link and screenshots.
- Documentation/support page: https://claude.ai/code/artifact/4bf161db-e09d-4ebe-9899-b4bf603ae146
  (FAQ, support policy, and a `mailto:`-based contact form routed to
  isokandone@gmail.com — built as a Claude Artifact since it needed to
  be genuinely public, which ruled out using the `db` capability).

## Status: SUBMITTED

Shopify's confirmation: *"Thanks for submitting your theme. We'll
review and contact you soon with next steps. You can edit your theme
before review starts. During review, it will be locked."*

Work leading up to submission, across an agreed 4-phase build plan plus
a final requirements audit and the submission mechanics themselves:

1. **Foundation** — design tokens/colors/fonts, accessible type scale,
   multi-level header nav + mobile nav, footer with policy links and
   payment icons.
2. **Core commerce templates** — product page (composable theme blocks
   synced via a custom event), collection page (faceted filtering,
   sorting, pagination), cart page (line items, discounts, quantity
   steppers), search page + predictive search.
3. **Everything else** — blog with tag filtering, 404/password pages,
   a new contact page template, a logo setting.
4. **Compliance pass** — found the home page was still Skeleton's
   placeholder "Hello, World!" tutorial content and replaced it; ran
   real Lighthouse audits (accessibility 96-100, performance 60-75);
   found and added two more mandatory features that had been missed
   (subscriptions/selling plans, language/currency selector), plus a
   featured-product section and newsletter signup.
5. **Requirements audit pass** — fetched the official requirements page
   fresh and checked every line item against the actual files. Found
   and fixed: cart accelerated checkout + unit pricing, Follow on Shop
   button, variant swatches, product recommendations (wired twice —
   related and complementary), the mandatory Custom Liquid section and
   block, social media icons, a favicon setting, collection image
   display, list-collections pagination, a gift card QR code, and
   comment-moderation messaging. Also caught a real pre-existing
   invalid-JSON bug in the schema locale file that `theme check` never
   flagged.
6. **Submission** — built the documentation/support page (a public
   Claude Artifact, since the theme's required support contact form and
   docs link had to be reachable by anyone, not just the account's own
   org); packaged and uploaded the theme zip; fixed real issues
   Shopify's own validator caught on the first attempt (`Ease` name
   collision, a malformed `settings_data.json` with no preset); renamed
   to Isoken; published the theme live on the dev store and captured
   exact-dimension screenshots (catching and fixing a real mobile
   header bug along the way — a long shop name could push the cart icon
   off-screen at common phone widths); filled in the listing (tagline,
   industry, catalog size, SEO description, testing notes, uniqueness
   and experience answers); submitted.

All theme work is theme-check clean (0 offenses) and was verified live
in a browser at each checkpoint. Every checkpoint is committed and
pushed to `main`.

## Next steps

Waiting on Shopify's review response. No further action is pending on
this project unless/until Shopify contacts about the review outcome.
