"use client";

import React from "react";
import Link from "next/link";
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
  ];

  function handleMint() {
    console.log("inside handleMint");
  }
  return (
    <section id="art" className="p-[7vw] border-t border-neutral-300">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[7vw]">
        {mintData.map((item, index) => (
          <div key={index} className="flex flex-col items-start gap-4">
            <img
              src={item.src}
              alt="cat image"
              loading="lazy"
              className="w-full shake h-[85vh] block object-cover rounded-[1.25rem]"
            />
            <h1 className="text-[2rem] pb-2 leading-none text-[--blue]">
              Thank you mambi
            </h1>
            <button
              onClick={handleMint}
              className="shake rounded-full shake px-8 py-5 bg-[--blue] text-white"
            >
              Mint
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Mints;
