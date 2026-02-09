"use client";

import Image, { StaticImageData } from "next/image";
interface Props {
  img: StaticImageData | string;
  title: string;
  ring: string;
  year: number | null;
  ageRating: string;
  platforms?: string;
}

const Card: React.FC<Props> = ({
  img,
  title,
  ring,
  year,
  ageRating,
  platforms,
}) => {
  return (
    <div className="bg-card w-full flex flex-col h-125 rounded overflow-auto">
      <div className="w-full h-80 overflow-hidden rounded-t">
        <Image
          width={400}
          height={125}
          className="w-full h-full object-cover"
          src={img}
          alt={title}
          unoptimized
        />
      </div>
      <div className="w-full h-1/2 flex flex-col justify-between p-3">
        <div className="flex flex-col justify-between h-full">
          <div className="w-full flex flex-col">
            <span className="text-primary">⭐{ring}</span>
            <span className="text-text-white text-xl font-bold mt-5">
              {title}
            </span>
            <span className="text-text-muted mt-3">
              platforms: {platforms ?? "N/A"}
            </span>
          </div>
          <div className="flex w-full text-text-muted">
            <span className="border-e pe-3 me-3">{year}</span>
            <span className="">{ageRating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
