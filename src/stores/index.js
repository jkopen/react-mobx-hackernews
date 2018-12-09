import StoryStore from './storyStore';
import ArchiveStore from './archiveStore';
import { configure } from 'mobx';

configure({ enforceActions: 'observed' })

class RootStore {
    constructor() {
        this.storyStore = new StoryStore(this);
        this.archiveStore = new ArchiveStore(this);
    }
}

const rootStore = new RootStore();

export default rootStore;