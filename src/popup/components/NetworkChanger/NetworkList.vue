<script setup langt="ts">
import { useNetworkStore } from '../../stores/useNetworkStore';

const networkStore = useNetworkStore();

const setNetwork = (network) => {
    networkStore.setNetwork(network);
};

const obje = [
    { id: 1, title: 'Bitcoin' },
    { id: 2, title: 'Thether TRC20' },
    { id: 3, title: 'Ethereum' },
    { id: 4, title: 'Tether ERC20'},
    { id: 5, title: 'Tether BEP2'},
];
</script>

<template>
    <div class="flex flex-col border bg-white rounded-md absolute top-oof w-48 left-0 box-border overflow-hidden">
        <ul>
            <li v-for="item in  obje" :key="item.id" class="text py-sev pl-fth hover:bg-marine" @click="setNetwork(item.title)">{{ item.title }}</li>
        </ul>
    </div>
</template>