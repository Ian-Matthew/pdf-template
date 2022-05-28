import React from "react";
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="mx-auto h-full min-h-screen items-center my-20 flex flex-col">
        {children}
      </main>
    </>
  );
}
