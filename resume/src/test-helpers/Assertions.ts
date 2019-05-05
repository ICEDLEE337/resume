import {By} from "@angular/platform-browser";

export class Assertions {

    constructor (private fixture) {

    }
    verifyHtml ({selector, property, content}): void {
        expect(this.fixture.debugElement.query(By.css(selector)).nativeElement[property])
            .toContain(content);
    }

    verifyInnerHtml ({selector, content}): void {
        const property = 'innerHTML';
        this.verifyHtml({selector, property, content});
    }

    verifyOuterHtml ({selector, content}): void {
        const property = 'outerHTML';
        this.verifyHtml({selector, property, content});
    }

    verifyInnerText ({selector, content}): void {
        const property = 'innerText';
        this.verifyHtml({selector, property, content});
    }
}