
import Image from 'next/image'
import {Card, CardBody} from "@nextui-org/react";
import Cards from './Cards.tsx';
import CardTest from './CardTest.tsx';
import SearchBar from './searchBar.js';
import DateTabs from './Tabs.tsx';
import SplitCards from './SplitCards.tsx';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ backgroundColor: '#5A5A5A' }}>
      <SearchBar/>
      <DateTabs></DateTabs>
      <Cards>
      </Cards>
      <CardTest></CardTest>


    </main>
  )

}
