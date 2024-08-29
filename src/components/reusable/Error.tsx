import { Link } from "react-router-dom";

export default function Error() {
  return (
    <main className="background-gray-800 text-white min-h-screen w-full flex justify-center items-center flex-col gap-8">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      {/*<p className="text-lg">{error.message}</p>*/}

      <Link
        className="inline-block bg-accent-500 text-primary-800 px-6 border border-light850_dark100 rounded-lg py-2"
        to={"/"}
      >
        Try again
      </Link>
    </main>
  );
}
