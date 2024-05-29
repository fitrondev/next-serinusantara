import prisma from "@/lib/db";
import Image from "next/image";
import HeroCard from "./HeroCard";

const Hero = async () => {
  const data = await prisma.movie.findFirst({
    where: {
      id: "clwrfcwk20003yefvoimxirqh",
    },
  });

  return (
    <section className="relative w-full h-screen">
      <Image
        src={data?.img!}
        alt=""
        fill
        priority
        className="object-cover brightness-50 -z-10"
      />

      <div className="relative container h-full">
        <HeroCard
          className="absolute bottom-8"
          title={data?.title}
          overview={data?.overview}
        />
      </div>
    </section>
  );
};
export default Hero;
