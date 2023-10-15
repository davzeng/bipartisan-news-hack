"use client"
import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function Cards({source}:{source:Array<string>}) {

  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{source[0]}</p>
        <small className="text-default-500">{source[3]}</small>
        <h4 className="font-bold text-large">{source[2]}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={source[4]}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
