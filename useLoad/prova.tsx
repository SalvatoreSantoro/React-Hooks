import useLoad from "./useLoad";

const Prova = () => {
  const { data, isLoading, error } = useLoad({
    url: "https://jsonplaceholder.typicode.com/photos",
  });
  console.log(error);
  return (
    <div>
      {isLoading && <h1>Loading</h1>}
      {data && <h1>Dato</h1>}
      {error && <h1>{error}</h1>}
    </div>
  );
};

export default Prova;
