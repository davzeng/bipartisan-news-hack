import Image from 'next/image'
import {Card, CardBody} from "@nextui-org/react";
import Cards from './Cards.tsx';
import CardTest from './CardTest.tsx';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Cards>
      </Cards>
      <CardTest></CardTest>
    </main>
  )
}
