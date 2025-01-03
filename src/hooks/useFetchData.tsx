import { useState, useEffect, useRef } from "react";
import { TUsers, TUserInfo } from "../models";

type FetchResult = {
  data: TUsers[] | TUserInfo;
  isLoading: boolean;
  isError: Error | null;
};

export const useFetchData = (url: string, initialData: TUsers[] | TUserInfo): [FetchResult] => {
  const [data, setData] = useState<TUsers[] | TUserInfo>(initialData);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<Error | null>(null);
  const timestampRef = useRef<number>();

  useEffect(() => {
    const fetchData = async () => {
      const timestamp = Date.now();
      timestampRef.current = timestamp;
      setError(null);
      setLoading(true);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const resData = await response.json();

        if (timestampRef.current === timestamp) {
          setData(resData);
        }
      } catch (e) {
        if (e instanceof Error) setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }];
};