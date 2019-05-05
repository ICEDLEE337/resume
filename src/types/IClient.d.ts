import {IEngagement} from "./IEngagement";

export interface IClient {
    name: string;
    website?: string;
    addressLineOne?: string;
    addressLineTwo?: string;
    city: string;
    state: string;
    zip: number;
    zipExtension?: number;
    image?: string;
}