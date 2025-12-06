import { MovieDetailsProps } from "@/interfaces";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "@/components/commons/Loading";
import MovieDetailsCard from "@/components/commons/MovieDetailsCard";

const MovieDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState<MovieDetailsProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!id) return;

    const fetchMovieDetails = async () => {
      setLoading(true);
      const resp = await fetch(`/api/fetch-movie?id=${id}`);
      if (!resp.ok) {
        setLoading(false);
        throw new Error("Failed to fetch movie details");
      }
      const data = await resp.json();
      setMovie(data.movie);
      setLoading(false);
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <Loading />;
  if (!movie) return <p className="text-white p-10">Movie not found.</p>;

  return <MovieDetailsCard movie={movie} />;
};

export default MovieDetails;
