import {IClient} from "src/types/IClient";

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
                start: startDate(2016, 3),
                end: endDate(2016, 7),
                title: SENIOR_SOFTWARE_ENGINEER,
            }
        ]
    };

    static PHILIPS_RESPIRONICS: IClient = {
        state: PA,
        name: 'Philips Respironics',
        addressLineOne: '1010 Murry Ridge Lane',
        city: 'Murrysville',
        zip: 15668,
        zipExtension: 8517,
        engagements: [
            {
                start: startDate(2015, 7),
                end: endDate(2016, 3),
                title: SENIOR_SOFTWARE_ENGINEER
            },
            {
                start: startDate(2016, 7),
                end: endDate(2019, 8),
                title: SENIOR_SOFTWARE_ENGINEER
            }
        ]
    };

    static IAT_TECHNOLOGIES: IClient = {
        state: PA,
        name: 'IAT Technologies',
        addressLineOne: '220 Bessemer Rd',
        city: 'Mount Pleasant',
        zip: 15666,
        engagements: [{
            start: startDate(2011, 3),
            end: endDate(2012, 3),
            title: 'Junior Developer'
        }]
    };

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
            title: 'Software Developer'
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
                title: 'Programmer/Analyst'
            }
        ]
    };

    static FOUR_C_TECHNOLOGIES: IClient = {
        state: PA,
        city: PGH,
        name: '4C Technologies',
        addressLineOne: '1500 Ardmore Blvd',
        addressLineTwo: 'Suite 100',
        zip: 15221,
        engagements: [{
            end: endDate(2017, 6),
            start: startDate(2017, 4),
            title: CONSULTANT,
        }]
    };

    static getClients (): IClient[] {
        return [
            Clients.IAT_TECHNOLOGIES,
            Clients.GIANT_EAGLE,
            Clients.UPMC_TECHNOLOGY_DEVELOPMENT_CENTER,
            Clients.PHILIPS_RESPIRONICS,
            Clients.RIVERS_AGILE_SOLUTIONS,
            Clients.FOUR_C_TECHNOLOGIES,
            // Clients.PHILIPS_RESPIRONICS,
        ];
    }
}

function toDate (year: number, month: number, day?: number): Date {
    return new Date();
}
