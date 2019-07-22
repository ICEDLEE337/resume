import {ISkill} from "./ISkill";

export interface ITechnology extends ISkill {
    identifier: string;
    versions?: string[];
}