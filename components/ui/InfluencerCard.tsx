import Image from 'next/image';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

interface InfluencerCardProps {
  name: string;
  image: string;
  category: string;
  followers: string;
  instagram?: string;
  linkedin?: string;
  engagement: string;
}

export const InfluencerCard = ({
  name,
  image,
  category,
  followers,
  instagram,
  linkedin,
  engagement,
}: InfluencerCardProps) => {
  return (
    <div className="bg-[#1A1B2E] rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-400 mb-2">{category}</p>
        <div className="space-y-2">
          <p className="text-sm">
            <span className="text-gray-400">Followers:</span> {followers}
          </p>
          <p className="text-sm">
            <span className="text-gray-400">Engagement Rate:</span> {engagement}
          </p>
        </div>
        <div className="mt-4 flex space-x-4">
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400"
            >
              <FaInstagram size={24} />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400"
            >
              <FaLinkedin size={24} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};