/**
 * @author WMXPY
 * @namespace Authnull
 * @description Util
 */

import { randomApiKey } from "@sudoo/random";

const ANCHOR_LENGTH = 3;
const DEVICE_MATCHER_LENGTH = 5;

export const generateAnchor = (): string => {

    const key: string = randomApiKey(ANCHOR_LENGTH);
    return key;
};

export const generateDeviceMatcher = (): string => {

    const key: string = randomApiKey(DEVICE_MATCHER_LENGTH);
    return key;
};
