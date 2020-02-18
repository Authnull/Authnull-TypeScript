/**
 * @author WMXPY
 * @namespace Authnull
 * @description Declare
 */

export type AuthorizationStatus = {

    readonly platform: string;
    readonly username: string;
    readonly displayName: string;
    readonly identifier: string;
    readonly email: string;
    readonly phone: string;

    readonly infos: Record<string, any>;
    readonly beacons: Record<string, any>;
};
