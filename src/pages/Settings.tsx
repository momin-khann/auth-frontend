import React from "react";
import CardWrapper from "@/components/wrapper/CardWrapper.tsx";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs.tsx";
import Account from "@/components/settings/Account.tsx";
import Password from "@/components/settings/Password.tsx";

const Settings = () => {
  const FormSchema = z.object({
    name: z.string().optional(),
    curr_password: z.string().optional(),
    new_password: z.string().optional(),
    tfa: z.boolean().optional(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      curr_password: "",
      new_password: "",
      tfa: false,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <CardWrapper label={"⚙️ Settings"}>
      <Tabs defaultValue="account" className={"space-y-5"}>
        <TabsList className={"w-full grid grid-cols-2"}>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Account />
        </TabsContent>
        <TabsContent value="password">
          <Password />
        </TabsContent>
      </Tabs>
    </CardWrapper>
  );
};
export default Settings;
