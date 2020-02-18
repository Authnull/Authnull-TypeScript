/**
 * @author WMXPY
 * @namespace Authnull
 * @description Authnull
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';

describe('Given a Placeholder', (): void => {

    const chance: Chance.Chance = new Chance('Placeholder');

    it('Placeholder', (): void => {

        expect(1).to.be.equal(1);
    });
});
