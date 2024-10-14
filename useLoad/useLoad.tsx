import { useEffect, useState } from "react";

type Parameters = {
  url: string;
  params?: object;
};

type ReturnData = {
  data: object | undefined;
  isLoading: boolean;
  error: any;
};

const useLoad = ({ url, params }: Parameters): ReturnData => {
  const [data, setData] = useState<object>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await fetch(url, params);
        if (!response.ok) {
          throw new Error("Errore");
        }
        const data = await response.json();
        setData(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    dataFetch();
  }, []);

  return { data, isLoading, error };
};

export default useLoad;
