import React, { FunctionComponent } from "react";
import { CheckCircledIcon } from "@radix-ui/react-icons";

interface OwnProps {
  message?: string;
}

type Props = OwnProps;

const FormSuccess: FunctionComponent<Props> = ({ message }) => {
  if (!message) return;

  return (
    <div className="bg-green-100 p-3 rounded-md flex items-center gap-x-2 text-sm text-green-700">
      <CheckCircledIcon className={"h-4 w-4"} />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
