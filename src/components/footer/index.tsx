const Footer = () => {
  return (
    <footer className="fixed bottom-0 px-3 sm:px-6 py-3 bg-white w-screen flex items-center justify-between">
      <p className="text-[#8c916c] font-semibold text-sm">
        © 2025 Sapien&apos;s. All rights reserved.
      </p>

      <div className="text-[#8c916c] max-w-sm text-sm">
        <p>
          Contact: <span className="font-semibold">+91 99870 58369</span>
        </p>
        <p className="hidden md:block">
          Address:{" "}
          <span className="font-semibold">
            Ajay Deep House, 22- 2nd Floor, 240- Perin Nariman(Bazar Gate)
            Street, Fort, Mumbai - 400001
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
