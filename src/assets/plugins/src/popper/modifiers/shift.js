import getClientRect from '../utils/getClientRect';

/**
 * Modifier used to shift the popper on the start or end of its reference element side
 * @method
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
export default function shift(data) {
    const placement = data.placement;
    const basePlacement = placement.split('-')[0];
    const shiftvariation = placement.split('-')[1];

    // if shift shiftvariation is specified, run the modifier
    if (shiftvariation) {
        const reference = data.offsets.reference;
        const popper = getClientRect(data.offsets.popper);
        const isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
        const side = isVertical ? 'left' : 'top';
        const measurement = isVertical ? 'width' : 'height';

        const shiftOffsets = {
            start: {
                [side]: reference[side]
            },
            end: {
                [side]: reference[side] + reference[measurement] - popper[measurement],
            },
        };

        data.offsets.popper = { ...popper,
            ...shiftOffsets[shiftvariation]
        };
    }

    return data;
}