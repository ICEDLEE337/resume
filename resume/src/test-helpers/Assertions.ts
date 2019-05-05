import {By} from "@angular/platform-browser";
import {ComponentFixture} from "@angular/core/testing";

export class Assertions<T, K> {
    verifyComponentInvocationForAll (samples: K[], childComponentSelector: string) {
        samples.forEach(eng => {
            this.verifyOuterHtml({selector: null, content: childComponentSelector});
        });
    }

    constructor (private fixture: ComponentFixture<T>, private expect) {

    }

    verifyHtml ({selector, property, content}): void {
        const rootElement = selector
            ? this.fixture.debugElement.query(By.css(selector)).nativeElement
            : this.fixture.debugElement.nativeElement;

        this.expect(rootElement[property])
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