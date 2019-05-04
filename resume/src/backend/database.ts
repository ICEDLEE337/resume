import {ITimeline} from "src/types/ITimeline";
import {IEngagement} from "src/types/IEngagement";
import {IClient} from "src/types/IClient";
import {Clients} from "./Clients";

export class Database {

    getEngagements (): IEngagement[] {
        throw new Error("Method not implemented.");
    }

    timeline: ITimeline;
    engagements: IEngagement[];
    clients: IClient[];

    constructor () {
        this.engagements = this.getEngagements();
        this.clients = Clients.getClients();
    }
}
