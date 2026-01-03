import ButtonWithIcon from "@/components/ui/ButtonWithIcon";
import SubtitleText from "@/components/ui/SubtitleText";
import { LuSparkles } from "react-icons/lu";

export default function Home() {
  return (
    <div className="flex w-full bg-background font-sans h-full">
      <main className="flex min-h-screen w-full flex-col justify-center items-center gap-10">
        <div className="flex flex-col items-center justify-center text-title-size font-bold leading-none">
          <h1 className="">Create cards that</h1>
          <h1 className="text-brand">come alive</h1>
        </div>
        <div className="flex text-center flex-col gap-1">
          <SubtitleText text="Design interactive digital cards in just minutes"/>
          <SubtitleText text="No design skills needed, just your creativity"/>
        </div>
        <ButtonWithIcon buttonText="Create Card" buttonIcon={<LuSparkles className="h-full aspect-square" size={20}/>
}/>
      </main>
    </div>
  ); 
}
