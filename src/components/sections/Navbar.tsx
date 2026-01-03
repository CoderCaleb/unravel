import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-background w-full z-50 relative shadow-[0_2px_8px_rgba(109,94,247,0.15)]">
      <div className="">
        <div className="flex items-center h-16 px-4">
          <div className="relative h-2/3 aspect-square flex items-center justify-center">
          <Image
            src="/images/unravel_logo.png"
            alt="Unravel Logo"
            fill
            priority
            className="object-contain"
          />
          </div>
        </div>
      </div>
    </nav>
  );
}

