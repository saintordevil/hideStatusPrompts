# HideStatusPrompts

A [Vencord](https://vencord.dev) plugin that hides the custom status prompt suggestions that appear in Discord's user panel (e.g. "Just finished playing...", "Favourite collectible?").

## What It Does

Discord periodically displays clickable status prompt suggestions near your avatar in the bottom-left user panel. This plugin removes them entirely using targeted CSS, giving you a cleaner interface.

**Before:** Discord shows rotating status suggestions with an icon and prompt text.

**After:** The prompt area is completely hidden — no layout shift, no visual clutter.

## Installation

1. Set up [Vencord](https://vencord.dev) if you haven't already
2. Copy the `hideStatusPrompts` folder into your Vencord `src/userplugins/` directory
3. Rebuild Vencord:
   ```bash
   pnpm build
   ```
4. Enable **HideStatusPrompts** in Discord → Settings → Vencord → Plugins

## How It Works

Pure CSS injection — no JavaScript patches or API calls. The plugin targets the specific DOM elements that contain the status prompt using class-name selectors and the `:has()` pseudo-class, hiding both the prompt text and its decorative bubble.

## License

MIT
