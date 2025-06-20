<template>
  <DataTable :value="winners" :loading="pending" class="w-full">
    <Column field="attributes.name" header="Name" />
    <Column field="attributes.scholarship" header="Scholarship" />
  </DataTable>
</template>

<script setup lang="ts">
const { data: winners, pending } = useWinners()
</script>
