import { useQuery, useMutation } from "@tanstack/react-query";
import dummyApi from "./base/dummyApi";
import rawgApi from "./base/rawgApi";

export const apiMap = {
  dummy: dummyApi,
  rawg: rawgApi,
};

export interface ApiConfig<TParams = unknown, TBody = unknown> {
  url: string;
  params?: TParams;
  body?: TBody;
  enabled?: boolean;
  source?: "dummy" | "rawg";
}

// GET
export const useGet = <TResponse = unknown, TParams = unknown>({
  url,
  params,
  enabled = true,
  source = "dummy",
}: ApiConfig<TParams>) =>
  useQuery<TResponse>({
    queryKey: [source, url, params],
    queryFn: async () => {
      const res = await apiMap[source].get<TResponse>(url, { params });
      return res.data;
    },
    enabled,
  });

// POST
export const usePost = <TResponse = unknown, TBody = unknown>() =>
  useMutation<TResponse, unknown, ApiConfig<unknown, TBody>>({
    mutationFn: async ({ url, body, source = "dummy" }) => {
      const res = await apiMap[source].post<TResponse>(url, body);
      return res.data;
    },
  });

// PUT
export const usePut = <TResponse = unknown, TBody = unknown>() =>
  useMutation<TResponse, unknown, ApiConfig<unknown, TBody>>({
    mutationFn: async ({ url, body, source = "dummy" }) => {
      const res = await apiMap[source].put<TResponse>(url, body);
      return res.data;
    },
  });

// DELETE
export const useDelete = <TResponse = unknown>() =>
  useMutation<TResponse, unknown, ApiConfig>({
    mutationFn: async ({ url, source = "dummy" }) => {
      const res = await apiMap[source].delete<TResponse>(url);
      return res.data;
    },
  });
