import React, { useContext } from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";
import { SpotifyContext } from "@/contexts/SpotifyContext";

const CurrentlyPlaying = () => {
  const { spotifyData } = useContext(SpotifyContext);

  return (
    <div
      className={`flex flex-col-reverse items-end sm:flex-row sm:items-center gap-2 ${
        spotifyData?.isPlaying ? "animate-pulse" : "opacity-75"
      }`}
    >
      {!spotifyData?.isPlaying ? (
        <span className="text-sm text-right opacity-75 whitespace-nowrap">
          Not Currently Listening
        </span>
      ) : (
        <Link href={spotifyData.link!} passHref replace={false}>
          <a
            className="font-normal after:bg-transparent"
            target="spotify:link_out"
          >
            <div className="flex flex-row-reverse items-start gap-2 sm:items-center sm:flex-row-reverse">
              {spotifyData.image?.url && (
                <div className="min-h-[2rem] min-w-[2rem] mt-1 sm:mt-0 flex sm:items-center">
                  <Image
                    className="w-8 rounded aspect-square"
                    width={32}
                    height={32}
                    src={spotifyData.image.url}
                    alt={`${spotifyData.name} by ${spotifyData.artists} album cover.`}
                  />
                </div>
              )}
              <span className="max-w-[16ch] flex flex-col md:max-w-none text-right cursor-alias">
                <span className="text-sm">{spotifyData.name}</span>
                <span className="text-xs text-neutral-400">
                  by {spotifyData.artists}
                </span>
              </span>
            </div>
          </a>
        </Link>
      )}
      <FontAwesomeIcon className="ml-2" size="lg" icon={faSpotify} />
    </div>
  );
};

export default CurrentlyPlaying;
