import {ITimeline} from "src/types/ITimeline";
import {IEngagement} from "src/types/IEngagement";
import {IClient} from "src/types/IClient";
import {Clients} from "./Clients";
import {Engagements} from "./Engagements";
import {Activities} from "./Activities.enum";

export class Database {

    timeline: ITimeline;
    engagements: IEngagement[];
    clients: IClient[];
    activities: Activities;

    constructor () {
        this.engagements = Engagements.getEngagements();
        this.clients = Clients.getClients();
    }
}
