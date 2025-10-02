import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-screen shadow-2xl bg-white px-3 sm:px-6 py-3 relative">
      <h3 className="text-lg sm:text-xl font-semibold text-[#8c916c] text-right">
        Sapien's Wildlife Conservation Fund
      </h3>

      <Image
        src="/images/logo.jpg"
        alt="Sapien's Logo"
        className="absolute top-0 left-5 sm:left-10 z-50"
        width={100}
        height={150}
      />
    </nav>
  );
};

export default Navbar;
