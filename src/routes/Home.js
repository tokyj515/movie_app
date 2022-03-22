import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';


class Home extends React.Component{
  state = {
    isLoading: true, //로딩상태인지 아닌지 판단
    movies: [],
  };


  getMovie = async () => { //영화 데이터를 얻는 함수 
    const { //구조할당
      data: {
        data: {movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({movies: movies, isLoading: false}); //정보를 다 불러오면 false로 바꿈
  }


  componentDidMount(){ //컴포넌트가 실행되면 자동 실행
    this.getMovie();

  }


  render(){
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie //Movie컴포넌트 props 추가
                key = {movie.id} //아이디는 유일하니까
                id = {movie.id}
                year = {movie.year}
                title = {movie.title}
                summary = {movie.summary}
                poster = {movie.medium_cover_image}
                genres= {movie.genres}
              />
            ))}
          </div>
        )}     
      </section>
    );
  }
}




export default Home;
