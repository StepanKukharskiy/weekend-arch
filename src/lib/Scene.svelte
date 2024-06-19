<script>
	import { T, useThrelte } from '@threlte/core';
	import { OrbitControls, GLTF, ContactShadows } from '@threlte/extras';
	import { DoubleSide } from 'three';

	const { scene } = useThrelte();
</script>

<T.PerspectiveCamera makeDefault fov={50} position={[100, 25, -90]}>
	<OrbitControls enableDamping autoRotate enableZoom={false} enablePan={false} enableRotate={false} target={[30, 15, -10.5]} />
</T.PerspectiveCamera>

<T.DirectionalLight intensity={1.2} position.x={100} position.y={100} position.z={-100} castShadow />
<!-- <T.AmbientLight intensity={1} /> -->
 <T.HemisphereLight args={['white', 'blue']} intensity={1.25}/>

<T.FogExp2
	color={'#fff'}
	density={0.0065}
	on:create={({ ref }) => {
		scene.fog = ref;
		//cleanup(() => scene.fog = null)
	}}
/>
<!-- <T.GridHelper
  args={[200, 10]}
  position.y={-0.001}
/> -->

<ContactShadows
  scale={200}
  blur={2}
  far={50}
  opacity={0.5}
/>

<GLTF url="/assets/archweekend_1_1.glb" receiveShadow castShadow scale={1} />

<!-- <T.Mesh receiveShadow castShadow>
  <T.BoxGeometry args={[2, 2, 2]}/>
  <T.MeshStandardMaterial color="red" />
</T.Mesh>

<T.Mesh
  rotation.x={-Math.PI / 2}
  position={[30, -0.1, -10.5]}
  receiveShadow
>
  <T.CircleGeometry args={[50, 40]} />
  <T.MeshStandardMaterial color="white" side={DoubleSide} />
</T.Mesh> -->
