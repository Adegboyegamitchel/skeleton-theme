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
3. **Everything else** — done this session:
   - Blog: card grid with tag filtering; article page with tags and a
     working comments form.
   - Added a global `.rte` rich-text style (headings/lists/blockquotes)
     to critical.css — every content template referenced it but it was
     never actually defined.
   - 404 page: added a search box next to "back to shopping".
   - Password page: added the standard "notify me when we launch" email
     capture form alongside the storefront-password form.
   - New contact page template (`page.contact.json` + a `contact-form`
     section using Shopify's built-in contact form) — skeleton didn't
     ship one.
   - Added a logo image-picker setting (skeleton referenced
     `settings.logo` in the gift card template but never defined the
     setting) — wired into the header with a shop-name-text fallback.
4. **Compliance pass** (Lighthouse performance/accessibility, i18n) — not
   started.

All work is theme-check clean (0 offenses) and has been verified live in
a browser against the dev store at each checkpoint. Every checkpoint is
committed and pushed to `main`.

## Next steps

- Confirm (or replace) the "Ease" working theme name with the user.
- Phase 4 (the only phase left): Lighthouse performance (≥60) and
  accessibility (≥90) audit, full i18n pass, before the actual Theme
  Store submission flow (Partner Dashboard → Themes → "Submit a theme" —
  not yet clicked).
