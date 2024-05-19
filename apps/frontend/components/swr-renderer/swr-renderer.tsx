import { createContext, useContext, ReactNode } from "react";

interface Props<T> {
  data: T | null;
  isLoading: boolean;
  error: any;
  children: ReactNode;
}

interface SWRContextType<T> {
  data: T | null;
  isLoading: boolean;
  error: any;
}

const SWRContext = createContext<SWRContextType<any>>({
  data: null,
  isLoading: false,
  error: null,
});

export function SWRRenderer<T>({ data, error, isLoading, children }: Props<T>) {
  return (
    <SWRContext.Provider value={{ data, error, isLoading }}>
      {children}
    </SWRContext.Provider>
  );
}

export function SWRData<T>({ children }: { children: (data: T) => ReactNode }) {
  const { data } = useContext(SWRContext) as SWRContextType<T>;
  return data ? children(data) : null;
}

export function SWRLoading({ children }: { children: ReactNode }) {
  const { isLoading } = useContext(SWRContext);
  return isLoading ? <>{children}</> : null;
}

export function SWRError({ children }: { children: ReactNode }) {
  const { error } = useContext(SWRContext);
  return error ? <>{children}</> : null;
}
