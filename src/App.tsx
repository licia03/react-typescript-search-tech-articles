import React, { useRef } from 'react';
import logo from './logo.svg';
import useDataApi from './components/useDataApi';
import ArticleList from './components/articleList/ArticleList';
import Form from './components/form/Form';
import './App.scss';

const App: React.FC = () => {
  const {data, isLoading, isError, setUrl} = useDataApi();

  const submitHandler = (inputValue: string) => {
    setUrl(`https://hn.algolia.com/api/v1/search?query=${inputValue}`);
  };

  return (
    <div className="App d-flex justify-content-center flex-column align-items-center">
      <h1>Tech articles</h1>
      <Form onSubmit={submitHandler} />
      {isError && <div>Something went wrong!</div>}
      {isLoading ? 
        (<div>Loading.....</div>) : 
        <ArticleList data={data} />
      }
    </div>
  );
}

export default App;
