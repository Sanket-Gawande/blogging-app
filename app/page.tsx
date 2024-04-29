"use client";
import BlogList from "@/components/BlogList";
import HeroSection from "@/components/HeroSection";
import { trpc } from "./_trpc/client";

export default function Home() {
  var msg = trpc.getHello.useQuery();
  console.log(msg.data)
  return (
    <>
      <HeroSection />
      <BlogList />
    </>
  );
}
