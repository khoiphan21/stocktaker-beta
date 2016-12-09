import { Section } from './section';
import { SectionManagerService } from '../managers/section-manager.service';

export class Category {
    private _name: String;
    private _section: Section;

    get getName(): String {
        return this._name;
    }
    set changeName(name: String) {
        this._name = value;
    }
    get getSection(): Section {
        return this._section;
    }
    set changeSection(section: Section) {
        this._section = value;
    }

    delete() {

    }

    constructor(private manager: SectionManagerService) {}


}
