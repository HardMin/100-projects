import React from "react";

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export const Button = ({
  className,
  children,
  ...props
}: React.ComponentProps<"button"> & ButtonProps) => {
  return (
    <button
      className={`p-7 bg-amber-500 rounded-full text-3xl font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
