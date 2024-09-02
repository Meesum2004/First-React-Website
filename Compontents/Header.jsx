import Button from "./button";


function Header ({header, user}) {
    return (
        <header className="text-white-800 body-font bg-gray-400 ">
        <div className="container  mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={header.logo} className="h-10 w-10 rounded-full" />
            <span className="ml-3 text-xl">{header.title}</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Contact Us</a>
            <a className="mr-5 hover:text-gray-900">About Us</a>
          </nav>
          <Button
            label={user.isLogin ? "Logout" : "Login "}
            borderColor={
              " rounded-md px-3 py-1 text-black-600/100 no-underline hover:underline ... outline outline-offset-2 outline-black-500 ..."
            }
            txtColor={"text-white"}
          />
        </div>
      </header>
    )
}

export default Header;