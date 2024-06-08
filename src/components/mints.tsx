"use client";

import React from "react";
import Image from "next/image";

function Mints() {
  const mintData = [
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
    {
      src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifr2rkilmqulzv54cs3v7qvrsmm7jdp63gd2ac5d6ucyfuhv5vrzi&w=1920&q=75",
    },
  ];

  function handleMint() {
    console.log("inside handleMint");
  }
  return (
    <section id="art" className="p-[7vw] bg-[--blue]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-[40vw] mx-auto">
        {mintData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-4 mb-5 pb-4 bg-white rounded-md overflow-hidden"
          >
            <div className="bg-[--blue]">
              <img
                src={item.src}
                alt="cat image"
                loading="lazy"
                className="h-[50vh] w-full block object-cover "
              />
            </div>

            <button
              onClick={handleMint}
              className="flex flex-row items-center gap-3 hover:bg-neutral-800 rounded-md text-sm shake px-3 py-2 mx-auto bg-black text-white"
            >
              <Image src="/sphere.png" alt="sphere" height={18} width={18} />
              <span>Mint</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Mints;
