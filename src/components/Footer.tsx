export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 mt-12 border-t border-gray-300 text-center absolute bottom-0">
      <div className="max-w-screen-md mx-auto">
        <p className="font-bold text-lg mb-2">Manuel Lopez</p>
        <div className="flex justify-center space-x-6 flex-wrap">
          <a
            href="https://www.linkedin.com/in/manuel-lopez-1708/"
            target="_blank"
            rel="noopener noreferrer"
            className=" font-medium hover:underline"
          >
            LinkedIn Profile
          </a>
          <a href="tel:+542473465909" className="font-medium hover:underline ">
            Tel: +54 2473 465909
          </a>
          <a
            href="mailto:manu1475963@gmail.com"
            className="font-medium hover:underline "
          >
            manu1475963@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
