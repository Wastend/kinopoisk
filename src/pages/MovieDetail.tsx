import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Movie } from '../services/movie';

const API_URL = 'https://api.kinopoisk.dev/v1.4/movie';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Для навигации назад

  // useEffect(() => {
  //   fetchMovie();
  // }, []);

  // useEffect(() => {
  //   document.title = movie?.name ? movie?.name : "Kinopoisk";
  // }, [movie?.name]);

  // const fetchMovie = async () => {
  //   try {
  //     const response = await axios.get(`${API_URL}/${id}`, {
  //       headers: {
  //         'accept': 'application/json',
  //         'X-API-KEY': process.env.REACT_APP_KINOPOISK_TOKEN, // Токен API из .env файла
  //       },
  //     });
  //     console.log(response.data);
      
  //     setMovie(response.data); // Сохраняем данные о фильме
  //   } catch (err) {
  //     setError('Failed to fetch movie data.'); // Если запрос завершился с ошибкой
  //   } finally {
  //     setLoading(false); // Выключаем индикатор загрузки
  //   }
  // };

  // if (loading) return <div>Loading...</div>; // Показать индикатор загрузки
  // if (error) return <div>{error}</div>; // Показать сообщение об ошибке
  // if (!movie) return <div>No movie data available.</div>; // Показать сообщение, если данных нет

  return (
    // <div>
    //   <button onClick={() => navigate(-1)}>Back</button>
    //   <h1>{movie.name || movie.alternativeName}</h1>
    //   <p>{movie.description}</p>
    //   <p>Rating: {movie.rating.kp}</p>
    //   <p>Year: {movie.year}</p>
    //   <p>Actors:</p>
    //   <ul>
    //     {movie.persons
    //       .filter(person => person.enProfession === 'actor')
    //       .slice(0, 10) // Ограничение до 10 актёров
    //       .map((actor) => (
    //         <li key={actor.id}>{actor.name}</li>
    //       ))}
    //   </ul>
    //   {/* Добавьте сюда карусель постеров и карусель похожих фильмов */}
    // </div>
    <div><button onClick={() => navigate(-1)}>Back</button><h1>Мстители</h1><p>Локи, сводный брат Тора, возвращается, и в этот раз он не один. Земля оказывается на грани порабощения, и только лучшие из лучших могут спасти человечество. Глава международной организации Щ.И.Т. Ник Фьюри собирает выдающихся поборников справедливости и добра, чтобы отразить атаку. Под предводительством Капитана Америки Железный Человек, Тор, Невероятный Халк, Соколиный Глаз и Чёрная Вдова вступают в войну с захватчиком.</p><p>Rating: 7.893</p><p>Year: 2012</p><p>Actors:</p><ul><li>Роберт Дауни мл.</li><li>Крис Эванс</li><li>Марк Руффало</li><li>Крис Хемсворт</li><li>Скарлетт Йоханссон</li><li>Джереми Реннер</li><li>Том Хиддлстон</li><li>Сэмюэл Л. Джексон</li><li>Кларк Грегг</li><li>Коби Смолдерс</li></ul></div>
  );
}

export default MovieDetail;
