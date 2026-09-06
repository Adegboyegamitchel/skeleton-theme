# Ease — Shopify Theme Store Submission

## What this is

A generic, sellable Shopify theme ("Ease" — working name, not yet
confirmed) built for submission to the **Shopify Theme Store**. Built on
Shopify's official Skeleton theme (a hard Theme Store requirement — Dawn-
or Horizon-derived themes are not eligible). Uses ErgoLunch's visual
language (Playfair Display + Inter, sage-green/navy/off-white palette) as
creative inspiration only; the section/page architecture is original,
per the Theme Store's architectural-uniqueness requirement.

This is a separate project from the ErgoLunch storefront theme
(`Downloads/ergolunch-shopify-theme`), not a rebrand of it.

- Local: `C:\Users\HP\Downloads\skeleton-theme`
- GitHub: github.com/Adegboyegamitchel/skeleton-theme (public)
- Dev store: ease-theme-dev.myshopify.com (storefront password: `tewngu`)

## Status

Following an agreed 4-phase plan:

1. **Foundation** — done (design tokens/colors/fonts, accessible type
   scale, multi-level header nav + mobile nav, footer with policy links
   and payment icons).
2. **Core commerce templates** — done this session:
   - Product page: composable theme blocks (title/vendor/price/
     description/variant-picker/buy-buttons) kept in sync via a
     `variant:change` custom event; accelerated checkout, Shop Pay
     Installments, local pickup availability.
   - Collection page: faceted filtering, sorting, responsive grid,
     pagination, mobile filter drawer.
   - Cart page: line items with options/selling plans/discounts, order
     note, quantity steppers, empty state.
   - Search page + predictive search: type tabs, faceted/sorted results,
     mixed product/article/page rendering, header search flyout with a
     live predictive-search dropdown.
   - Shared snippets (`facet-filters`, `facet-sort`, `active-filters`,
     `product-card`) reused across collection and search.
3. **Everything else** (blog/article, gift card, 404, password, contact
   page template) — not started.
4. **Compliance pass** (Lighthouse performance/accessibility, i18n) — not
   started.

All work is theme-check clean (0 offenses) and has been verified live in
a browser against the dev store at each checkpoint. Every checkpoint is
committed and pushed to `main`.

## Next steps

- Confirm (or replace) the "Ease" working theme name with the user.
- Phase 3: blog/article templates, gift card template, 404 page, password
  page, and a contact page template (skeleton doesn't ship one).
- Phase 4: Lighthouse performance (≥60) and accessibility (≥90) audit,
  full i18n pass, before the actual Theme Store submission flow (Partner
  Dashboard → Themes → "Submit a theme" — not yet clicked).
