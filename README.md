# Macon Bacon — Demo Website

A modern, professional demo website for the Macon Bacon, a Coastal Plain League collegiate summer baseball team based in Macon, Georgia.

## Pages

| Page | File | Description |
| --- | --- | --- |
| Home | `index.html` | Hero with live countdown, featured promo, news cards, upcoming games, featured merch, newsletter |
| Tickets | `tickets.html` | Single-game tiers, interactive seating chart, season plans, group outings, premium experiences |
| Schedule | `schedule.html` | Full 2026 schedule with filters (home/away/promo/fireworks/giveaway), live standings widget |
| Shop | `shop.html` | Featured collections, category filters, product grid with add-to-cart, "why shop with us" |
| Team | `team.html` | Coaching staff, full roster (pitchers + position players), front office, mascot spotlight |
| Partners | `sponsors.html` | Reach stats, sponsorship benefits, current partners by tier, packages, partnership CTA |
| Community | `community.html` | Outreach programs, 2026 calendar, featured story, volunteer sign-up form |
| Contact | `contact.html` | Multi-field contact form, stadium info, dept-specific contacts, FAQ |

## Tech

- Plain HTML, CSS, and vanilla JavaScript — no build step required
- Mobile-first responsive design (breakpoints at 1024px and 720px)
- Custom design system in `css/styles.css` (color tokens, typography, components)
- Interactive: filters, mock cart, seating chart, countdown timer, animated marquee

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Brand

- **Primary**: Bacon Red `#8b1d2c`
- **Accent**: Sizzle Gold `#f5b041`
- **Neutral**: Charcoal `#1d1d1d`, Cream `#faf6ef`
- **Display font**: Bebas Neue
- **Body font**: Inter

## Notes

This is a demo site — forms, cart, and seating selection use mock interactions only and do not submit to a backend.
