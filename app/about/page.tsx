export default function About() {
  return (
    <main>
      <section className="relative py-4 px-12 sm:px-24 h-64 md:h-80 bg-[url('/Owen.png')] bg-cover bg-center flex items-end">
        <div className="w-full md:w-2/5 flex flex-col justify-end bg-gradient-to-r from-black to-transparent p-4 rounded-l-2xl">
          <div className="text-2xl font-semibold text-white">Michael Bacon, Matt Bacon-Brenes, Samuel Bacon-Brenes</div>
          <div className="text-xl font-semibold text-white">Partners</div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto  py-4 px-12 sm:px-24">
        <div className="text-4xl text-center py-4 font-semibold">
          About Think Little
        </div>
        <div className="text-xl" style={{ fontFamily: 'var(--font-roboto), serif' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="text-2xl text-center py-4 font-semibold">
          Our Process
        </div>
        <div className="text-xl" style={{ fontFamily: 'var(--font-roboto), serif' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </section>
    </main>
  );
}
