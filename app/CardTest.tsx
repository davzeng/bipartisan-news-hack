"use client"
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function CardTest() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="CNN Logo"
          height={100}
          radius="sm"
          src="https://i.imgur.com/BWHdjUE.jpeg"
          width={100}
        />
        <div className="flex flex-col">
          <p className="text-md">CNN</p>
          <p className="text-small text-default-500">By Kathleen Magramo</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>Israel-Hamas War Updates</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit article.
        </Link>
      </CardFooter>
    </Card>
  );
}
