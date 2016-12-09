import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'block-heading',
    templateUrl: 'block-heading.component.html',
    styleUrls: ['block-heading.component.css']
})
export class BlockHeadingComponent {
    @Input()
    title = 'Block Heading Title';
}
