<template>
    <div>
        <!-- left side bar -->
            <div class="space-y-4   bg-purp w-72 h-full  shadow-lg shadow-greyishTxt slogan  z-10  ">
                <NuxtLink to="/"><div class="bg-darkPrup"><h1 class="Bibliothek">Bibliothek</h1></div></NuxtLink>
                <!-- Main Menue -->
                <div class=" grid gap-y-8  ">
                    
                    <NuxtLink to="/library">
                        <div class=" sideBarTxt  ">
                        <Icon name="fluent:library-24-regular" class="sideBarIcon" />
                        <span>Library</span></div>
                    </NuxtLink>

                    <NuxtLink to="/category">
                        <div class=" sideBarTxt  ">
                        <Icon name="iconamoon:category-light" class="sideBarIcon" />
                        <span>category</span></div>
                    </NuxtLink>
                   
                    <NuxtLink to="/favourite"><div class="sideBarTxt">
                        <Icon name="mdi:favourite-border" class="sideBarIcon" />
                        <span> Favourite </span></div>
                    </NuxtLink>

                    <NuxtLink><div class="sideBarTxt">
                        <Icon name="material-symbols:download" class="sideBarIcon" />
                        <span>Download </span></div>
                    </NuxtLink>

                    <NuxtLink><div class="sideBarTxt">
                        <Icon name="lucide:file-audio" class="sideBarIcon" />
                        <span>Audio Books </span></div>

                    </NuxtLink>
                    <!-- Line  -->
                    <div class="bg-greyishTxt rounded-full h-0.5 w-full"/>

                    <NuxtLink to="/profile"><div class="sideBarTxt">
                        <Icon name="solar:user-bold" class="sideBarIcon" />
                        <span>Profile </span></div>
                    </NuxtLink>
                    
                    <NuxtLink><div class="sideBarTxt">
                        <Icon name="ic:outline-contact-support" class="sideBarIcon" />
                        <span> Support </span></div>
                    </NuxtLink>

                    

                </div>

            </div>
    </div>
</template>

