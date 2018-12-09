import { observable, decorate, action } from 'mobx';

class ArchiveStore {
    archivedStoryIds = [];

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    archiveStory = id => {
        this.archivedStoryIds.push(id);
    }
}

decorate(ArchiveStore, {
    archivedStoryIds: observable,
    archiveStory: action
});

export default ArchiveStore;