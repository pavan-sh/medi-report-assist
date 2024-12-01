"use client";

import { Button } from "@/ui/button";
import React from "react";
import { Oval } from "react-loader-spinner";
import MarkdownView from "react-showdown";

export default function Output(props: {
  responseText: string;
  loaded: boolean;
  reset: any;
}) {
  if (props.responseText == "" || props.responseText == null)
    return (
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#171717"
        secondaryColor="#F8F0E3"
        ariaLabel="loading response"
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
        }}
        wrapperClass=""
      />
    );

  return (
    <>
      <MarkdownView
        markdown={props.responseText}
        options={{ tables: true, emoji: true }}
      />
      {props.loaded && (
        <div className=" flex justify-center">
          <Button
            aria-label="go back to previous screen"
            className="text-center cursor-pointer mt-4"
            variant="outline"
            onClick={() => props.reset()}
          >
            Go back
          </Button>
        </div>
      )}
    </>
  );
}
