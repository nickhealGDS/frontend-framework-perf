"use client";
import { type ComponentProps } from "react";
import { useFormStatus } from "react-dom";

export default function SearchButton({ ...rest }: ComponentProps<"button">) {
  const status = useFormStatus();

  return (
    <button
      aria-disabled={status.pending}
      disabled={status.pending}
      {...rest}
    />
  );
}
