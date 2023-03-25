<script setup>
import AppCard from '~~/src/components/admin/AppCard.vue'
import PageTitle from '~/components/admin/PageTitle.vue'

definePageMeta({
  layout: 'admin',
})
</script>

<template>
  <div>
    <PageTitle title="ユーザー管理" />
    <AppCard>
      <AdminSectionTitle title="検索結果" />
      <AppButton icon="add" text="登録" color="primary" />

      <AppTable>
        <tr>
          <th><input type="checkbox" /></th>
          <th>ID</th>
          <th>ログインID</th>
          <th>XXXX</th>
          <th>YYYY</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </AppTable>
    </AppCard>
  </div>
</template>
