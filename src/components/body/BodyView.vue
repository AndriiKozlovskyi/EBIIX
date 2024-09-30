<template>
    <body class="flex flex-col">
        <div class="flex flex-col justify-center px-6"></div>
        
        <div class="relative w-full h-auto md:h-screen bg-cover bg-center" 
            style="background-image: url('https://hips.hearstapps.com/hmg-prod/images/beginner-bikes-73-preview-maxwidth-3000-maxheight-3000-ppi-300-quality-90-1606349138.jpg');">
            <div class="flex flex-col space-y-2 justify-center px-6 bg-white/90 p-4">
            <h1 class="font-semibold text-3xl">E-Bike Serwis uslugi rowerowe</h1>
            <p>- Najniższe ceny na wynajem.</p>
            <p>- Wysokowydajne rowery elektryczne.</p>
            <p>- Wygodne opcje rezerwacji szybko.</p>
            <p>- Idealne dla kurierów pracujących.</p>
        </div>
            <!-- Title Section -->
            <h1 class="flex justify-center p-4 items-center text-xl md:text-2xl font-medium bg-gray-700/80 text-white">
                Usługi, które oferujemy
            </h1>
            
            <!-- Services Section -->
            <div class="flex flex-col w-full text-black z-100 relative bg-white/70 p-4">
                <div class="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0">
                    
                    <!-- Naprawa Service -->
                    <span class="flex flex-col md:flex-row items-center rounded-xl p-4 bg-white shadow-md flex-grow">
                        <img src="../../assets/icons/naprawa1.png" class="w-16 h-16 md:w-24 md:h-24"/>
                        <div class="flex flex-col space-y-3 ml-0 md:ml-4 mt-4 md:mt-0">
                            <div class="flex flex-row justify-between w-full">
                                <h2 class="text-lg md:text-xl font-bold">Naprawa</h2>
                                <p class="text-lg md:text-xl">od 10zl</p>
                            </div>
                            <p class="text-gray-800 text-sm md:text-base">Naprawimy Twój rower lub rower elektryczny szybko i tanio</p>
                        </div>                
                    </span>
                    
                    <!-- Konwersja Service -->
                    <span class="flex flex-col md:flex-row items-center rounded-xl p-4 bg-white shadow-md flex-grow">
                        <img src="../../assets/icons/konwersja1.png" class="w-16 h-16 md:w-24 md:h-24"/>
                        <div class="flex flex-col space-y-3 ml-0 md:ml-4 mt-4 md:mt-0">
                            <div class="flex flex-row justify-between w-full">
                                <h2 class="text-lg md:text-xl font-bold">Konwersja</h2>
                                <p class="text-lg md:text-xl">od 200zl</p>
                            </div>
                            <p class="text-gray-800 text-sm md:text-base">Przerób swój zwykły rower na elektryczny w zaledwie <strong>3 dni!</strong> Dostosuj moc i prędkość do swoich potrzeb.</p>
                            <hr>
                            <p class="text-gray-700 text-sm md:text-base">250w-3000w</p>
                        </div>       
                    </span>
                    
                    <!-- Renta Service -->
                    <span class="flex flex-col md:flex-row items-center rounded-xl p-4 bg-white shadow-md flex-grow">
                        <img src="../../assets/icons/rent1.png" class="w-16 h-16 md:w-24 md:h-24"/>
                        <div class="flex flex-col space-y-3 ml-0 md:ml-4 mt-4 md:mt-0">
                            <div class="flex flex-row justify-between w-full">
                                <h2 class="text-lg md:text-xl font-bold">Wypożyczenie</h2>
                                <p class="text-lg md:text-xl">od 150zl</p>
                            </div>
                            <p class="text-gray-800 text-sm md:text-base">Wypożycz szybki rower za jedyne 190 zł na tydzień. Tanie i wygodne.</p>
                            <hr>
                            <p class="text-gray-700 text-sm md:text-base">Otrzymasz <strong>2 akumulatory</strong></p>
                        </div>       
                    </span>
                </div>
            </div>
            
            <!-- Selling Section Title -->
            <h1 class="flex justify-center p-4 items-center text-xl md:text-2xl font-medium bg-gray-700/80 text-white">
                Sprzedajemy
            </h1>
            
            <!-- Selling Section -->
            <div class="flex flex-col w-full text-black z-100 relative bg-white/70 p-4">
                <div class="flex flex-col md:flex-row md:space-x-10 justify-between space-y-4 md:space-y-0">
                    
                    <!-- Accumulators -->
                    <span class="flex flex-col md:flex-row items-center rounded-xl p-4 bg-white shadow-md">
                        <img src="../../assets/icons/battery.png" class="w-16 h-16 md:w-24 md:h-24"/>
                        <div class="flex flex-col space-y-3 ml-0 md:ml-4 mt-4 md:mt-0">
                            <div class="flex flex-row justify-between w-full">
                                <h2 class="text-lg md:text-xl font-bold">Akumulatory na zamówienie</h2>
                                <p class="text-lg md:text-xl">od 750zl</p>
                            </div>
                            <p class="text-gray-700 text-sm md:text-base">Zamów akumulatory dostosowane do mocy Twojego roweru.</p>
                            <hr>
                            <p class="text-gray-700 text-sm md:text-base">20-30ah</p>
                            <p class="text-gray-700 text-sm md:text-base">Ogniwa 18650/21700</p>
                            <p class="text-gray-700 text-sm md:text-base">36v-72v</p>
                        </div>                
                    </span>
                    
                    <!-- Rental Service -->
                    <span class="flex flex-col md:flex-row items-center rounded-xl p-4 bg-white shadow-md">
                        <img src="../../assets/icons/compose.png" class="w-16 h-16 md:w-24 md:h-24"/>
                        <div class="flex flex-col space-y-3 ml-0 md:ml-4 mt-4 md:mt-0">
                            <div class="flex flex-row justify-between w-full">
                                <h2 class="text-lg md:text-xl font-bold">E-Bike na zamówienie</h2>
                                <p class="text-lg md:text-xl">od 1200zl</p>
                            </div>
                            <p class="text-gray-700 text-sm md:text-base">Wypożycz mocny rower elektryczny na dowolny okres czasu.</p>
                            <hr>
                            <p class="text-gray-700 text-sm md:text-base">250-3000w</p>
                            <p class="text-gray-700 text-sm md:text-base">20-30ah</p>
                        </div>       
                    </span>
                </div>
                <div class="flex items-center justify-center w-full order-1 mt-4">            
                    <button @click="copyPhoneNumber" class="bg-[#ed9121]/80 text-white rounded-lg px-10 py-1 my-1 text-lg md:text-xl hover:bg-[#ed9121]/100">
                        Dzwon teraz!
                    </button>
                </div>  
            </div>
        </div>
    </body>
</template>

<script setup lang="ts">
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const phoneNumber = '+48 575 525 279';

const copyPhoneNumber = async () => {
    await navigator.clipboard.writeText(phoneNumber);

    toast.add({ severity: 'success', summary: 'success', detail: "You've succesfully copied the number", life: 3000 })

};
</script>