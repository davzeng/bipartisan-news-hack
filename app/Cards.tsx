"use client"
import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { useState } from "react";



export default function Cards() {
    const [state, setState] = useState("");

  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Israel - Hamas War Updates</p>
        <small className="text-default-500">By Kathleen Magramo</small>
        <h4 className="font-bold text-large">CNN</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://i.imgur.com/BWHdjUE.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
  );
}
