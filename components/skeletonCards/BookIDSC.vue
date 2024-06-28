<template>
    <div>
      <div  class="flex space-x-10">
        <div class="grid gap-y-5">
          <div class="">
          </div>
          <div class="grid gap-y-3">
            
            <div class="grid gap-2">
              
              <!-- book image -->
            <USkeleton class="h-40 w-40"/>
            <div class="flex space-x-2 mx-3">
              <USkeleton v-for="star in 5" :key="star" class="h-5 w-5" :ui="{rounded: 'rounded-full'}"/>
            </div>

            <USkeleton  class="h-2 w-20 mx-10 bg-grey-100" />
            <!-- buttons -->
            <USkeleton class="h-5 w-40 rounded-full"/>
                   
            <USkeleton class="h-5 w-40 rounded-full"/>         
           </div>
          </div>
        </div>
        <!-- book details -->
        <div class="space-y-4">
          <USkeleton class="h-4 w-[200px]"/>
          <USkeleton class="h-2 w-[120px]"/>

          <div class="flex space-x-2">
            <USkeleton v-for="star in 5" :key="star" class="h-5 w-5" :ui="{rounded: 'rounded-full'}"/>
            <USkeleton class="h-2 w-[20px] mt-2"/>
        </div>
          
          <USkeleton class="h-40 w-[300px] line-clamp-4"/>

          <div class=" flex space-x-3">
            <USkeleton class="h-2 w-[50px]"/>
            <USkeleton class="h-2 w-[150px]"/> 
          </div>
        </div>

      </div>
    </div>
</template>

