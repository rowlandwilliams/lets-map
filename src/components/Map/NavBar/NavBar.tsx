import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../components/ui/AlertDialog";
import Image from "next/image";
import { Separator } from "~/components/ui/Separator";
import { HoverCard } from "~/components/ui/hover-card";
import { HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card";
import { Toggle } from "~/components/ui/Toggle";
import { NavbarActionButton } from "./NavbarActionButton/NavbarActionButton";

export const NavBar = () => {
  return (
    <header className="z-50 flex justify-between border-b bg-white px-4 py-2 text-sm font-medium shadow-sm">
      <div className="flex items-center gap-x-2">
        <Image
          src={"/voronoi.svg"}
          width={28}
          height={28}
          alt="voronoi"
          className="flex-shrink-0"
        />
        <Separator orientation="vertical" />
        <NavbarActionButton
          buttonLabel="+"
          hoverContent="Add data to the map"
        />
      </div>
      <div className="space-x-2 ">
        <button className="w-24 rounded-sm border px-4 py-1.5 text-slate-700 shadow-sm hover:text-indigo-500">
          Save
        </button>
        <button className="w-24 rounded-sm bg-indigo-500 px-4 py-1.5  text-white shadow-sm">
          Publish
        </button>
      </div>
    </header>
  );
};
