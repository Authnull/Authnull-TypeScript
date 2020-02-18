/**
 * @author WMXPY
 * @namespace Authnull
 * @description Util
 */

import { randomApiKey } from "@sudoo/random";

export const generateAnchor = () => {

    const key: string = randomApiKey(3);
    return key;
};
