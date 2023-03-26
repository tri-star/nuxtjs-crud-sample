<script setup>
import AppCard from '~~/src/components/admin/AppCard.vue'
import PageTitle from '~/components/admin/PageTitle.vue'
import AppCheckBox from '~~/src/components/AppCheckBox.vue'

definePageMeta({
  layout: 'admin',
})
</script>

<template>
  <div class="flex flex-col h-full">
    <PageTitle title="ユーザー管理" />
    <AppCard class="h-full">
      <AdminSectionTitle title="検索結果" />
      <div>
        <AppButton icon="add" text="登録" color="primary" />
      </div>

      <AppTable>
        <tr>
          <th class="text-center mx-auto">
            <AppCheckBox />
          </th>
          <th class="text-right">ID</th>
          <th class="text-left">名前</th>
          <th class="text-left">ログインID</th>
          <th class="text-left">登録日時</th>
          <th class="text-left">更新日時</th>
        </tr>
        <tr>
          <td class="text-center mx-auto"><AppCheckBox /></td>
          <td class="text-right">1</td>
          <td>user1</td>
          <td>USER_1</td>
          <td>2023-01-01 00:00:00</td>
          <td>2023-01-01 00:00:00</td>
        </tr>
        <tr>
          <td class="text-center"><AppCheckBox /></td>
          <td class="text-right">1</td>
          <td>user1</td>
          <td>USER_1</td>
          <td>2023-01-01 00:00:00</td>
          <td>2023-01-01 00:00:00</td>
        </tr>
      </AppTable>
    </AppCard>
  </div>
</template>
