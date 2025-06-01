export const Footer = () => {
    return (
        <footer className="py-5 px-4 
        bg-card relative 
        border-t border-[#44475a]
        mt-5 pt-8 
        flex flex-wrap 
        justify-center items-center
        text-center
        "
        >

       <p className="text-sm md:text-base tracking-wide">
          <span className="text-[#ffb86c] font-semibold">
            &copy; {new Date().getFullYear()}
          </span>{" "}
          <span className="text-[#93abf9] font-semibold hover:text-[#7a4ea5] transition-colors duration-300">
            Vikrant Kawadkar
          </span>.{" "}
          <span className="text-[#58c89d] font-medium">All rights reserved.</span>
        </p>
            
        </footer>
    );
}
