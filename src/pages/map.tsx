import Head from "next/head";
import dynamic from "next/dynamic";

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
      <main className="flex flex-col">
        <header className="z-50 flex justify-between border-b bg-white px-4 py-3 text-sm font-medium shadow-sm">
          <button className="flex items-center justify-center rounded-sm border px-4 py-1.5  font-semibold">
            <span className="mr-2 text-indigo-500">+</span>Add Data
          </button>
          <div className="space-x-2 ">
            <button className="w-24 rounded-sm border px-4 py-1.5 text-slate-700 shadow-sm hover:text-indigo-500">
              Save
            </button>
            <button className="w-24 rounded-sm bg-indigo-500 px-4 py-1.5  text-white shadow-sm">
              Publish
            </button>
          </div>
        </header>
        <div className="h-full">
          <MapComp />
        </div>
      </main>
    </>
  );
}
