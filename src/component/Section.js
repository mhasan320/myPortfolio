export default function Section({ SecTitle1, SecTitle2 }) {
  return (
    <div class="flex relative bg-gray-100 dark:bg-gray-700">
      <div class="container px-5  mx-auto md:pt-20 md:pb-20">
        <h3 class="tex-xl md:text-5xl text-center dark:text-white  text-gray-900 font-bold pl-0.5">
          {SecTitle1}
        </h3>
        <h2 class="text-2xl text-center md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient">
          {SecTitle2}
        </h2>
      </div>
    </div>
  );
}
