/**
 * @author WMXPY
 * @namespace Authnull
 * @description Declare
 */

export enum AuthorizationPlatform {
    Brontosaurus = "Brontosaurus",
    Debug = "Debug",
    Google = "Google",
}

export type AuthorizationStatus<T extends AuthorizationPlatform> = {

    readonly platform: T;

    readonly username: string;
    readonly displayName: string;
    readonly identifier: string;
    readonly email: string;
    readonly phone: string;

    readonly infos: Record<string, any>;
    readonly beacons: Record<string, any>;
} & DynamicAuthorizationStatus<T>;

export type DynamicAuthorizationStatus<T extends AuthorizationPlatform> =
    T extends AuthorizationPlatform.Brontosaurus ? {
        readonly raw: string;
    } :
    T extends AuthorizationPlatform.Google ? {
        readonly token: string;
    } :
    T extends AuthorizationPlatform.Debug ? {
    } :
    {};

export type WritableAuthorizationStatus<T extends AuthorizationPlatform> = {

    platform: T;

    username: string;
    displayName: string;
    identifier: string;
    email: string;
    phone: string;

    infos: Record<string, any>;
    beacons: Record<string, any>;
} & WritableDynamicAuthorizationStatus<T>;

export type WritableDynamicAuthorizationStatus<T extends AuthorizationPlatform> =
    T extends AuthorizationPlatform.Brontosaurus ? {
        raw: string;
    } :
    T extends AuthorizationPlatform.Google ? {
        token: string;
    } :
    T extends AuthorizationPlatform.Debug ? {
    } :
    {};

