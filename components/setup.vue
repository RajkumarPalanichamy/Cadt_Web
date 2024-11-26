 <!-- <template>
    <div class="container mx-auto p-4 mt-4">
      <h1 class="text-3xl font-bold mb-4 text-sky-900 items-center flex justify-center">Setup</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="item in items"
          :key="item.id"
          class="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          @click="navigateToDetail(item.id)"
        >
          <img :src="item.image" :alt="item.title" class="w-full h-48 object-cover rounded-t-lg" />
          <h2 class="mt-2 text-xl font-semibold">{{ item.title }}</h2>
          <p class="text-gray-600">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  
  const items = ref([
    {
      id: 1,
      title: 'Item 1',
      image: '',
      description: 'This is the description for item 1.',
    },
    {
      id: 2,
      title: 'Item 2',
      image: '',
      description: 'This is the description for item 2.',
    },
    {
      id: 3,
      title: 'Item 3',
      image: '',
      description: 'This is the description for item 3.',
    }
  ]);
  
  const router = useRouter();
  
  
  const navigateToDetail = (id) => {
    router.push(`/detail/${id}`);
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
   
  <!-- <template>
    <TresCanvas :shadow="true" :antialias="true">
   
      <PerspectiveCamera :position="[0, 2, 5]" :fov="75" :near="0.1" :far="1000" makeDefault />
      
     
      <AmbientLight :intensity="0.5" />
      <DirectionalLight :position="[5, 10, 7.5]" :intensity="1" />
 
      <Suspense>
        <template #default>
          <GltfLoader src="../public/sea_keep_lonely_watcher/scene.gltf"/>
        </template>
        <template #fallback>
          <mesh>
            <boxGeometry />
            <meshBasicMaterial color="gray" />
          </mesh>
        </template>
      </Suspense>
  
  
      <OrbitControls />
    </TresCanvas>
  </template>
  
  <script>
  export default {
    name: 'GLTFLoaderScene',
  };
  </script>
  
  <style>
  body {
    margin: 0;
    overflow: hidden;
  }
  </style> 
  
   -->
  <template><div></div>
    </template>