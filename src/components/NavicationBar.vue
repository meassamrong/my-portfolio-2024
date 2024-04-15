<template>
    <div class="nav container mx-auto py-5 grid grid-rows-1 grid-flow-col bg-sky-950 md:bg-transparent">
        <div class="nameAsLogo md:text-[30px] font-silkscreen col-span-2">SAMRONG MEAS</div>
        <div class="mobile-toggle-menu bg-slate-700 text-end md:hidden grid md:grid-flow-col grid-flow-row">
            <i class="bi bi-list cursor-pointer text-[25px]"></i>
        </div>
        <div class="nav-layout md:grid md:grid-flow-col grid-flow-row hidden">
            <router-link to="/" class="nav-layout-item font-semibold grid justify-center items-center
            bg-gray-200 dark:bg-slate-600 rounded-md mx-2">
                Hi, 👋
            </router-link>
            <router-link to="/" class="nav-layout-item font-semibold grid justify-center items-center mx-2">
                About
            </router-link>
            <router-link to="/" class="nav-layout-item font-semibold grid justify-center items-center mx-2">
                Projects 🚀
            </router-link>
            <router-link to="/" class="nav-layout-item font-semibold grid justify-center items-center mx-2">
                Community
            </router-link>
            <router-link to="/" class="nav-layout-item font-semibold grid justify-center items-center mx-2">
                Contact
            </router-link>
        </div>
    </div>
</template>