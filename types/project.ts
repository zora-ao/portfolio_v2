import { IconType } from "@icons-pack/react-simple-icons";

export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;

  tech: {
    name: string;
    icon: IconType;
  }[];

  github?: string;
  live?: string;
}