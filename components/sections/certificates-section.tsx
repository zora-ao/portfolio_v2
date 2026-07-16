import Image from "next/image";
import BottomNav from "../navigation";
import { Card, CardContent } from "../ui/card";
import { Link2 } from "lucide-react";

const certificates = [
  {
    name: "Legacy Responsive Web Design",
    src: "/certificates/legacy_responsive_web_design.png",
    link: "_blank"
  },
  {
    name: "Legacy Algorithm and Data Structure",
    src: "/certificates/legacy_responsive_web_design.png",
    link: "_blank"
  },
  {
    name: "Legacy",
    src: "/certificates/legacy_responsive_web_design.png",
    link: "_blank"
  },
  {
    name: "Legacy",
    src: "/certificates/legacy_responsive_web_design.png",
    link: "_blank"
  },
  {
    name: "Legacy",
    src: "/certificates/legacy_responsive_web_design.png",
    link: "_blank"
  },
  {
    name: "Legacy",
    src: "/certificates/legacy_responsive_web_design.png",
    link: "_blank"
  },
];

export default function CertificatesSection() {
  return (
    <div className="h-auto my-2">

      <div className="h-full overflow-y-auto scrollbar-hide">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {certificates.map((certificate, i) => (
            <div
              key={i}
              className="flex flex-col items-center space-y-3 bg-background p-4 rounded-xl"
            >
              <Image
                src={certificate.src}
                alt={certificate.name}
                width={500}
                height={300}
                className="w-full border border-primary object-cover"
              />

              <div className="flex justify-around w-full border border-primary py-2 rounded-sm">
                <h3 className="text-center text-sm text-foreground">
                  {certificate.name}
                </h3>

                <a href={certificate.link} target="_blank" rel="noopener noreferrer"
                  className="text-foreground"
                >
                  <Link2 />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}