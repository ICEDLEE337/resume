import {IClient} from "src/types/IClient";

const PA = 'PA';
const PGH = 'Pittsburgh';

export class Clients {

    static RIVERS_AGILE_SOLUTIONS: IClient = {
        state: PA,
        name: 'Rivers Agile Solutions',
        zip: 15317,
        addressLineOne: '1400 Ashwood Drive',
        addressLineTwo: 'Suite 1403',
        city: 'Canonsburg',
    };

    static PHILIPS_RESPIRONICS: IClient = {
        state: PA,
        name: 'Philips Respironics',
        addressLineOne: '1010 Murry Ridge Lane',
        city: 'Murrysville',
        zip: 15668,
        zipExtension: 8517,
    };

    static IAT_TECHNOLOGIES: IClient = {
        state: PA,
        name: 'IAT Technologies',
        addressLineOne: '220 Bessemer Rd',
        city: 'Mount Pleasant',
        zip: 15666,
    };

    static UPMC_TECHNOLOGY_DEVELOPMENT_CENTER: IClient = {
        state: PA,
        name: 'UPMC Technology Development Center',
        addressLineOne: '6425 Penn Avenue',
        addressLineTwo: '#200',
        city: PGH,
        zip: 15206,
    };

    static GIANT_EAGLE: IClient = {
        state: PA,
        city: PGH,
        addressLineOne: '101 Kappa Drive',
        name: 'Giant Eagle, Inc',
        zip: 15238
    };

    static PENN_STATE: IClient = {
        name: 'Penn State University',
        addressLineOne: '3550 7th Street Rd',
        city: 'New Kensington',
        state: PA,
        zip: 15068
    };

    static FOUR_C_TECHNOLOGIES: IClient = {
        state: PA,
        city: PGH,
        name: '4C Technologies',
        addressLineOne: '1500 Ardmore Blvd',
        addressLineTwo: 'Suite 100',
        zip: 15221,
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
