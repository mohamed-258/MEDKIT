"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { BookOpen, BrainCircuit, Activity, User, ShieldCheck } from "lucide-react"

export default function Home() {

  // بيانات البطاقات مع استخدام أيقونات Lucide
  const cards = [
    {
      title: "Courses",
      desc: "Explore medical modules",
      icon: <BookOpen size={36} strokeWidth={1.5} />,
      color: "#3b82f6", // Blue
      link: "/courses",
      button: "Explore"
    },
    {
      title: "Quiz",
      desc: "Test your knowledge",
      icon: <BrainCircuit size={36} strokeWidth={1.5} />,
      color: "#10b981", // Emerald
      link: "/quiz",
      button: "Start Quiz"
    },
    {
      title: "Dashboard",
      desc: "Track your progress",
      icon: <Activity size={36} strokeWidth={1.5} />,
      color: "#f59e0b", // Amber
      link: "/dashboard",
      button: "View Stats"
    },
    {
      title: "Profile",
      desc: "Manage your account",
      icon: <User size={36} strokeWidth={1.5} />,
      color: "#8b5cf6", // Violet
      link: "/profile",
      button: "Edit Profile"
    },
    {
      title: "Secure Login",
      desc: "Access secure area",
      icon: <ShieldCheck size={36} strokeWidth={1.5} />,
      color: "#ef4444", // Red
      link: "/login",
      button: "Sign In"
    }
  ]

  // إعدادات حركة الظهور المتتالية (Framer Motion)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15 // تأخير زمني بين كل بطاقة وأخرى
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  }

  return (
    <div className="container">
      
      {/* تأثير إضاءة في الخلفية */}
      <div className="ambient-glow"></div>

      {/* Navbar */}
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

      {/* Header Section */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="header"
      >
        <h1>Welcome to MED<span>KIT</span></h1>
        <p>Your Intelligent Path to Medical Excellence & Continuous Learning</p>
      </motion.header>

      {/* Grid section with Staggered Animation */}
      <motion.div 
        className="grid"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              y: -5,
              boxShadow: `0 15px 35px -5px ${card.color}40`
            }}
            className="card"
            style={{ borderTop: `4px solid ${card.color}` } as React.CSSProperties}
          >
            <div className="icon-wrapper" style={{ color: card.color, backgroundColor: `${card.color}15` }}>
              {card.icon}
            </div>

            <h2>{card.title}</h2>
            <p>{card.desc}</p>

            <Link href={card.link}>
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="action-btn"
                style={{ backgroundColor: card.color }}
              >
                {card.button}
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="footer"
      >
        <p>Start your medical journey today with <strong>MEDKIT</strong>. © 2026 All Rights Reserved.</p>
      </motion.footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background-color: #020617;
          background-image: radial-gradient(circle at 50% 0%, #1e293b 0%, #020617 70%);
          color: white;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          padding: 40px 5%;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .ambient-glow {
          position: absolute;
          top: -10%;
          left: 50%;
          transform: translateX(-50%);
          width: 60vw;
          height: 40vh;
          background: radial-gradient(ellipse, rgba(56, 189, 248, 0.15) 0%, rgba(2, 6, 23, 0) 70%);
          z-index: -1;
          filter: blur(50px);
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 80px;
          padding: 15px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .logo {
          font-size: 28px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .logo span {
          color: #38bdf8;
        }

        .menu {
          display: flex;
          gap: 35px;
        }

        .menu a {
          color: #94a3b8;
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          transition: color 0.3s ease;
        }

        .menu a:hover {
          color: #f8fafc;
        }

        .notify-badge {
          position: relative;
        }

        .notify-badge::after {
          content: '';
          position: absolute;
          top: -2px;
          right: -10px;
          width: 8px;
          height: 8px;
          background-color: #ef4444;
          border-radius: 50%;
        }

        .header {
          text-align: center;
          margin-bottom: 70px;
        }

        .header h1 {
          font-size: 56px;
          font-weight: 800;
          margin-bottom: 16px;
          letter-spacing: -1px;
        }
        
        .header h1 span {
          color: #38bdf8;
        }

        .header p {
          color: #94a3b8;
          font-size: 18px;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .card {
          background: rgba(30, 41, 59, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 35px 25px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .icon-wrapper {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .card h2 {
          font-size: 22px;
          margin-bottom: 10px;
          font-weight: 600;
          color: #f8fafc;
        }

        .card p {
          color: #94a3b8;
          font-size: 14px;
          margin-bottom: 25px;
          line-height: 1.5;
          flex-grow: 1;
        }

        .action-btn {
          border: none;
          padding: 12px 28px;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          width: 100%;
          transition: filter 0.3s;
        }

        .action-btn:hover {
          filter: brightness(1.1);
        }

        .footer {
          text-align: center;
          margin-top: 100px;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          color: #64748b;
          font-size: 14px;
        }

        .footer strong {
          color: #f83838;
        }
      `}</style>
    </div>
  )
}
