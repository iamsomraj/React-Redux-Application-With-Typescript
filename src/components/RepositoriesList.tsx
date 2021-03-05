import { useState, useEffect, useRef } from "react";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [term, setTerm] = useState("");
  const { seachRepositories } = useActions();
  const { loading, error, data } = useSelector((state) => state.repositories);

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const searchSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    seachRepositories(term);
  };

  return (
    <div>
      <form onSubmit={searchSubmitHandler}>
        <input
          ref={inputRef}
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {error && <div>{error}</div>}
      {loading && <div>Loading....</div>}

      {!error &&
        !loading &&
        data.map((name) => {
          return <p key={name}>{name}</p>;
        })}
    </div>
  );
};

export default RepositoriesList;
