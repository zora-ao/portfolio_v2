import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { certificates } from "@/data/certificates";

import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface CertificatePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: CertificatePageProps) {
  const { slug } = await params;

  const certificate = certificates.find(
    (certificate) => certificate.slug === slug
  );

  if (!certificate) {
    return {
      title: "Certificate not found",
    };
  }

  return {
    title: certificate.name,
    description: certificate.description,
  };
}

export default async function CertificatePage({
  params,
}: CertificatePageProps) {
  const { slug } = await params;

  const certificate = certificates.find(
    (certificate) => certificate.slug === slug
  );

  if (!certificate) {
    return <div>Certificate not found.</div>;
  }

  return (
    <div className="space-y-10 py-6 p-10">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              render={<Link href="/">Home</Link>}
            />
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink
              render={
                <Link href="/#certificates">
                  Certificates
                </Link>
              }
            />
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>{certificate.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Certificate Overview */}
      <section
        className="
          grid
          gap-8
          lg:grid-cols-[320px_1fr]
          lg:items-start
        "
      >
        {/* Certificate Image */}
        <div
          className="
            overflow-hidden
            rounded-2xl
            border
            border-border
            bg-background/50
          "
        >
          <Image
            src={certificate.image}
            alt={certificate.name}
            width={800}
            height={600}
            className="h-auto w-full"
          />
        </div>

        {/* Certificate Details */}
        <div className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
              {certificate.name}
            </h1>

            <p className="text-sm text-muted-foreground">
              {certificate.issuer} · {certificate.date}
            </p>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">
              About This Certificate
            </h2>

            <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
              {certificate.description}
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">
              What I Learned
            </h2>

            <div className="flex flex-wrap gap-2">
              {certificate.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-lg
                    border
                    border-border
                    bg-background/50
                    px-3
                    py-1.5
                    text-sm
                    text-muted-foreground
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Credential */}
          <Link
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button>
              View Credential
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Projects */}
      <section className="space-y-5">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">
            Projects
          </h2>

          <p className="text-sm text-muted-foreground">
            Projects completed while earning this certification.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {certificate.projects.map((project) => (
            <div
              key={project.name}
              className="
                flex
                flex-col
                rounded-2xl
                border
                border-border
                bg-background/50
                p-5
                transition-colors
                hover:border-brand/50
              "
            >
              <div className="space-y-2">
                <h3 className="font-semibold">
                  {project.name}
                </h3>

                <p className="text-sm leading-6 text-muted-foreground">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-lg
                      bg-muted
                      px-2.5
                      py-1
                      text-xs
                      text-muted-foreground
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Project Link */}
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex"
                >
                  <Button variant="outline" size="sm">
                    View Project
                    <ExternalLink className="ml-2 h-3.5 w-3.5" />
                  </Button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}