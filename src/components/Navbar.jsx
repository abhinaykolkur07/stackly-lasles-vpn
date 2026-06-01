import logo from "../assets/logo.png";

function Navbar() {
  return (
    <header className="w-full bg-white">
      
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1280px] mx-auto px-[60px] h-[110px] flex items-center justify-between">
        
        {/* ================= LOGO ================= */}
        <div className="flex items-center gap-[10px] shrink-0">
          
          <img
            src={logo}
            alt="logo"
            className="w-[35px] h-[36px] object-contain"
          />

          <h1 className="text-[20px] font-bold text-[#0B132A] font-['Rubik'] leading-none">
            LaslesVPN
          </h1>
        </div>

        {/* ================= NAV LINKS ================= */}
        <nav className="flex items-center gap-[40px]">
          
          <a
            href="#"
            className="text-[16px] text-[#4F5665] font-normal font-['Rubik'] hover:text-[#F53855] transition-all duration-300"
          >
            About
          </a>

          <a
            href="#"
            className="text-[16px] text-[#4F5665] font-normal font-['Rubik'] hover:text-[#F53855] transition-all duration-300"
          >
            Features
          </a>

          <a
            href="#"
            className="text-[16px] text-[#4F5665] font-normal font-['Rubik'] hover:text-[#F53855] transition-all duration-300"
          >
            Pricing
          </a>

          <a
            href="#"
            className="text-[16px] text-[#4F5665] font-normal font-['Rubik'] hover:text-[#F53855] transition-all duration-300"
          >
            Testimonials
          </a>

          <a
            href="#"
            className="text-[16px] text-[#4F5665] font-normal font-['Rubik'] hover:text-[#F53855] transition-all duration-300"
          >
            Help
          </a>
        </nav>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center gap-[30px] shrink-0">
          
          <button className="text-[16px] font-medium text-[#0B132A] font-['Rubik']">
            Sign In
          </button>

          <button className="w-[150px] h-[45px] border border-[#F53855] rounded-full text-[#F53855] text-[16px] font-medium font-['Rubik'] hover:bg-[#F53855] hover:text-white transition-all duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;