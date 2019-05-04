import {IClient} from "src/types/IClient";
import {endTimeRange} from "@angular/core/src/profile/wtf_impl";

const PA = 'PA';
const SENIOR_SOFTWARE_ENGINEER = 'Senior Software Engineer';
const CONSULTANT = 'Consultant';
const startDate = toDate.bind(null, 'start');
const endDate = toDate.bind(null, 'end');
const PGH = 'Pittsburgh';

export class Clients {
    static RIVERS_AGILE_SOLUTIONS: IClient = {
        state: PA,
        name: 'Rivers Agile Solutions',
        zip: 15317,
        addressLineOne: '1400 Ashwood Drive',
        addressLineTwo: 'Suite 1403',
        city: 'Canonsburg',
        engagements: [
            {
                title: SENIOR_SOFTWARE_ENGINEER,
                start: startDate(2016, 3),
                end: endDate(2016, 7),
        ]

    };

    static PHILIPS_RESPIRONICS: IClient = {
        state: PA,
        name: 'Philips Respironics',
        addressLineOne: '1010 Murry Ridge Lane',
        city: 'Murrysville',
        zip: 15668,
        zipExtension: 8517,
        engagements: [{
            start: startDate(2016, 7),
            end: endDate(2019, 8),
            title: SENIOR_SOFTWARE_ENGINEER
        }]
    };

    static IAT_TECHNOLOGIES: IClient = {};
    static PENN_STATE_UNIVERSITY: IClient = {};

    static UPMC_TECHNOLOGY_DEVELOPMENT_CENTER: IClient = {
        state: PA,
        name: 'UPMC Technology Development Center',
        addressLineOne: '6425 Penn Avenue',
        addressLineTwo: '#200',
        city: PGH,
        zip: 15206,
        engagements: [{
            start: startDate(2014, 6),
            end: endDate(2015, 7),
            title: SENIOR_SOFTWARE_ENGINEER
        }]
    };

    static GIANT_EAGLE: IClient = {
        state: PA,
        city: PGH,
        addressLineOne: '101 Kappa Drive',
        name: 'Giant Eagle, Inc',
        engagements: [
            {
                start: startDate(2012, 4),
                end: endDate(2014, 5),
                title: SENIOR_SOFTWARE_ENGINEER
            }
        ]
    };

    static ART_ENTERPRISES: IClient = {
        state: PA,
        name: 'A.R.T. Enterprises',
        addressLineOne: 'PO Box 182',
        city: 'Tarentum',
        zip: 15084,
        engagements: [

        ]
    };

    static FOUR_C_TECHNOLOGIES: IClient = {
        state: PA,
        city: PGH,
        name: '4CTechnologies',
        addressLineOne: '1500 Ardmore Blvd',
        addressLineTwo: 'Suite 100',
        zip: 15221,
        engagements: [{
            start: startDate(2017, 4),
            end: endDate(2017, 6),
            title: CONSULTANT
        }]
    };

    static getClients (): IClient[] {
        return [
            Clients.RIVERS_AGILE_SOLUTIONS,
            Clients.PHILIPS_RESPIRONICS,
            Clients.UPMC_TECHNOLOGY_DEVELOPMENT_CENTER,
            Clients.GIANT_EAGLE,
            // Clients.ART_ENTERPRISES,
            // Clients.FOUR_C_TECHNOLOGIES,
        ];
    }
}

function toDate (year: number, month: number, day?: number): Date {
    return new Date();
}