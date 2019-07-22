import {Activities} from "./Activities.enum";
import {Category} from "src/models/Category.class";

export class CommonCategories {

    static readonly webDev = new Category('', [
        Activities.htmlAndCSS,
        Activities.debuggingJavaScriptApplications,
        Activities.developingJavaScriptApplications
    ]);

    static readonly sql = new Category('', [
        Activities.preformanceTuningSqlQueriesAndReports,
        Activities.developingAndModifyingStoredProcedures,
    ]);

    static readonly systemsAnalysisAndDesign: Category = new Category('User Experience Design and Development', [
        'Determining the content to show on each page',
        'Planning content layout and color schemes',
        'Mapping out the state transition between pages',
        'Ensuring that the finished product looks smooth and professional',
    ]);


}