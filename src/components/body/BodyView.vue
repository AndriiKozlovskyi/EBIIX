<template>
    <body class="flex flex-col">
        <div class="flex flex-col justify-center px-6"></div>
        
        <div class="w-full bg-cover bg-[#e6e1e1] bg-center">
            <!-- Title Section -->
            <!-- Services Section -->
            <div class="relative flex flex-col w-full text-black z-100 bg-white/70">
                <div class="flex relative flex-col"> 
                    
                <div class="flex flex-col h-[40rem] "
                    style="background-image: url('https://sprint-rowery.pl/media/wysiwyg/szybkie-rowery-elektryczne_1_.jpg'); 
                    background-size: cover; 
                    background-position: center; 
                    background-repeat: no-repeat;">
                <div class="bg-black/80 text-white">
                    <div class="flex flex-col items-center w-full p-6">
                        <p class="text-xl font-bold">{{name}} Serwis Rowerowy</p>
                        <p class="text-sm text-slate-200">Naprawa i sprzedaz Rowerow</p>
                    </div>
                    <span class="flex flex-col md:flex-row rounded-xl items-center p-4 m-4 md:w-1/3 shadow-md flex-grow">
                        <div class="flex flex-col space-y-3 w-full">
                            <div class="flex flex-col w-full">
                                <h2 class="text-lg md:text-xl font-bold mb-4">Umów się na serwis bez wychodzenia z domu</h2>
                            </div>
                            <div class="flex flex-col items-start w-full space-y-3">
                                <p class="text-sm md:text-base relative pl-6">
                                    <span class="absolute left-0 top-0 h-2 w-2 rounded-full bg-[#ed9121] mt-1"></span>
                                    Najniższe ceny na wynajem.
                                </p>
                                
                                <p class="text-sm md:text-base relative pl-6">
                                    <span class="absolute left-0 top-0 h-2 w-2 rounded-full bg-[#ed9121] mt-1"></span>
                                    Wysokowydajne rowery elektryczne.
                                </p>
                                
                                <p class="text-sm md:text-base relative pl-6">
                                    <span class="absolute left-0 top-0 h-2 w-2 rounded-full bg-[#ed9121] mt-1"></span>
                                    Wygodne opcje rezerwacji szybko.
                                </p>
                                
                                <p class="text-sm md:text-base relative pl-6">
                                    <span class="absolute left-0 top-0 h-2 w-2 rounded-full bg-[#ed9121] mt-1"></span>
                                    Idealne dla kurierów pracujących.
                                </p>
                            </div>
                        </div>
                    </span>
                    <div class="flex items-center justify-center w-full mt-4 mb-10">            
                    <button @click="copyPhoneNumber" class="bg-[#ed9121] text-white rounded-lg px-10 py-1 my-1 text-lg md:text-xl hover:bg-[#ed9121]/100">
                        Dzwoń teraz!
                    </button>
                </div>  
                </div>
                </div>
                    <h1 class="flex justify-center bg-transparent p-4 items-center text-2xl md:text-2xl font-bold mt-4 mb-4 text-black">
                        Usługi, które oferujemy
                    </h1>
                    <!-- Naprawa Service -->
                     <div class="flex flex-col md:flex-row">
                    <span class="flex flex-col md:flex-row items-center rounded-xl mb-4 mx-4 p-4 bg-white shadow-md flex-grow">
                        <img src="../../assets/icons/naprawa1.png" class="w-16 h-16 md:w-24 md:h-24"/>
                        <div class="flex flex-col space-y-3 ml-0 md:ml-4 mt-4 md:mt-0">
                            <div class="flex flex-row justify-between w-full">
                                <h2 class="text-lg md:text-xl font-bold">Naprawa</h2>
                                <p class="text-lg md:text-xl">od 10zl</p>
                            </div>
                            <p class="text-gray-800 text-sm md:text-base">Naprawimy Twój rower lub rower elektryczny szybko i tanio</p>
                            <hr>
                            <p class="text-gray-700 text-sm md:text-base">250w-3000w</p>
                        </div>                
                    </span>
                    
                    <!-- Konwersja Service -->
                    <span class="flex flex-col md:flex-row items-center rounded-xl mb-4 mx-4 p-4 bg-white shadow-md flex-grow">
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
                    <span class="flex flex-col md:flex-row items-center rounded-xl mb-4 mx-4 p-4 bg-white shadow-md flex-grow">
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
            </div>
            <div class="bg-[#e6e1e1]">
                <h1 class="flex justify-center bg-white/70 p-4 items-center text-2xl md:text-2xl font-bold text-black">
                Sprzedajemy
                </h1>
            </div>
            <!-- Selling Section Title -->
        
            
            <!-- Selling Section -->
            <div class="flex flex-col w-full text-black z-100 relative bg-white/70 p-4">
                <div class="flex flex-col md:flex-row md:space-x-10 justify-between space-y-4 md:space-y-0">
                    
                    <!-- Accumulators -->
                    <span class="flex flex-col md:flex-row items-center rounded-xl p-4 bg-white shadow-md">
                        <img src="../../assets/icons/battery.png" class="w-16 h-16 md:w-24 md:h-24"/>
                        <div class="flex flex-col space-y-3 ml-0 md:ml-4 mt-4 md:mt-0">
                            <div class="flex flex-row justify-between w-full">
                                <h2 class="text-lg md:text-xl font-bold">Akumulatory<br> na zamówienie</h2>
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
            </div>
        </div>
    </body>
</template>

<script setup lang="ts">
import { useToast } from 'primevue/usetoast';
import { phoneNumber, name } from "../../vars";

const toast = useToast();

const copyPhoneNumber = async () => {
    await navigator.clipboard.writeText(phoneNumber);

    toast.add({ severity: 'success', summary: 'success', detail: "You've succesfully copied the number", life: 3000 })

};
</script>