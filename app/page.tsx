"use client";


import { useState } from "react";
import Image from "next/image";
import { Instagram, Linkedin, X } from "lucide-react";
import { SiTiktok } from "react-icons/si";


export default function Home() {
 const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
 const [email, setEmail] = useState("");


const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbzBbteiBFTOgRylTiTw377vHzBJ0RLGpAQoxgIBjSPR16jIZNALrYtCef7rlf7qTN6p9g/exec", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    const text = await res.text();
    console.log("Apps Script response:", text);

    let data: { success?: boolean; error?: string } = {};
    try {
      data = JSON.parse(text);
    } catch {}

    if (data.success) {
      setEmail("");
      setIsWaitlistOpen(false);
      alert("You're on the waitlist!");
    } else {
      alert(data.error || "Something went wrong.");
    }
  } catch (error) {
    console.error("Submit error:", error);
    alert("Error submitting email.");
  }
};


 return (
   <>
     <main className="relative min-h-screen overflow-hidden text-white">
       <div className="absolute inset-0 -z-10">
         <div className="absolute inset-0 bg-[linear-gradient(120deg,#283AA0_0%,#283AA0_50%,#7527BD_60%,#A3134D_100%)]" />


         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.1)_40%,transparent_70%)]" />


         <div className="absolute left-[-140px] top-[-100px] h-[420px] w-[420px] rounded-full bg-[#283AA0]/70 blur-3xl" />
         <div className="absolute right-[-120px] top-[120px] h-[380px] w-[380px] rounded-full bg-[#283AA0]/60 blur-3xl" />
         <div className="absolute bottom-[-140px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#A3134D]/40 blur-3xl" />
         <div className="absolute left-[10%] top-[40%] h-[240px] w-[240px] rounded-full bg-[#283AA0]/50 blur-3xl" />
         <div className="absolute right-[12%] bottom-[18%] h-[240px] w-[240px] rounded-full bg-[#A3134D]/30 blur-3xl" />
       </div>


       <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8 sm:px-8">
         <header className="flex justify-center text-center">
           <div className="max-w-2xl">
             <div className="text-5xl font-bold tracking-tight sm:text-6xl">
               Mutuals
             </div>


             <p className="mt-4 text-sm leading-6 text-white/80 sm:text-base">
               The IRL social network built for real-world connection.
             </p>
           </div>
         </header>


         <section className="flex flex-1 flex-col items-center justify-center py-8 text-center">
           <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70 sm:text-sm">
             Coming soon
           </p>


           <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
             Your city. Your people. One place.
           </h1>


           <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
             Discover and create plans, meet new people, and experience your city.
           </p>


           <div className="relative mt-10">
             <div className="absolute inset-0 rounded-[3rem] bg-[linear-gradient(180deg,rgba(40,58,160,0.35),rgba(163,19,77,0.35))] blur-3xl" />


             <div className="relative mx-auto w-[300px] sm:w-[340px]">
               <Image
                 src="/UI_preview.png"
                 alt="Mutuals app preview"
                 width={860}
                 height={1600}
                 priority
                 className="h-auto w-full drop-shadow-2xl"
               />
             </div>
           </div>


           <div className="mt-10">
             <button
               onClick={() => setIsWaitlistOpen(true)}
               className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#283AA0,#7527BD,#A3134D)] px-7 py-4 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
             >
               Join the Waitlist
             </button>
           </div>
         </section>


         <footer className="flex flex-col items-center gap-6 pt-4 text-center text-sm text-white/80">
           <div className="flex items-center justify-center gap-8">
             <a
               href="https://www.instagram.com/joinmutuals?igsh=NTc4MTIwNjQ2YQ=="
               target="_blank"
               rel="noreferrer"
               className="text-white transition transform hover:scale-110 hover:text-pink-300"
             >
               <Instagram size={30} strokeWidth={1.75} />
             </a>


             <a
               href="https://www.linkedin.com/company/mutualssocial/"
               target="_blank"
               rel="noreferrer"
               className="text-white transition transform hover:scale-110 hover:text-pink-300"
             >
               <Linkedin size={30} strokeWidth={1.75} />
             </a>


             <a
               href="https://www.tiktok.com/@join_mutuals"
               target="_blank"
               rel="noreferrer"
               className="text-white transition transform hover:scale-110 hover:text-pink-300"
             >
               <SiTiktok size={30} />
             </a>
           </div>


           <div className="font-medium text-white/70">
             Mutualssocial.com
           </div>
         </footer>
       </div>
     </main>


     {isWaitlistOpen && (
       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6 backdrop-blur-sm">
         <div className="relative w-full max-w-md rounded-[2rem] border border-white/15 bg-[#283AA0]/90 p-8 text-white shadow-2xl">
           <button
             onClick={() => setIsWaitlistOpen(false)}
             className="absolute right-5 top-5 text-white/70 transition hover:text-white"
           >
             <X size={24} />
           </button>


           <h2 className="text-3xl font-bold tracking-tight">
             Get Early Access
           </h2>


           <p className="mt-3 text-sm leading-6 text-white/75 sm:text-base">
             Be among the first to experience Mutuals. Drop your email and we’ll keep you in the loop.
           </p>


           <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
             <input
               type="email"
               required
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="Enter your email"
               className="w-full rounded-full border border-white/15 bg-white/10 px-5 py-4 text-white placeholder:text-white/45 outline-none transition focus:border-pink-400"
             />


             <button
               type="submit"
               className="rounded-full bg-white px-5 py-4 font-semibold text-[#283AA0] transition hover:opacity-90"
             >
               Let Me In 👀
             </button>
           </form>
         </div>
       </div>
     )}
   </>
 );
}

