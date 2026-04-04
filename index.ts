import definePlugin from "@utils/types";

import "./style.css";

export default definePlugin({
    name: "HideStatusPrompts",
    description: "Hides the custom status prompt suggestions (e.g. 'Just finished playing...', 'Favourite collectible?')",
    authors: [{
        name: "saint",
        id: 0n,
    }],
});
