import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Props {
  label: string;
  children: React.ReactNode;
}

const CardWrapper = ({ label, children }: Props) => {
  return (
    <Card className={"w-[600px] shadow-md"}>
      <CardHeader>
        <h1 className={"text-2xl font-semibold text-center"}>{label}</h1>
      </CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
    </Card>
  );
};
export default CardWrapper;
