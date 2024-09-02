import React, { FunctionComponent } from "react";

interface OwnProps {
  label: string;
}

type Props = OwnProps;

const Header: FunctionComponent<Props> = ({ label }) => {
  return (
    <div className={"space-y-4"}>
      <h1 className="text-3xl font-semibold text-center">🔐 Auth</h1>
      <p className="text-center">{label}</p>
    </div>
  );
};

export default Header;
