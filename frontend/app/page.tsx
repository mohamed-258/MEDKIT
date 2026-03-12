export default function Home() {
  return (
    <main style={{fontFamily:"sans-serif"}}>

      {/* Navbar */}
      <nav style={{
        display:"flex",
        justifyContent:"space-between",
        padding:"20px 40px",
        background:"#0f172a",
        color:"white"
      }}>
        <h2>MEDKIT</h2>
        <div>
          <a href="#" style={{marginRight:"20px", color:"white"}}>Courses</a>
          <a href="#" style={{marginRight:"20px", color:"white"}}>Community</a>
          <a href="#" style={{marginRight:"20px", color:"white"}}>About</a>
          <button style={{
            padding:"8px 16px",
            background:"#22c55e",
            border:"none",
            color:"white",
            borderRadius:"6px"
          }}>
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        textAlign:"center",
        padding:"120px 20px",
        background:"#f1f5f9"
      }}>
        <h1 style={{fontSize:"48px"}}>
          MEDKIT Medical Learning Platform
        </h1>

        <p style={{fontSize:"20px", marginTop:"20px"}}>
          Interactive learning tools for medical students and professionals
        </p>

        <button style={{
          marginTop:"30px",
          padding:"14px 28px",
          fontSize:"18px",
          background:"#2563eb",
          color:"white",
          border:"none",
          borderRadius:"8px"
        }}>
          Start Learning
        </button>
      </section>

      {/* Features */}
      <section style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
        gap:"30px",
        padding:"60px"
      }}>

        <div style={{padding:"20px", border:"1px solid #ddd", borderRadius:"10px"}}>
          <h3>Medical Quizzes</h3>
          <p>Test your knowledge with smart adaptive quizzes.</p>
        </div>

        <div style={{padding:"20px", border:"1px solid #ddd", borderRadius:"10px"}}>
          <h3>Case Simulations</h3>
          <p>Practice clinical decision making with real scenarios.</p>
        </div>

        <div style={{padding:"20px", border:"1px solid #ddd", borderRadius:"10px"}}>
          <h3>Community Learning</h3>
          <p>Collaborate with other medical students worldwide.</p>
        </div>

      </section>

    </main>
  );
          }
