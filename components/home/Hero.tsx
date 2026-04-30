import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import HeroCarousel from "./HeroCarousel";
function Hero() {
  return (
    <div>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
            We are changing the wayyou people shop
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            earum quidem natus nulla eius nostrum quibusdam id iusto culpa
            molestias dicta officia ipsam, molestiae voluptate nisi, quia cumque
            debitis rem?
          </p>
          <Button className="mt-8" asChild>
            <Link href="/products">Our products</Link>
          </Button>
        </div>
        <div>
          <HeroCarousel />
        </div>
      </section>
    </div>
  );
}

export default Hero;
