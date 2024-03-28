import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-16 flex flex-col justify-center items-center gap-2">
        <h2 className="text-2xl font-medium text-[#03C184]">Not Found</h2>
        <p>Could not find requested resource</p>
        <Link className="bg-[#03C184] text-white p-2 mt-3 rounded-md" href="/">
          Return Home
        </Link>
      </section>
    </main>
  );
}
