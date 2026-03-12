export default function Reviews() {
  return (
    <main>
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center p-4">

        <div className="absolute inset-0 bg-[url('/reviews.png')] bg-cover bg-center opacity-40 -z-10"></div>

        <div className="text-3xl sm:text-5xl font-bold text-center sm:whitespace-nowrap">
          What your neighbors are saying about us
        </div>

      </section>
      <section className="p-12 sm:px-24 ">
        <div className="grid grid-cols-3 gap-4 py-10">
          <div className="text-2xl  font-semibold sm:px-24 ">
            <div> Bruce & Linda</div>
            <div> Portland, Oregon</div>
            <div>5 stars</div>
          </div>
          <div className="text-xl col-span-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 py-10">
          <div className="text-2xl  font-semibold sm:px-24 ">
            <div> Shoko Smith</div>
            <div> Boring, Oregon</div>
            <div>5 stars</div>
          </div>
          <div className="text-xl col-span-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </section>
    </main>
  );
}
