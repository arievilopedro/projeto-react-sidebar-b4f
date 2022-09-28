import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import BookIcon from "@mui/icons-material/Book";
import CampaignIcon from "@mui/icons-material/Campaign";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Candidatos",
    icon: <PeopleAltIcon />,
    link: "/candidatos",
  },
  {
    title: "Aprendizes",
    icon: <PsychologyAltIcon />,
    link: "/home",
  },
  {
    title: "Professores",
    icon: <BookIcon />,
    link: "/home",
  },
  {
    title: "Bootcamps",
    icon: <CampaignIcon />,
    link: "/home",
  },
];
