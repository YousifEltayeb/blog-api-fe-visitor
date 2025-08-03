function Navbar() {
  return (
    <nav class="px-8 mx-auto max-w-7xl">
      <div class=" flex items-center justify-center">
        <div class="flex items-baseline ml-10 space-x-4 ">
          <a
            class="text-gray-500  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            href="/"
          >
            Home
          </a>
          <a
            class="text-gray-500  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            href="https://github.com/YousifEltayeb/blog-api-fe-visitor"
            target="_blank"
          >
            Github
          </a>
          <a
            class="text-gray-500  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            href="https://x.com/YousefTheKind"
            target="_blank"
          >
            Twitter
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
