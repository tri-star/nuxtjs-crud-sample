<script setup>
import Card from '~~/components/admin/Card.vue';
import PageTitle from '~~/components/admin/PageTitle.vue';

definePageMeta({
  layout: "admin",
});

</script>

<template>
  <PageTitle title="ユーザー管理" />
  <Card>
    <AdminSectionTitle title="検索結果" />
  </Card>
</template>
