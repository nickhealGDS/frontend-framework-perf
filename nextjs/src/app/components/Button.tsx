"use client";
import { useFormStatus } from "react-dom";

type TButtonProps = Readonly<{
  children: React.ReactNode;
}>;

export default function SearchButton({ ...rest }: TButtonProps) {
  const status = useFormStatus();

  return (
    <button
      aria-disabled={status.pending}
      disabled={status.pending}
      {...rest}
    />
  );
}
