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

const SocialContacts = () => {
  const {
    data: socialContacts,
    isLoading,
    isError,
  } = useGetSocialContactsQuery(null);

  const SocialIcon = (icon: string) => {
    console.log(icon);
    if (icon === "facebook")
      return (
        <NavSocialIcon
          sx={{
            fontSize: 18,
            color: "#1877F2",
            borderColor: "#1877F2",
          }}
        >
          <FacebookIcon />
        </NavSocialIcon>
      );
    if (icon === "instagram")
      return (
        <NavSocialIcon
          sx={{
            fontSize: 18,
            color: "#fbad50",
            borderColor: "#fbad50",
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
            fontSize: 18,
            color: "#0077b5",
            borderColor: "#0077b5",
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
            fontSize: 18,
            color: "#CD201F",
            borderColor: "#CD201F",
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
            fontSize: 18,
            color: "#1DA1F2",
            borderColor: "#1DA1F2",
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
            fontSize: 18,
            color: "#DAF7A6",
            borderColor: "#DAF7A6",
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
