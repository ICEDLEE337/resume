import {IEngagement} from "src/types/IEngagement";
import {Clients} from './Clients';
import {Activities} from "./Activities.enum";
import {CommonActivityGroups} from './CommonActivityGroups.class';
import {Category} from "src/models/Category.class";
const SENIOR_SOFTWARE_ENGINEER = 'Senior Software Engineer';
const CONSULTANT = 'Consultant';
const startDate = toDate.bind(null, 'start');
const endDate = toDate.bind(null, 'end');

export class Engagements {
    static getEngagements (): IEngagement[] {
        const engagements: IEngagement[] = [
            {
                client: Clients.IAT_TECHNOLOGIES,
                start: startDate(2011, 3),
                end: endDate(2012, 3),
                title: 'Junior Developer',
                categories: [new Category('', [
                    ...CommonActivityGroups.webDev
                ])]
            },
            {
                client: Clients.GIANT_EAGLE,
                start: startDate(2012, 4),
                end: endDate(2014, 5),
                title: 'Programmer/Analyst',
                categories: [new Category('', [
                    ...CommonActivityGroups.webDev
                ])]
            },
            {
                client: Clients.UPMC_TECHNOLOGY_DEVELOPMENT_CENTER,
                start: startDate(2014, 6),
                end: endDate(2015, 7),
                title: 'Software Developer',
                categories: [new Category('Web development', [
                    ...CommonActivityGroups.webDev
                ])]
            },
            {
                client: Clients.PHILIPS_RESPIRONICS,
                start: startDate(2015, 7),
                end: endDate(2016, 3),
                title: SENIOR_SOFTWARE_ENGINEER,
                categories: [new Category('', [
                    ...CommonActivityGroups.webDev
                ])]
            },
            {
                client: Clients.RIVERS_AGILE_SOLUTIONS,
                start: startDate(2016, 3),
                end: endDate(2016, 7),
                title: SENIOR_SOFTWARE_ENGINEER,
                categories: [new Category('', [
                    ...CommonActivityGroups.webDev
                ])]
            },
            {
                client: Clients.PHILIPS_RESPIRONICS,
                start: startDate(2016, 7),
                end: endDate(2019, 8),
                title: SENIOR_SOFTWARE_ENGINEER,
                categories: [new Category('', [
                    ...CommonActivityGroups.webDev
                ])]
            },
        ];

        return engagements;
    }
}

const fourC: IEngagement = {
    title: CONSULTANT,
    end: endDate(2017, 6),
    start: startDate(2017, 4),
    client: Clients.FOUR_C_TECHNOLOGIES
};

const psu: IEngagement = {
    client: Clients.PENN_STATE,
    title: 'Physics/Trig/Calculus Tutor',
    start: startDate(2011, 1), // valiDATE these
    end: endDate(2011, 4)
};

function toDate (year: number, month: number, day?: number): Date {
    return new Date();
}
