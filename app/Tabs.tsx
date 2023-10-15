"use client"
import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import Tables from "./Tables";

const keyNames = [[1, "2023"],[2, "2020-2022"],[3, "pre-2020"]];

export default function DateTabs({source}:{source:Array<Array<string>>}) {
  var tabs = [];
  var loop = source.length/6;
  for(var i = 0; i < loop; i++){
    var sourceAppended = [...source];
    sourceAppended.push([(i*6).toString()]);
    tabs.push({id: i, name: keyNames[i][1], tab: <Card><Tables source = {sourceAppended}></Tables> </Card>
    });
    console.log(tabs);
}

  return (
    <div className="flex flex-col">
      <Tabs aria-label="Options">
          {tabs.map(item => (<Tab title={item.name} key={item.id}>{item.tab}</Tab>))}
      </Tabs>
    </div>
  );
}