export interface CertificateProject {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Certificate {
  name: string;
  slug: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  link: string;
  skills: string[];
  projects: CertificateProject[];
}