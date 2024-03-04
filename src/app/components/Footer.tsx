// components/Footer.js

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className=" w-full md:w-[1100px] mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <p>&copy; 2024 Your Website Name</p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
