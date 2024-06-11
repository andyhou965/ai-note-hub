import Image from "next/image";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { HomeBackground } from "@/components/Background";

export default function Home() {
  const { userId } = auth();
  if (userId) redirect("/notes");
  return (
    <HomeBackground>
      <main className="flex h-screen flex-col items-center justify-center gap-5">
        <div className="flex items-center gap-4">
          <Image src={logo} alt="Logo" width={100} height={100} />
          <span className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            AI Note Hub
          </span>
        </div>
        <p className="max-w-xl text-center">
          An intelligent note-taking app with build-in AI assistance, to help
          you organize the thoughts
        </p>
        <Button size="lg" asChild>
          <Link href="/notes">Get Start</Link>
        </Button>
      </main>
    </HomeBackground>
  );
}
