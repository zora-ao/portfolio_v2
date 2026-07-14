import { Briefcase, Home, Laptop, Mail, Sun, User } from "lucide-react";


export default function BottomNav(){

  return (
    <div className="mb-2 flex justify-end relative">
      <nav className="flex items-center absolute right-0 gap-12 rounded-2xl border border-zinc-700 bg-zinc-950 px-8 py-4">
        <Home className="h-5 w-5 text-white" />
        <User className="h-5 w-5 text-white" />
        <Briefcase className="h-5 w-5 text-white" />
        <Mail className="h-5 w-5 text-white" />
        <Sun className="h-5 w-5 text-white" />
      </nav>
    </div>
  )
}