import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVerticalIcon, Globe, Twitter } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const Options = (props) => {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-zinc-800 cursor-pointer">
          <EllipsisVerticalIcon className="h-6 w-6 text-zinc-50" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-26 mr-8 flex flex-col justify-start bg-zinc-950 text-zinc-50 border border-zinc-600">
        <DropdownMenuLabel>Options</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-zinc-600" />

        <DropdownMenuItem onClick={props.addWebsiteHandler} className="cursor-pointer">
          <Globe className="mr-2 w-4 h-4" />
          Add website
        </DropdownMenuItem>

        <DropdownMenuItem onClick={props.connectTwitterHandler} className="cursor-pointer">
          <FaXTwitter className="mr-2 w-4 h-4" />
          Connect Twitter
        </DropdownMenuItem>

       
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Options;
