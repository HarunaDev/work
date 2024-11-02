import Logo1 from "../assets/logo-one.png"
import Logo2 from "../assets/logo-two.png";
import Logo3 from "../assets/logo-three.png";
import Logo4 from "../assets/logo-four.png";

function AuthMedia() {
  return (
    <div className="flex flex-col md:w-2/5 bg-primary-color p-8 items-center justify-center h-full w-full sm:flex-col">
        <h1 className="text-white text-center w-80 text-2xl md:text-3xl font-bold mb-4">
          Join the world's top companies using PHC
        </h1>
        <hr className="border-white w-full mb-6" />

        {/* Responsive image grid */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-xs sm:grid-cols-2">
          <img src={Logo1} alt="Logo 1" className="w-full h-auto object-contain" />
          <img src={Logo2} alt="Logo 2" className="w-full h-auto object-contain" />
          <img src={Logo3} alt="Logo 3" className="w-full h-auto object-contain" />
          <img src={Logo4} alt="Logo 4" className="w-full h-auto object-contain" />
        </div>
      </div>
  )
}

export default AuthMedia