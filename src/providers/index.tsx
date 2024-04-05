'use client';
import { ReactQueryProvider } from './reactQueryProvider';

export const Provider = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </>
  );
};
