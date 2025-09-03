"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

interface IReactQueryProviderProps {
  children: ReactNode;
}

export default function ReactQueryProvider({
  children,
}: IReactQueryProviderProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // 데이터가 5분 동안 신선하다고 간주
            staleTime: 5 * 60 * 1000,
            // 5분 후 가비지 컬렉션
            gcTime: 5 * 60 * 1000,
            // 에러 시 재시도 횟수
            retry: 3,
            // 재시도 지연시간
            retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
          },
          mutations: {
            // 에러 시 재시도 횟수
            retry: 1,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
