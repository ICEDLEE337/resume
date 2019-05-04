import {IEngagement} from "src/types/IEngagement";
import {Engagements} from "src/backend/Engagements";

export class Mocks {
    static getSampleEngagement (): IEngagement {
        return Engagements.getEngagements()[0];
    }
}