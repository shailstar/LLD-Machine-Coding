<template>
  <div class="flex flex-col gap-2 p-2">
    <h1 class="text-3xl font-bold underline">Components</h1>
    <div class="w-1/3">
      <Dropdown />
    </div>
    <div class="w-1/3">
      <Tree :data="FILE_JSON" v-model="fileJson"></Tree>
    </div>
    <div class="w-1/3">
      <TabView>
        <TabPanel>
          <template #header>
            <div class="flex align-items-center gap-2">
              <Cube />
              <span class="font-bold white-space-nowrap">Amy Elsner</span>
            </div>
          </template>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </TabPanel>
        <TabPanel>
          <template #header>
            <div class="flex align-items-center gap-2">
              <Cylinder />
              <span class="font-bold white-space-nowrap">Onyama Limba</span>
            </div>
          </template>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
          </p>
        </TabPanel>
        <TabPanel>
          <template #header>
            <div class="flex align-items-center gap-2">
              <MinusSquare />
              <span class="font-bold white-space-nowrap">Ioni Bowcher</span>
            </div>
          </template>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
            expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque
            nihil impedit quo minus.
          </p>
        </TabPanel>
      </TabView>
    </div>
    <div class="w-1/3">
      <TabViewV2>
        <TabPanelV2 label="Amy Elsner">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </TabPanelV2>
        <TabPanelV2 label="Onyama Limba">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
          </p>
        </TabPanelV2>
        <TabPanelV2 label="Ioni Bowcher">
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
            expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque
            nihil impedit quo minus.
          </p>
        </TabPanelV2>
      </TabViewV2>
    </div>
  </div>
</template>

<script setup>
import Tree from './components/Tree/Tree.vue'
import Dropdown from './components/DropDown/index.vue'
import TabView from './components/Tabs/TabView.vue'
import TabPanel from './components/Tabs/TabPanel.vue'
import TabViewV2 from './components/TabsV2/TabViewV2.vue'
import TabPanelV2 from './components/TabsV2/TabPanelV2.vue'
import { Cube, Cylinder, MinusSquare } from '@iconoir/vue'

console.log(TabView)

import { ref } from 'vue'
import { FILE_JSON } from './store/treeData'

const fileJson = ref(FILE_JSON)
</script>

<style scoped></style>
