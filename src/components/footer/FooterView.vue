<template>
    <footer>
        <div class="z-1000 flex flex-col justify-center items-center bg-black w-full px-4 py-8 text-white shadow-md space-y-4 md:space-y-0">
        <!-- Address Section (Middle) -->
            <div class="flex items-center justify-center space-x-3 w-full">
                <i class="fas fa-map-marker-alt"></i>
                <p class="text-base md:text-lg">{{address}}</p>
            </div>
            <!-- Contact Section (Phone, Right) -->
            <div class="flex items-center justify-center space-x-3 w-full">
                <i class="pi pi-phone text-lg md:text-xl"></i>
                <p class="text-base md:text-lg">{{ phoneNumber }}</p>
            </div>
            <div class="flex items-center justify-center space-x-3 w-full">
                <p class="text-base md:text-lg">© All Rights Reserved</p>
            </div>
            <hr style="color: white;">
            <div class="flex flex-col items-center w-full p-4">
                <p class="text-xl font-bold">{{ name }} Serwis Rowerowy</p>
            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">
import { name, phoneNumber, address } from "../../vars";
</script>