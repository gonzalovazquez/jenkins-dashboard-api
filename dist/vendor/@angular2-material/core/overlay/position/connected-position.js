"use strict";
/**
 * The points of the origin element and the overlay element to connect.
 * @internal
 */
var ConnectionPair = (function () {
    function ConnectionPair(origin, overlay) {
        this.originX = origin.originX;
        this.originY = origin.originY;
        this.overlayX = overlay.overlayX;
        this.overlayY = overlay.overlayY;
    }
    return ConnectionPair;
}());
exports.ConnectionPair = ConnectionPair;
//# sourceMappingURL=/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-IydvmmBU.tmp/0/core/overlay/position/connected-position.js.map