import Image from "next/image";
import BottomNav from "../navigation";
import { Card, CardContent } from "../ui/card";

const certificates = [
  {
    name: "Legacy Responsive Web Design",
    src: "/certificates/legacy_responsive_web_design.png",
  },
  {
    name: "Legacy",
    src: "/certificates/legacy_responsive_web_design.png",
  },
  {
    name: "Legacy",
    src: "/certificates/legacy_responsive_web_design.png",
  },
  {
    name: "Legacy",
    src: "/certificates/legacy_responsive_web_design.png",
  },
  {
    name: "Legacy",
    src: "/certificates/legacy_responsive_web_design.png",
  },
  {
    name: "Legacy",
    src: "/certificates/legacy_responsive_web_design.png",
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
              className="flex flex-col items-center space-y-3"
            >
              <Image
                src={certificate.src}
                alt={certificate.name}
                width={500}
                height={300}
                className="w-full rounded-xl border border-zinc-700 object-cover"
              />

              <h3 className="text-center text-sm text-zinc-200">
                {certificate.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}