"use client"

import Link from "next/link"
import { ArrowLeft, BookOpen, PlayCircle } from "lucide-react"

export default function Courses() {
  const courseList = [
    { title: "Anatomy Basics", duration: "4 Weeks", level: "Beginner" },
    { title: "Advanced Physiology", duration: "6 Weeks", level: "Advanced" },
    { title: "Pharmacology 101", duration: "5 Weeks", level: "Intermediate" },
  ]

  return (
    <div className="page-wrapper">
      <div className="container">
        <Link href="/" className="back-btn">
          <ArrowLeft size={20} /> Back to Home
        </Link>

        <div className="header">
          <BookOpen size={48} color="#3b82f6" />
          <h1>Medical Courses</h1>
          <p>Expand your knowledge with our curated modules.</p>
        </div>

        <div className="content-grid">
          {courseList.map((course, i) => (
            <div key={i} className="course-card">
              <h3>{course.title}</h3>
              <div className="meta">
                <span>⏱ {course.duration}</span>
                <span>🎓 {course.level}</span>
              </div>
              <button className="play-btn"><PlayCircle size={18} /> Start Course</button>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .page-wrapper { min-height: 100vh; background: #020617; color: white; padding: 40px 5%; font-family: system-ui; }
        .back-btn { display: inline-flex; align-items: center; gap: 8px; color: #94a3b8; text-decoration: none; transition: 0.3s; margin-bottom: 40px; }
        .back-btn:hover { color: #38bdf8; transform: translateX(-5px); }
        .header { text-align: center; margin-bottom: 50px; }
        .header h1 { font-size: 40px; margin: 15px 0 10px; }
        .header p { color: #94a3b8; }
        .content-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; max-width: 1000px; margin: 0 auto; }
        .course-card { background: rgba(30, 41, 59, 0.4); border: 1px solid rgba(255,255,255,0.05); padding: 25px; border-radius: 16px; transition: 0.3s; }
        .course-card:hover { border-color: #3b82f6; transform: translateY(-5px); }
        .course-card h3 { margin-top: 0; font-size: 22px; }
        .meta { display: flex; justify-content: space-between; color: #94a3b8; font-size: 14px; margin-bottom: 20px; }
        .play-btn { width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px; background: #3b82f6; border: none; padding: 12px; color: white; border-radius: 8px; cursor: pointer; font-weight: bold; transition: 0.3s; }
        .play-btn:hover { background: #2563eb; }
      `}</style>
    </div>
  )
}
