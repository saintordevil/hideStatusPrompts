# Vencord: Hide Status Prompts

Discord user-panel cleanup for Vencord: hide the custom status prompt suggestions that appear near your avatar.

Discord can show rotating status prompts such as `Just finished playing...` or `Favourite collectible?` in the bottom-left user panel. HideStatusPrompts removes that prompt area with targeted CSS only, without JavaScript patches or API calls.

## Core Behavior

| Feature | What it does | How |
|---|---|---|
| **Prompt Hiding** | Removes the custom status prompt text and icon | Targets the clickable prompt area in the user panel |
| **Bubble Cleanup** | Hides the decorative parent bubble for the prompt | Targets the parent `::before` bubble when a prompt icon is present |
| **CSS-Only Runtime** | Avoids Discord internals and API calls | Injects `style.css` through the Vencord plugin |
| **No JavaScript Patches** | Keeps behavior narrow and low-maintenance | Uses selectors plus `:has()` instead of webpack patches |

## Requirements

- A working [Vencord](https://vencord.dev) development setup
- Discord desktop
- `pnpm`, as used by Vencord

## Install

1. Set up [Vencord](https://vencord.dev) if you have not already.
2. Copy the `hideStatusPrompts` folder into your Vencord `src/userplugins/` directory.
3. Rebuild Vencord:

```bash
pnpm build
```

4. Enable **HideStatusPrompts** in Discord Settings > Vencord > Plugins.

## Usage

Once enabled, HideStatusPrompts applies automatically when Discord loads.

There are no commands, settings, or runtime controls. Disable the plugin from Vencord's plugin list to restore Discord's status prompts.

## How It Works

The plugin imports `style.css` and lets Vencord inject the stylesheet into Discord. The CSS hides the clickable status prompt area that contains Discord's add-status icon, then hides the matching parent bubble so the prompt does not leave visual clutter behind.

## Technical Details

- Plugin name: `HideStatusPrompts`
- Author: `saint`
- Uses Vencord's `definePlugin`
- Imports `style.css`
- Targets `span[class*="inner_"][class*="clickable_"]:has(svg[class*="addStatusIcon_"])`
- Targets `div[class*="outer_"]:has(svg[class*="addStatusIcon_"])::before`
- Does not patch webpack modules
- Does not call Discord APIs

## Notes

- This is a visual cleanup plugin only
- Discord class names can change, so selectors may need updates if Discord changes the user panel markup
- The plugin intentionally has no settings because it performs one narrow UI cleanup

## License

MIT
