import {IChronological} from "./IChronological";
import {IClient} from "./IClient";
import {Activities} from "src/backend/Activities.enum";
import {Category} from "src/models/Category.class";

export interface IEngagement extends IChronological {
    title: string;
    client: IClient;
    categories?: Category[] ;
}