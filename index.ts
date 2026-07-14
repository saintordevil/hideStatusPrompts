/*
 * Vencord, a Discord client mod
 * Copyright (c) 2026 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./style.css";

import definePlugin from "@utils/types";

export default definePlugin({
    name: "HideStatusPrompts",
    description: "Hides the custom status prompt suggestions (e.g. 'Just finished playing...', 'Favourite collectible?')",
    authors: [{
        name: "saintordevil",
        id: 0n,
    }],
});
