<script>
    export let menuItems = [];
</script>

<nav class="flex flex-wrap items-center justify-between p-6 bg-teal-500">
    <div class="flex items-center flex-shrink-0 mr-6 text-white">
        <svg
            class="w-8 h-8 mr-2 fill-current"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55
                9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8
                0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2
                6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45
                9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8
                0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
            />
        </svg>
        <span class="text-xl font-semibold tracking-tight">Tailwind CSS</span>
    </div>
    <div class="block lg:hidden">
        <button
            class="flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white"
        >
            <svg class="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
        </button>
    </div>
    <div class="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
            {#each menuItems as item}
                <a
                    href={item.link}
                    class="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white"
                >
                    {item.name}
                </a>
            {/each}
        </div>
        <div>
            <a
                href="#"
                class="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0"
            >
                Download
            </a>
        </div>
    </div>
</nav>
