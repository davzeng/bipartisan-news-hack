import React from 'react';
import SearchBar from './searchBar.js';
import DateTabs from './Tabs.tsx';
import SplitCards, { UpdateCards } from './SplitCards.tsx';

export class Application extends React.Component {
    render() {
        <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ backgroundColor: '#5A5A5A' }}>
            <SearchBar/>
            <DateTabs></DateTabs>
            <SplitCards></SplitCards>
        </main>
    }
}