import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="flex justify-center items-center h-[90vh]">
        {children}
      </div>
    </main>
  );
}
