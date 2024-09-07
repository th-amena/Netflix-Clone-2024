import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests';

function RowList() {
  return (
     <>
        <Row
           title="Netflix Originals"
           fetchUrl={requests.fetchNetflixOriginals}
           isLargeRow={true}
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovies} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

        <Row title="TV Shows" fetchUrl={requests.fetchTvShow} />
     </>
  );
}

export default RowList;
