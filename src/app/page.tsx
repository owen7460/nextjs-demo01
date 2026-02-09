import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="relative min-h-screen flex flex-col items-center justify-center">
        <Image
          alt="home"
          src="/bg-home.jpg"
          fill
          className="absolute -z-10 inset-0 object-cover"
          loading="eager"
        />
        <p className="text-4xl font-bold solgan">
          Designing Experiences, Not Just Products.
        </p>
      </main>
    </div>
  );
}
