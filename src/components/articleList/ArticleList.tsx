import React from 'react';
import './ArticleList.scss';

interface Data {
    url: string | undefined; 
    title: string; 
    author: string;
    objectID: string;
};

interface ListData {
    data: {
        hits: Array<Data>
    };
}

const ArticleList: React.FC<ListData | any> = ({data}) => {
    if (data && data.hits) {
        return (data.hits.map((hit: Data) => 
            <div className="col-sm-6" key={hit.objectID}>
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">{hit.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Author: {hit.author}</h6>
                <a href={hit.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read article</a>
                </div>
            </div>
            </div>
        ));
    } else return null;
};

export default ArticleList;