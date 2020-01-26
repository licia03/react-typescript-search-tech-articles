import React, { useRef } from 'react';

interface PropsType {
    onSubmit: (value: string) => void;
};

const Form: React.FC<PropsType> = ({onSubmit}) => {
    const searchInput = useRef<HTMLInputElement | null>(null);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(searchInput.current!.value);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="input-group mb-3">
            <input type="text" 
                className="form-control" 
                placeholder="Search articles" 
                aria-label="Search articles" 
                aria-describedby="button-search"
                ref={searchInput} />
            <div className="input-group-append">
                <button className="btn btn-primary" type="submit" id="button-search">SEARCH</button>
            </div>
            </div>
        </form>
    );
}

export default Form;