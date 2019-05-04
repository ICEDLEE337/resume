import {IChronological} from "./IChronological";
import {IClient} from "./IClient";

export interface IEngagement extends IChronological {
    title: string;
    client: IClient;
}