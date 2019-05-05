import {IEngagement} from "src/types/IEngagement";
import {Engagements} from "src/backend/Engagements";

export class Mocks {

    static getSampleEngagement (): IEngagement {
        return Mocks.getSampleEngagements[0];
    }

    static getSampleEngagements (): IEngagement[] {
        return Engagements.getEngagements();
    }
}