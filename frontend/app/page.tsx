"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { BookOpen, BrainCircuit, Activity, User, ShieldCheck } from "lucide-react"

export default function Home() {

  const cards = [
    {
      title: "Courses",
      desc: "Explore medical modules",
      icon: <BookOpen size={36} strokeWidth={1.5} />,
      color: "#3b82f6",
      link: "/courses",
      button: "Explore"
    },
    {
      title: "Quiz",
      desc: "Test your knowledge",
      icon: <BrainCircuit size={36} strokeWidth={1.5} />,
      color: "#10b981",
      link: "/quiz",
      button: "Start Quiz"
    },
    {
      title: "Dashboard",
      desc: "Track your progress",
      icon: <Activity size={36} strokeWidth={1.5} />,
      color: "#f59e0b",
      link: "/dashboard",
      button: "View Stats"
    },
    {
      title: "Profile",
      desc: "Manage your account",
      icon: <User size={36} strokeWidth={1.5} />,
      color: "#8b5cf6",
      link: "/profile",
      button: "Edit Profile"
    },
    {
      title: "Secure Login",
      desc: "Access secure area",
      icon: <ShieldCheck size={36} strokeWidth={1.5} />,
      color: "#ef4444",
      link: "/login",
      button: "Sign In"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12 font-sans overflow-x-hidden flex flex-col items-center">

      {/* شريط التنقل (Navbar) */}
      <nav className="flex justify-between items-center w-full max-w-6xl mb-16">
        <div className="text-3xl font-extrabold tracking-tight">
          MED<span className="text-sky-400">KIT</span>
        </div>

        <div className="flex gap-4 md:gap-8 text-sm md:text-base">
          <Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
          <Link href="/courses" className="text-slate-400 hover:text-white transition-colors">Courses</Link>
          <Link href="/support" className="text-slate-400 hover:text-white transition-colors">Support</Link>
          <Link href="/notifications" className="text-slate-400 hover:text-white transition-colors">Notifications</Link>
        </div>
      </nav>

      {/* الترويسة (Header) */}
      <motion.header
        className="text-center mb-16 max-w-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to MED<span className="text-sky-400">KIT</span>
        </h1>
        <p className="text-slate-400 text-lg">
          Your Intelligent Path to Medical Excellence & Continuous Learning
        </p>
      </motion.header>

      {/* شبكة البطاقات (Grid) */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="bg-slate-900 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            style={{ borderTop: `4px solid ${card.color}` }}
          >
            <div
              className="w-20 h-20 rounded-2xl flex justify-center items-center mb-6"
              style={{ color: card.color, backgroundColor: `${card.color}15` }}
            >
              {card.icon}
            </div>

            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className="text-slate-400 mb-6 flex-grow">{card.desc}</p>

            <Link href={card.link} className="w-full mt-auto">
              <button
                className="w-full py-3 rounded-xl text-white font-semibold transition-all hover:brightness-110"
                style={{ backgroundColor: card.color }}
              >
                {card.button}
              </button>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* التذييل (Footer) */}
      <footer className="text-center mt-20 text-slate-500 text-sm pb-8">
        <p>Start your medical journey today with <strong className="text-slate-400">MEDKIT</strong>. © 2026 All Rights Reserved.</p>
      </footer>

    </div>
  )
}
