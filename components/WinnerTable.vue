<template>
  <DataTable :value="data" paginator :rows="ROWS_COUNT" :rowsPerPageOptions="ROWS_PER_PAGE_OPTIONS" :loading="loading" class="w-full text-xs">
    <template #loading> Loading winners data. Please wait. </template>
    <template #empty> No winners found. </template>
    <Column field="id" header="ID" width="15%" />
    <Column field="attributes.winnerName" header="Name" />
    <Column field="attributes.amountWon" header="Amount" />
    <Column field="attributes.scholarshipTitle" header="Scholarship Title" />
    <Column field="attributes.published" header="Published">
        <template #body="{ data }">
            <span class="pi w-6 h-6" :class="{ 'pi-check-circle text-green-500': data.attributes.published, 'pi-times-circle text-red-400': !data.attributes.published }"></span>
        </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
const ROWS_PER_PAGE_OPTIONS = [5, 10, 20, 50]
const ROWS_COUNT = 10
const { data, pending } = await useWinners()
</script>
