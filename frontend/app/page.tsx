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
    <div className="container">

      <div className="ambient-glow"></div>

      <nav className="navbar">
        <div className="logo">
          MED<span>KIT</span>
        </div>

        <div className="menu">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/support">Support</Link>
          <Link href="/notifications" className="notify-badge">Notifications</Link>
        </div>
      </nav>

      <motion.header
        className="header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Welcome to MED<span>KIT</span></h1>
        <p>Your Intelligent Path to Medical Excellence & Continuous Learning</p>
      </motion.header>

      <motion.div
        className="grid"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="card"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            style={{ borderTop: `4px solid ${card.color}` }}
          >

            <div
              className="icon-wrapper"
              style={{ color: card.color, backgroundColor: `${card.color}15` }}
            >
              {card.icon}
            </div>

            <h2>{card.title}</h2>
            <p>{card.desc}</p>

            <Link href={card.link}>
              <button
                className="action-btn"
                style={{ backgroundColor: card.color }}
              >
                {card.button}
              </button>
            </Link>

          </motion.div>
        ))}
      </motion.div>

      <footer className="footer">
        <p>Start your medical journey today with <strong>MEDKIT</strong>. © 2026 All Rights Reserved.</p>
      </footer>

<style jsx>{`

.container{
  min-height:100vh;
  background:#020617;
  color:white;
  padding:40px 5%;
  font-family:system-ui;
}

.navbar{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:80px;
}

.logo{
  font-size:28px;
  font-weight:800;
}

.logo span{
  color:#38bdf8;
}

.menu{
  display:flex;
  gap:30px;
}

.menu a{
  color:#94a3b8;
  text-decoration:none;
}

.menu a:hover{
  color:white;
}

.header{
  text-align:center;
  margin-bottom:60px;
}

.header h1{
  font-size:48px;
}

.header span{
  color:#38bdf8;
}

.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
  gap:30px;
  max-width:1200px;
  margin:auto;
}

.card{
  background:#0f172a;
  border-radius:18px;
  padding:30px;
  text-align:center;
  display:flex;
  flex-direction:column;
  align-items:center;
}

.icon-wrapper{
  width:80px;
  height:80px;
  border-radius:20px;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-bottom:20px;
}

.card h2{
  margin-bottom:10px;
}

.card p{
  color:#94a3b8;
  margin-bottom:20px;
}

.action-btn{
  border:none;
  padding:12px;
  border-radius:10px;
  color:white;
  cursor:pointer;
  width:100%;
}

.footer{
  text-align:center;
  margin-top:80px;
  color:#64748b;
}

`}</style>

    </div>
  )
}