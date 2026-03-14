"use client"

import Link from "next/link"
import { ArrowLeft, Layout } from "lucide-react" // يمكنك تغيير أيقونة Layout حسب الصفحة

export default function PageTemplate() {
  return (
    <div className="page-wrapper">
      <div className="container">
        <Link href="/" className="back-btn">
          <ArrowLeft size={20} /> Back to Home
        </Link>

        <div className="content">
          <Layout size={64} color="#a855f7" className="page-icon" />
          {/* قم بتغيير العنوان والوصف حسب كل صفحة */}
          <h1>Page Title</h1>
          <p>This section is currently under construction. Check back later!</p>
        </div>
      </div>

      <style jsx>{`
        .page-wrapper { min-height: 100vh; background: #020617; color: white; padding: 40px 5%; font-family: system-ui; }
        .back-btn { display: inline-flex; align-items: center; gap: 8px; color: #94a3b8; text-decoration: none; transition: 0.3s; margin-bottom: 40px; }
        .back-btn:hover { color: #a855f7; transform: translateX(-5px); }
        .content { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 60vh; text-align: center; }
        .content h1 { font-size: 48px; margin: 20px 0 10px; }
        .content p { color: #94a3b8; font-size: 18px; }
      `}</style>
    </div>
  )
}

