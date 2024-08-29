import React, { FunctionComponent } from "react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface OwnProps {
  message?: string;
}

type Props = OwnProps;

const FormError: FunctionComponent<Props> = ({ message }) => {
  if (!message) return;

  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <ExclamationTriangleIcon className={"h-4 w-4"} />
      <p>{message}</p>
    </div>
  );
};

export default FormError;
