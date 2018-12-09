import { observable, decorate, computed, action } from 'mobx';

const isNotArchived = (archivedStoryIds) => (story) =>
    archivedStoryIds.indexOf(story.objectID) === -1;

class StoryStore {
    stories = [];
    error = null;

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    get readableStories() {
        const { archivedStoryIds } = this.rootStore.archiveStore;
        return this.stories.filter(isNotArchived(archivedStoryIds));
    }

    setStories = stories => {
        this.stories = stories;
        this.error = null;
    }
    setError = error => {
        this.stories = [];
        this.error = error;
    }
}

decorate(StoryStore, {
    stories: observable,
    readableStories: computed,
    setStories: action,
    setError: action
})

export default StoryStore;