import Head from "next/head";
import dynamic from "next/dynamic";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../components/ui/hover-card";
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
} from "../components/ui/AlertDialog";
import Image from "next/image";
import { NavBar } from "~/components/Map/NavBar/NavBar";
const MapComp = dynamic(() => import("../components/Map/Map"), {
  ssr: false,
});

export default function Map() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col">
        <NavBar />
        <div className="h-full w-full">
          <MapComp />
        </div>
      </main>
    </>
  );
}
