# Shareable Map List

Turn a newline-separated list of places into a numbered, shareable map. Runs entirely in the browser; no backend.

## Features
- Paste a list of locations; click "Add to Map" to geocode and plot numbered pins
- Tags: success (green), failure (red), remove (×); drag to reorder and numbers update everywhere
- Click a tag to pan and open its popup; popups include an "Open in Google Maps" link (query-based URL)
- "Zoom to Show All" button fits the map to all current pins
- Shareable via URL; the list is encoded in the query string and auto-plots on load
- Local geocoding cache (success and failure) with ~1 req/sec network rate limiting per Nominatim policy; cache can be cleared from the About modal

## How to Use
1. Paste one place per line into the textarea
2. Click "Add to Map"
3. Optionally reorder by dragging tags; remove with ×
4. Click "Copy Share Link" (or "Copy Link" in the header) to copy a URL others can open

## URL Parameters
If both are present, `l` takes priority.

- `l` (preferred): Base64-encoded newline-separated list
  - Example: `?l=RWlmZmVsZSBUb3dlciwgUGFyaXMKQnVja2luZ2hhbSBQYWxhY2U%3D`
- `list`: Raw, URL-encoded newline-separated list (use `%0A` for newlines)
  - Example: `?list=Eiffel%20Tower%2C%20Paris%0ABuckingham%20Palace%2C%20London`

On load, the app parses these parameters, pre-fills the textarea, and auto-plots.

## Tech
- Leaflet + OpenStreetMap tiles
- Nominatim geocoding (OpenStreetMap). Results cached locally; failures cached too
- Tailwind for UI styling

## Development
This is a single HTML file. Open `index.html` directly or serve with any static server. With Jekyll:

```bash
bundle exec jekyll serve --livereload
```

## Credits
Data © OpenStreetMap contributors. Respect Nominatim usage policy.
