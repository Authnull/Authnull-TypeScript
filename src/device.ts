/**
 * @author WMXPY
 * @namespace Authnull
 * @description Device
 */

export type DeviceInformation = {

    readonly deviceName: string,
    readonly deviceModel: string,
    readonly deviceSystem: string,
    readonly deviceVersion: string,
    readonly deviceIdentifier: string,
    readonly isPhysicalDevice: boolean,
};
