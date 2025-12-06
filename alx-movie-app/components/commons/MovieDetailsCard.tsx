import { MovieDetailsProps } from "@/interfaces";
import Image from "next/image";

interface MovieDetailsCardProps {
  movie: MovieDetailsProps;
}

const MovieDetailsCard: React.FC<MovieDetailsCardProps> = ({ movie }) => {
  const imageSrc =
    movie.primaryImage?.url ||
    "https://placehold.co/600x400.png/600x400?text=No+Image";

return (
  <div className="min-h-screen bg-[#110F17] text-white px-4 md:px-10 lg:px-44 py-16">
    <h1 className="text-4xl md:text-6xl font-bold mb-6">
      {movie.titleText.text}
    </h1>

    <div className="mb-6 max-w-lg">
      <Image
        src={imageSrc}
        alt={movie.titleText.text}
        width={600}
        height={400}
        className="rounded-lg shadow-lg object-cover"
      />
    </div>

    <p className="text-lg mb-4">
      Release Year: {movie.releaseYear?.year || "N/A"}
    </p>

    <p className="text-lg mb-4">
      Original Title: {movie.originalTitleText?.text || "N/A"}
    </p>

    <p className="text-lg mb-4">
      Release Date:{" "}
      {movie.releaseDate
        ? `${movie.releaseDate.day}/${movie.releaseDate.month}/${movie.releaseDate.year}`
        : "N/A"}
    </p>

    <p className="text-lg mb-4">
      Type: {movie.titleType?.text || "N/A"}
    </p>

  </div>
);

};

export default MovieDetailsCard;
