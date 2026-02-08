import Image from "next/image";

export default function Reliability() {
  return (
    <div>
      <main className="relative min-h-screen flex flex-col items-center justify-center">
        <Image
          alt="bg"
          src="/reliability.jpg"
          fill
          className="absolute inset-0 object-cover"
        />
        <p className="text-4xl font-bold solgan">
          Turning Concepts into Reality.
        </p>
      </main>
    </div>
  );
}
