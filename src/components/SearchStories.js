import React, { Component } from 'react';
import { observable, decorate, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import Button from './Button';
import DevTools from 'mobx-react-devtools';
import { fetchStories } from '../api/story';

class SearchStories extends Component {
    query = '';

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const { value } = e.target;
        this.query = value;
    }

    onSubmit(e) {
        const { storyStore } = this.props;
        if (this.query) {
            fetchStories(this.query)
                .then(result => storyStore.setStories(result.hits))
                .catch(storyStore.setError);
        }
        this.query = '';
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    value={this.query}
                    onChange={this.onChange}
                />
                <Button type="submit">Search</Button>
                <DevTools />
            </form>
        )
    }
}

decorate(SearchStories, {
    query: observable,
    onChange: action,
    onSubmit: action,
});

export default inject('storyStore')(observer(SearchStories));