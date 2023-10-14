"use client"
import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import Tables from './Tables.tsx';

export default function DateTabs() {
  return (
    <div className="flex flex-col">
      <Tabs aria-label="Options">
        <Tab key="Recent" title="2023">
          <Card>
                <Tables></Tables>
          </Card>
        </Tab>
        <Tab key="music" title="2022">
          <Card>
            <CardBody>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                   esse cillum dolore eu fugiat nulla pariatur.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="videos" title="Pre-2020">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
