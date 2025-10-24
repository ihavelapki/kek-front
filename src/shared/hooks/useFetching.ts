import { useState } from "react";

/**
 * Универсальный хук для выполнения асинхронных операций с контролем загрузки и ошибок.
 * @param callback Асинхронная функция, которую нужно выполнить.
 */
export function useFetching<T extends (...args: any[]) => Promise<any>>(callback: T) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetching = async (...args: Parameters<T>) => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("Unknown error");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error] as const;
}
