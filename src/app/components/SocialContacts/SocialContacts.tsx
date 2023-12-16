"use client";
import { useGetSocialContactsQuery } from "@/app/redux/services/socialContacts";
import { Skeleton } from "@mui/material";
import React from "react";
import NavList from "../NavigationList/NavList";
import NavListItem from "../NavigationList/NavListItem";
import NavSocialIcon from "../NavigationList/NavSocialIcon";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

type SocialContactPropTypes = {
  variant?: "black" | "white" | "color";
  size?: "small" | "large";
};

const LoadingSkeleton = () => {
  return (
    <NavList>
      {["", "", "", "", ""].map((item, index) => {
        return (
          <NavListItem key={index}>
            <NavSocialIcon
              sx={{
                fontSize: 18,
                color: "#1877F2",
                borderColor: "#1877F2",
              }}
            >
              <Skeleton variant="circular" width={25} height={25} />
            </NavSocialIcon>
          </NavListItem>
        );
      })}
    </NavList>
  );
};

const SocialContacts = (props: SocialContactPropTypes) => {
  const { variant = "color", size } = props;

  const {
    data: socialContacts,
    isLoading,
    isError,
  } = useGetSocialContactsQuery(null);

  const ChooseVariant = () => {
    switch (variant) {
      case "black":
        return "#000000";
      case "white":
        return "#FFFFFF";
      default:
        return false;
    }
  };

  const ChoseFontSize = () => {
    switch (size) {
      case "small":
        return 16;
      case "large":
        return 22;
      default:
        return 18;
    }
  };

  const SocialIcon = (icon: string) => {
    if (icon === "facebook")
      return (
        <NavSocialIcon
          sx={{
            fontSize: ChoseFontSize(),
            color: variant ? ChooseVariant() : "#1877F2",
            borderColor: variant ? ChooseVariant() : "#1877F2",
          }}
        >
          <FacebookIcon />
        </NavSocialIcon>
      );
    if (icon === "instagram")
      return (
        <NavSocialIcon
          sx={{
            fontSize: ChoseFontSize(),
            color: variant ? ChooseVariant() : "#fbad50",
            borderColor: variant ? ChooseVariant() : "#fbad50",
          }}
        >
          {" "}
          <InstagramIcon />
        </NavSocialIcon>
      );
    if (icon === "linkedin")
      return (
        <NavSocialIcon
          sx={{
            fontSize: ChoseFontSize(),
            color: variant ? ChooseVariant() : "#0077b5",
            borderColor: variant ? ChooseVariant() : "#0077b5",
          }}
        >
          {" "}
          <LinkedInIcon />{" "}
        </NavSocialIcon>
      );
    if (icon === "youtube")
      return (
        <NavSocialIcon
          sx={{
            fontSize: ChoseFontSize(),
            color: variant ? ChooseVariant() : "#CD201F",
            borderColor: variant ? ChooseVariant() : "#CD201F",
          }}
        >
          {" "}
          <YouTubeIcon />{" "}
        </NavSocialIcon>
      );
    if (icon === "twitter")
      return (
        <NavSocialIcon
          sx={{
            fontSize: ChoseFontSize(),
            color: variant ? ChooseVariant() : "#1DA1F2",
            borderColor: variant ? ChooseVariant() : "#1DA1F2",
          }}
        >
          {" "}
          <TwitterIcon />{" "}
        </NavSocialIcon>
      );
    if (icon === "email")
      return (
        <NavSocialIcon
          sx={{
            fontSize: ChoseFontSize(),
            color: variant ? ChooseVariant() : "#DAF7A6",
            borderColor: variant ? ChooseVariant() : "#DAF7A6",
          }}
        >
          {" "}
          <MailOutlineIcon />{" "}
        </NavSocialIcon>
      );
    return <></>;
  };

  if (isLoading) {
    return <LoadingSkeleton />;
  }
  return (
    <>
      {" "}
      <NavList>
        {socialContacts?.data?.map((contact: any, index: number) => {
          console.log(contact);
          return (
            <NavListItem key={index}>
              {SocialIcon(contact?.attributes?.contactType)}
            </NavListItem>
          );
        })}
      </NavList>
    </>
  );
};

export default SocialContacts;
