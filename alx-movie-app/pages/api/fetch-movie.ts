import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method === "GET") {
    const { id } = request.query;

    const resp = await fetch(`https://moviesdatabase.p.rapidapi.com/titles/${id}`, {
      headers: {
        "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.MOVIE_API_KEY}`,
      },
    });

    if (!resp.ok) {
      return response.status(500).json({ error: "Failed to fetch movie details" });
    }

    const movieResponse = await resp.json();
    const movie = movieResponse.results;

    return response.status(200).json({ movie });
  } else {
    response.setHeader("Allow", ["GET"]);
    response.status(405).end(`Method ${request.method} Not Allowed`);
  }
}
