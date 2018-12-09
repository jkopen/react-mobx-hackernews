import React from 'react';
import { inject, observer } from 'mobx-react';
import './Stories.css';
import Story from './Story';

const COLUMNS = {
    title: {
        label: 'Title',
        width: '40%',
    },
    author: {
        label: 'Author',
        width: '30%',
    },
    comments: {
        label: 'Comments',
        width: '10%',
    },
    points: {
        label: 'Points',
        width: '10%',
    },
    archive: {
        width: '10%',
    },
}

const Stories = ({ storyStore }) =>
    <div className="stories">
        <StoryHeader columns={COLUMNS} />

        {storyStore.error && <p className="error">Something went wrong...</p>}

        {(storyStore.readableStories || []).map(story =>
            <Story key={story.objectID} story={story} columns={COLUMNS} />
        )}
    </div>

const StoryHeader = ({ columns }) =>
    <div className="stories-header">
        {Object.keys(COLUMNS).map(key =>
            <span
                key={key}
                style={{ width: COLUMNS[key].width }}
            >
                {COLUMNS[key].label}
            </span>
        )}
    </div>


export default inject('storyStore', 'archiveStore')(observer(Stories));