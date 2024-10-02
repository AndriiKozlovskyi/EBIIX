<template>
    <body class="flex flex-col">
        <div class="flex flex-col justify-center px-6"></div>
        
        <div class="w-full bg-cover bg-[#e6e1e1] bg-center">
            <!-- Sekcja tytułowa -->
            <!-- Sekcja usług -->
            <div class="relative flex flex-col w-full text-black z-100 bg-white/70">
                <div class="flex relative flex-col"> 
                    
                <div class="flex flex-col h-[40rem]"
                    style="background-image: url('https://sprint-rowery.pl/media/wysiwyg/szybkie-rowery-elektryczne_1_.jpg'); 
                    background-size: cover; 
                    background-position: center; 
                    background-repeat: no-repeat;">
                <div class="bg-black/80 text-white">
                    <div class="flex flex-col items-center w-full p-6">
                        <p class="text-xl font-bold">{{name}} Serwis Rowerowy</p>
                        <p class="text-sm text-slate-200">Naprawa i Sprzedaż Rowerów</p>
                    </div>
                    <span class="flex flex-col md:flex-row rounded-xl items-center p-4 m-4 md:w-1/3 shadow-md flex-grow">
                        <div class="flex flex-col space-y-3 w-full">
                            <div class="flex flex-col w-full">
                                <h2 class="text-lg md:text-xl font-bold mb-4">Umów się na serwis bez wychodzenia z domu</h2>
                            </div>
                            <div class="flex flex-col items-start w-full space-y-3">
                                <p class="text-sm md:text-base relative pl-6">
                                    <span class="absolute left-0 top-0 h-2 w-2 rounded-full bg-[#ed9121] mt-1"></span>
                                    Najlepsze ceny wynajmu rowerów.
                                </p>
                                
                                <p class="text-sm md:text-base relative pl-6">
                                    <span class="absolute left-0 top-0 h-2 w-2 rounded-full bg-[#ed9121] mt-1"></span>
                                    Profesjonalna naprawa i serwis rowerów.
                                </p>
                                
                                <p class="text-sm md:text-base relative pl-6">
                                    <span class="absolute left-0 top-0 h-2 w-2 rounded-full bg-[#ed9121] mt-1"></span>
                                    Szybka i wygodna rezerwacja usługi.
                                </p>
                                
                                <p class="text-sm md:text-base relative pl-6">
                                    <span class="absolute left-0 top-0 h-2 w-2 rounded-full bg-[#ed9121] mt-1"></span>
                                    Idealne dla rowerzystów i kurierów.
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
                    <!-- Serwis Napraw -->
                     <div class="flex flex-col md:flex-row">
                    <span class="flex flex-col md:flex-row items-center rounded-xl mb-4 mx-4 p-4 bg-white shadow-md flex-grow">
                        <img src="../../assets/icons/naprawa1.png" class="w-16 h-16 md:w-24 md:h-24"/>
                        <div class="flex flex-col space-y-3 ml-0 md:ml-4 mt-4 md:mt-0">
                            <div class="flex flex-row justify-between w-full">
                                <h2 class="text-lg md:text-xl font-bold">Naprawa</h2>
                                <p class="text-lg md:text-xl">od 50zł</p>
                            </div>
                            <p class="text-gray-800 text-sm md:text-base">Szybki i niedrogi serwis rowerowy, naprawiamy każdy typ rowerów.</p>
                        </div>                
                    </span>
                    
                    <!-- Serwis Regulacji -->
                    <span class="flex flex-col md:flex-row items-center rounded-xl mb-4 mx-4 p-4 bg-white shadow-md flex-grow">
                        <img src="../../assets/icons/regulacja.png" class="w-16 h-16 md:w-24 md:h-24"/>
                        <div class="flex flex-col space-y-3 ml-0 md:ml-4 mt-4 md:mt-0">
                            <div class="flex flex-row justify-between w-full">
                                <h2 class="text-lg md:text-xl font-bold">Regulacja</h2>
                                <p class="text-lg md:text-xl">od 100zł</p>
                            </div>
                            <p class="text-gray-800 text-sm md:text-base">Zadbaj o doskonały stan swojego roweru dzięki naszym usługom regulacji.</p>
                        </div>       
                    </span>
                    
                    <!-- Serwis Wypożyczeń -->
                    <span class="flex flex-col md:flex-row items-center rounded-xl mb-4 mx-4 p-4 bg-white shadow-md flex-grow">
                        <img src="../../assets/icons/rent1.png" class="w-16 h-16 md:w-24 md:h-24"/>
                        <div class="flex flex-col space-y-3 ml-0 md:ml-4 mt-4 md:mt-0">
                            <div class="flex flex-row justify-between w-full">
                                <h2 class="text-lg md:text-xl font-bold">Wypożyczalnia Rowerów</h2>
                                <p class="text-lg md:text-xl">od 100zł</p>
                            </div>
                            <p class="text-gray-800 text-sm md:text-base">Wypożycz rower na dzień, weekend lub tydzień w atrakcyjnych cenach.</p>
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
            <!-- Sekcja Sprzedaży -->
        
            <!-- Sekcja sprzedazy -->
            <div class="flex flex-col w-full text-black z-100 relative bg-white/70 p-4">
                <div class="flex flex-col md:flex-row md:space-x-10 justify-between space-y-4 md:space-y-0">
                    
                    <!-- Akcesoria Rowerowe -->
                    <span class="flex flex-col md:flex-row items-center rounded-xl p-4 bg-white shadow-md">
                        <img src="../../assets/icons/akcesorja.png" class="w-16 h-16 md:w-24 md:h-24"/>
                        <div class="flex flex-col space-y-3 ml-0 md:ml-4 mt-4 md:mt-0">
                            <div class="flex flex-row justify-between w-full">
                                <h2 class="text-lg md:text-xl font-bold">Akcesoria Rowerowe</h2>
                                <p class="text-lg md:text-xl">od 20zł</p>
                            </div>
                            <p class="text-gray-700 text-sm md:text-base">Oferujemy szeroki wybór akcesoriów rowerowych, od kasków po oświetlenie i zapięcia.</p>
                        </div>                
                    </span>
                    
                    <!-- Sprzedaż Rowerów -->
                    <span class="flex flex-col md:flex-row items-center rounded-xl p-4 bg-white shadow-md">
                        <img src="../../assets/icons/rower.png" class="w-16 h-16 md:w-24 md:h-24"/>
                        <div class="flex flex-col space-y-3 ml-0 md:ml-4 mt-4 md:mt-0">
                            <div class="flex flex-row justify-between w-full">
                                <h2 class="text-lg md:text-xl font-bold">Sprzedaż Rowerów</h2>
                                <p class="text-lg md:text-xl">od 800zł</p>
                            </div>
                            <p class="text-gray-700 text-sm md:text-base">Nowe i używane rowery w sprzedaży. Znajdź idealny rower dla siebie!</p>
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

    toast.add({ severity: 'success', summary: 'Sukces', detail: "Numer telefonu został skopiowany", life: 3000 })
};
</script>
