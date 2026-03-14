"use client"

import Link from "next/link"
import { ArrowLeft, Lock } from "lucide-react"

export default function Login() {
  return (
    <div className="page-wrapper">
      <div className="container">
        <Link href="/" className="back-btn">
          <ArrowLeft size={20} /> Back to Home
        </Link>

        <div className="login-box">
          <div className="icon-wrapper">
            <Lock size={32} color="#ef4444" />
          </div>
          <h2>Secure Login</h2>
          <p>Welcome back! Please enter your details.</p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" placeholder="doctor@medkit.com" required />
            </div>
            
            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="••••••••" required />
            </div>

            <button type="submit" className="login-btn">Sign In</button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .page-wrapper { min-height: 100vh; background: #020617; color: white; padding: 40px 5%; font-family: system-ui; display: flex; flex-direction: column; }
        .back-btn { display: inline-flex; align-items: center; gap: 8px; color: #94a3b8; text-decoration: none; transition: 0.3s; margin-bottom: 40px; align-self: flex-start; }
        .back-btn:hover { color: #ef4444; transform: translateX(-5px); }
        .login-box { background: rgba(30, 41, 59, 0.4); border: 1px solid rgba(255,255,255,0.05); padding: 40px; border-radius: 20px; max-width: 400px; width: 100%; margin: 0 auto; text-align: center; }
        .icon-wrapper { width: 64px; height: 64px; background: rgba(239, 68, 68, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
        .login-box h2 { margin: 0 0 10px; font-size: 28px; }
        .login-box p { color: #94a3b8; margin-bottom: 30px; font-size: 14px; }
        .input-group { text-align: left; margin-bottom: 20px; }
        .input-group label { display: block; margin-bottom: 8px; font-size: 14px; color: #cbd5e1; }
        .input-group input { width: 100%; padding: 12px 15px; border-radius: 8px; background: #0f172a; border: 1px solid #334155; color: white; outline: none; transition: 0.3s; box-sizing: border-box; }
        .input-group input:focus { border-color: #ef4444; }
        .login-btn { width: 100%; background: #ef4444; border: none; padding: 14px; color: white; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 16px; transition: 0.3s; margin-top: 10px; }
        .login-btn:hover { background: #dc2626; }
      `}</style>
    </div>
  )
}
