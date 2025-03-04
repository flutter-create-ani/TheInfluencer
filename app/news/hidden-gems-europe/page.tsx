import React from "react";
import Image from "next/image";

const HiddenGemsEurope = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Exploring Hidden Gems in Europe
        </h1>
        <Image
          src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          alt="Hidden Gems in Europe"
          width={1170}
          height={500}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
        <p className="text-lg mb-6">
          Europe is home to some of the world&apos;s most famous landmarks, but
          it also boasts countless hidden gems waiting to be discovered. In this
          article, we take you off the beaten path to explore lesser-known
          destinations that offer unique experiences and breathtaking beauty.
        </p>
        <h2 className="text-2xl font-bold mb-4">1. Hallstatt, Austria</h2>
        <p className="text-lg mb-6">
          Nestled between the Dachstein Alps and a pristine lake, Hallstatt is a
          picturesque village that looks like it&apos;s straight out of a fairy
          tale. With its charming houses, serene lake views, and rich history,
          it&apos;s a must-visit for anyone traveling to Austria.
        </p>
        <h2 className="text-2xl font-bold mb-4">2. Sintra, Portugal</h2>
        <p className="text-lg mb-6">
          Sintra is a magical town located just outside Lisbon. Known for its
          colorful palaces, lush gardens, and mystical atmosphere, Sintra is a
          UNESCO World Heritage Site that will transport you to another world.
        </p>
        <h2 className="text-2xl font-bold mb-4">3. Ronda, Spain</h2>
        <p className="text-lg mb-6">
          Perched atop a deep gorge, Ronda is one of Spain&apos;s most dramatic
          towns. Its iconic Puente Nuevo bridge offers stunning views of the
          surrounding countryside, and its rich history makes it a fascinating
          destination for history buffs.
        </p>
        <h2 className="text-2xl font-bold mb-4">4. Giethoorn, Netherlands</h2>
        <p className="text-lg mb-6">
          Often referred to as the &quot;Venice of the North,&quot; Giethoorn is
          a tranquil village with no roads. Instead, canals connect the
          thatched-roof houses, and boats are the primary mode of
          transportation. It&apos;s the perfect place to unwind and enjoy
          nature.
        </p>
        <a
          href="https://www.lonelyplanet.com/europe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:text-red-400 font-medium"
        >
          Discover more hidden gems in Europe
        </a>
      </div>
    </div>
  );
};

export default HiddenGemsEurope;
