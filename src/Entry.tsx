import * as React from 'react';
import * as ReactDom from 'react-dom';
import App from './App';

class Entry {

    private readonly element: HTMLElement;
    private observer: MutationObserver;

    private observerConfig: MutationObserverInit = {
        attributeFilter: [],
        attributeOldValue: false,
        attributes: true,
        characterData: false,
        characterDataOldValue: false,
        childList: false,
        subtree: false,
    };

    public constructor(elementId: string) {
        const element: HTMLElement | null = document.getElementById(elementId);

        if (element === null) {
            throw new Error(`Element id "${elementId}" not found`);
        }

        this.element = element;
        this.observer = new MutationObserver(this.render);
    }

    public render(): void {
        ReactDom.render(
            <App />,
            this.element,
        );
    }

    public observe(callback: () => void): void {
        this.observer = new MutationObserver(callback);
        this.observer.observe(this.element, this.observerConfig);
    }
}

const entry: Entry = new Entry('react-typescript');
entry.render();

entry.observe(() => {
    entry.render();
});
