import {ITimeline} from "src/types/ITimeline";
import {IEngagement} from "src/types/IEngagement";
import {IClient} from "src/types/IClient";
import {Clients} from "./Clients";
import {Engagements} from "./Engagements";

export class Database {

    timeline: ITimeline;
    engagements: IEngagement[];
    clients: IClient[];

    constructor () {
        this.engagements = Engagements.getEngagements();
        this.clients = Clients.getClients();
    }
}
