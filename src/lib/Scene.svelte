<script>
	import { T, useThrelte } from '@threlte/core';
	import { OrbitControls, GLTF, ContactShadows } from '@threlte/extras';
	import { DoubleSide } from 'three';

	const { scene } = useThrelte();
</script>

<T.PerspectiveCamera makeDefault fov={50} position={[-60, 40, -60]}>
	<OrbitControls enableDamping autoRotate enableZoom={false} enablePan={false} enableRotate={true} target={[45, 35, -27]} />
</T.PerspectiveCamera>

<T.DirectionalLight intensity={1.5} position.x={-100} position.y={100} position.z={100} castShadow />
<!-- <T.AmbientLight intensity={1} /> -->
 <T.HemisphereLight args={['lightgrey', 'blue']} intensity={2}/>

<T.FogExp2
	color={'#fff'}
	density={0.0075}
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
  far={250}
  opacity={0.95}
/>

<GLTF url="/assets/archweekend_1_2.glb" receiveShadow castShadow scale={1} />

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
