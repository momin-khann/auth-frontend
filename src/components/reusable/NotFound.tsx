import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="bg-gray-800 text-white min-h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold">
        This page could not be found :(
      </h1>
      <Link
        to="/"
        className="inline-block bg-black text-primary-800 px-6 my-12 text-lg border border-light850_dark100 rounded-lg py-2"
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
