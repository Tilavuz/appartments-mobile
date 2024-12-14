import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

export const cabinetConstants = ({ type }: { type: "login" | "logout" }) => {
  const login =
    type === "login"
      ? [
          {
            icon: <Ionicons name="language" size={24} color="#666" />,
            title: "Login successfull",
            link: "/",
          },
        ]
      : [];
  return [
    {
      icon: <Ionicons name="language" size={24} color="#666" />,
      title: "Ilova tili",
      link: "/",
    },
    {
      icon: <Ionicons name="notifications-outline" size={24} color="#666" />,
      title: "Bildirishnomalar",
      link: "/",
    },
    {
      icon: (
        <Ionicons name="information-circle-outline" size={24} color="#666" />
      ),
      title: "Ma'lumot",
      link: "/",
    },
    {
      icon: (
        <MaterialCommunityIcons name="email-outline" size={24} color="#666" />
      ),
      title: "Biz bilan bog'lanish",
      link: "/",
    },
    ...login,
  ];
};
