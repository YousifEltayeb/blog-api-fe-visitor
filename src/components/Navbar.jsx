function Navbar() {
  return (
    <nav class="px-8 mx-auto max-w-7xl">
      <div class="flex items-center justify-between h-16">
        <div class=" flex items-center">
          <div class="hidden md:block">
            <div class="flex items-baseline ml-10 space-x-4">
              <a
                class="text-gray-500  hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                href="/"
              >
                Home
              </a>
              <a
                class="text-gray-500  hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                href="https://github.com/YousifEltayeb/blog-api-fe-visitor"
              >
                Github
              </a>
              <a
                class="text-gray-500  hover:text-gray-800  px-3 py-2 rounded-md text-sm font-medium"
                href="https://x.com/YousefTheKind"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
