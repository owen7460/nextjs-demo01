import Image from "next/image";
import homeSrc from "../../../public/performance.jpg";

export default function Performance() {
  return (
    <div>
      <main className="relative min-h-screen flex flex-col items-center justify-center">
        <Image
          alt="bg"
          src="/performance.jpg"
          fill
          className="absolute inset-0 object-cover"
        />
        <p className="text-4xl font-bold solgan">
          Think Big. Start Small. Move Fast.
        </p>
      </main>
    </div>
  );
}
