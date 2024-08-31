import React, { FunctionComponent } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import Social from "@/components/reusable/Social.tsx";
import Header from "@/components/reusable/Header.tsx";
import { Link } from "react-router-dom";

interface OwnProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel?: string;
  backButtonHref?: string;
  showSocial?: boolean;
}

type Props = OwnProps;

const CardWrapper: FunctionComponent<Props> = ({
  children,
  headerLabel,
  showSocial,
  backButtonLabel,
  backButtonHref,
}) => {
  return (
    <Card className={"w-[400px] shadow-md"}>
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>

      <CardContent>{children}</CardContent>

      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}

      <div className="text-center pb-6">
        <Link to={`${backButtonHref}`} className="underline font-semibold">
          {backButtonLabel}
        </Link>
      </div>
    </Card>
  );
};

export default CardWrapper;
