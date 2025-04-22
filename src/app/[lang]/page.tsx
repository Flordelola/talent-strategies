"use client";
import { useState, useEffect, useCallback } from "react";
import { fetchAPI } from "./utils/fetch-api";

interface Meta {
  pagination: {
    start: number;
    limit: number;
    total: number;
  };
}

export default function Profile() {
  const [meta, setMeta] = useState<Meta | undefined>();
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = useCallback(async (start: number, limit: number) => {
    setLoading(true);
    try {
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
      const path = `/pages`;
      const slug = ``;
      const urlParamsObject = {
        populate: {
          filters: { slug },
          sections: { populate: '*' },

        },
      };

      const options = { headers: { Authorization: `Bearer ${token}` } };

      const responseData = await fetchAPI(path, urlParamsObject, options);

     
      setData(responseData.data);
     
      setMeta(responseData.meta);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);


  useEffect(() => {
    fetchData(0, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  }, [fetchData]);

  return (
    <div>
      Home Page
    </div>
  );
}