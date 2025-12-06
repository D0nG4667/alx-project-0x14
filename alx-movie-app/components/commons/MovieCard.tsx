import { MovieProps } from "@/interfaces"
import Image from "next/image"
import { useRouter } from "next/router";

const MovieCard: React.FC<MovieProps> = ({ id, title, posterImage, releaseYear }) => {  
  const imageSrc = posterImage || "https://placehold.co/300x430.png?text=No+Image"; // Fallback image if posterImage is missing
  const router = useRouter();

  return (
    <div 
        className="h-[563px] hover:cursor-pointer"
        onClick={() => router.push(`/movies/${id}`, undefined, { shallow: false })}
    >
      <div>
        <Image className="h-[430px] w-full rounded-md hover:cursor-pointer" src={imageSrc} width={100} height={100} alt={title} />

      </div>
      <div className="flex justify-between py-4">
        <p className="text-xl font-bold">{title}</p>
        <p className="text-xl text-[#E2D609]">{releaseYear}</p>
      </div>
    </div>
  )
}

export default MovieCard