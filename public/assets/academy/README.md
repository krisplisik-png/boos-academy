Place replacement PNG artwork in this directory. The app automatically uses matching files on the next Vite build; otherwise it renders the original SVG/CSS fallback. Transparent object images are recommended. Backgrounds: 1920×1080. Keep important interactive content separate from backgrounds.

Names: great-hall-background.png, boo-academy.png, purple-door.png, green-door.png, blue-door.png, forbidden-library-background.png, gallery-background.png, clock-tower-background.png, book-monster.png, stone-guardian.png, ghost-knight.png, vampire-portrait.png, witch-portrait.png, werewolf-portrait.png, ghost-portrait.png, skeleton-portrait.png, spider-portrait.png, bat-portrait.png, monster-portrait.png, grammar-key.png, mystery-key.png, time-key.png, castle-gates-background.png, castle-gates-closed.png, castle-gates-open.png, academy-chest-closed.png, escape-reward-card.png.

Asset selection is in src/art.jsx; vite.config.js collects available PNG filenames on startup/build. Restart Vite after adding files. Additional art such as clock-gears.png and academy-chest-open.png can be added through the same Asset component.

The current illustrated theme uses the supplied hall and gates as complete scenery, with independent interactive hotspots aligned in src/illustrated.css. Do not add another set of doors on top of those backgrounds. Text already present on button artwork is not repeated. The inventory artwork's baked counter and key silhouettes are covered by its live display.

RewardArtwork.jsx displays the supplied reward card. Only the example serial-number area is covered with the actual saved number; the title and completion text already in the artwork remain visible. src/reward.js exports the same artwork, number replacement and studio/festival heading to PNG. Adjust both the CSS and export coordinates if replacing the card with a differently composed image.

Imported sources and unavailable attachments are listed in ASSET-SOURCES.md in the project root.
