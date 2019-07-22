import {Activities} from "./Activities.enum";

export class CommonActivityGroups {

    static readonly webDev: Activities[] = [
        Activities.htmlAndCSS,
        Activities.debuggingJavaScriptApplications,
        Activities.developingJavaScriptApplications
    ];

    static readonly sql: Activities[] = [
        Activities.preformanceTuningSqlQueriesAndReports,
        Activities.developingAndModifyingStoredProcedures,
    ];
}