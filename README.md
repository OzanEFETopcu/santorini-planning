# Santorini · 17–22 August

A single-page trip planner: an interactive map of every candidate place, a day-by-day
skeleton, and a ranked list of options per category.

- `index.html` — the app (tabs: Map · Overview · Days · Ideas)
- `places.js` — **the only file to edit.** One line per place; the map and the Ideas list
  both read from it. Category order in `CATS` is also the section order.
- `img/` — one image per place. Sourced from the venue's own site, Wikimedia Commons, or a
  satellite crop of its coordinates; each entry records which.

Map tiles come from CARTO / OpenStreetMap / Esri and need a network connection.
