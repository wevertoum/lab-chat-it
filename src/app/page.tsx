"use client";
import PageCarousel from "@/components/PageCarousel";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const itens = [
    {
      image: "/assets/images/robot.jpeg",
      title: "Unlock the Power Of  Future AI",
      description:
        "Chat with the smartest AI Future Experience power of AI with us.",
    },
    {
      image: "/assets/images/robot.jpeg",
      title: "2 Unlock the Power Of  Future AI",
      description:
        "2 Chat with the smartest AI Future Experience power of AI with us.",
    },
    {
      image: "/assets/images/robot.jpeg",
      title: "3 Unlock the Power Of  Future AI",
      description:
        "3 Chat with the smartest AI Future Experience power of AI with us.",
    },
  ] as PageCarousel[];

  return (
    <div className="h-screen">
      <PageCarousel itens={itens} navigateToChat={() => router.push("/chat")} />
    </div>
  );
}
