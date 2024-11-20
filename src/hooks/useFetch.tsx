import React, { useCallback, useState } from "react";

interface PropsApiReturn {
  url: string;
  options?: {
    method: string;
    headers?: {
      Accept?: string;
      Authorization?: string;
      "Content-Type"?: string;
    };
    body?: string | Record<string, unknown>; // Tipo para o corpo da requisição
  };
}

const useFetch = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const request = useCallback(
    async (url: string, options?: PropsApiReturn | RequestInit | any) => {
      let response;
      let json;
      try {
        setError(null);
        setLoading(true);
        response = await fetch(url, options);
        json = await response.json();
        setData(json);
        if (response.ok === false) throw new Error(json.message);
      } catch (err: any) {
        json = null;
        setError(err?.message || "An error occurred");
      } finally {
        setLoading(false);
        return { response, json };
      }
    },
    []
  );

  return {
    data,
    loading,
    error,
    request,
    setLoading,
    setError,
  };
};

export default useFetch;
