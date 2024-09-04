// app/page.tsx
import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default async function Home() {
  const campData = [
    {
      backgroundImage: "bg-bg-img-1",
      title: "Putuk Truno Camp",
      subtitle: "Prigen, Pasuruan",
      peopleJoined: "50+ Joined",
    },
    {
      backgroundImage: "bg-bg-img-2",
      title: "Mountain View Camp",
      subtitle: "Somewhere in the Wilderness",
      peopleJoined: "50+ Joined",
    },
  ];

  return (
    <>
      <Hero />
      <Camp campData={campData} />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}
