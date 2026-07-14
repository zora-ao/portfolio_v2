import BottomNav from "./navigation";
import { Card, CardContent } from "./ui/card";

export default function CertificatesGrid(){

  return (
    <Card className="h-full bg-zinc-900">  
    <CardContent className="px-8">
      <BottomNav />

      <h2 className="text-3xl text-white font-bold">
        My Certificates
      </h2>

      <div className="mt-8 grid grid-cols-2 gap-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="aspect-video rounded-xl border"
          />
        ))}
      </div>
    </CardContent>
  </Card>
  )
}