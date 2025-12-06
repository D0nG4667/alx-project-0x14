# 🎬 CineSeek API Explorer (alx-project-0x14)

This project explores the **MoviesDatabase API (TMDB)** to understand its documentation, endpoints, and integration requirements.  
The goal is to master RESTful connections by reviewing API structure, authentication, and best practices for building a movie discovery application.

---

## API Overview

The **TMDB API** provides access to a vast movie and TV database contributed by a global community.  
Key features include:

- **Movie and TV data**: Titles, genres, release dates, ratings, and cast/crew information.
- **Search and discovery**: Filter by year, genre, or keywords.
- **Images and posters**: Access to high-quality images and backdrops.
- **International support**: Data available in multiple languages.
- **Pagination**: Efficient browsing through large datasets.

---

## Version

The current version of the TMDB API is **v3.0**.

---

## Available Endpoints

- **/titles** – Fetch movie and TV show data, supports filtering by year and genre.  
- **/search/movie** – Search for movies by title keywords.  
- **/search/tv** – Search for TV shows.  
- **/movie/{id}** – Retrieve detailed information about a specific movie.  
- **/tv/{id}** – Retrieve detailed information about a specific TV show.  
- **/person/{id}** – Get details about actors, directors, or crew members.  
- **/images/{id}** – Access posters, backdrops, and other media assets.  

---

## Request and Response Format

### Request Example

```http
GET https://api.themoviedb.org/3/movie/550?api_key=YOUR_API_KEY
```

### Response Example

```json
{
  "id": 550,
  "title": "Fight Club",
  "release_date": "1999-10-15",
  "genres": [
    { "id": 18, "name": "Drama" }
  ],
  "overview": "A ticking-time-bomb insomniac and a soap salesman..."
}
```

- **Requests** are typically made via `GET` or `POST` with query parameters or JSON bodies.  
- **Responses** are JSON objects containing movie metadata, arrays for genres, and nested objects for cast/crew.

---

## Authentication

- Authentication is required via **API key**.  
- Two methods are supported:
  - **Query parameter**: `?api_key=YOUR_API_KEY`
  - **Authorization header**: `Authorization: Bearer YOUR_API_KEY`
- API keys must be stored securely in environment variables (e.g., `.env.local`).

---

## Error Handling

Common error responses:

- **401 Unauthorized** – Invalid or missing API key.  
- **404 Not Found** – Requested resource does not exist.  
- **429 Too Many Requests** – Rate limit exceeded.  
- **500 Internal Server Error** – Unexpected server issue.  

Best practices:

- Use `try/catch` blocks around fetch calls.  
- Check `resp.ok` before parsing JSON.  
- Display user-friendly error messages.

---

## Usage Limits and Best Practices

- **Rate limits**: TMDB enforces request limits per second/minute.  
- **Pagination**: Use `page` query parameter to navigate results.  
- **Caching**: Cache responses to reduce API calls.  
- **Localization**: Use `language` parameter for international audiences.  
- **Environment variables**: Never expose API keys in client-side code.  

---

## Next Steps

This README sets the foundation for integrating TMDB into the CineSeek app.  
Future tasks will involve building components, setting up API routes, and managing state for filtering and pagination.
