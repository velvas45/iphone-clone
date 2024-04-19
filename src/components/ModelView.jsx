import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";

import * as THREE from "three";

import Lights from "./Lights";
import { Suspense } from "react";
import Iphone from "./model3d/Iphone";
import Loader from "./Loader";

const ModalView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${
        index === 2 ? "right-[-100%]" : ""
      }`}>
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera
        makeDefault
        fov={window.innerWidth < 760 ? 40 : 55}
        position={[0, 0, 4]}
      />

      <Lights />

      <OrbitControls
        enabled={window.innerWidth < 760 ? false : true}
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        autoRotate={true}
        autoRotateSpeed={3}
        rotateSpeed={0.5}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />
      <group
        ref={groupRef}
        name={`${index === 1} ? 'small' : 'large'`}
        position={[0, 0, 0]}>
        <Suspense fallback={<Loader />}>
          <Iphone
            scale={index === 1 ? [15, 15, 15] : [18, 18, 18]}
            item={item}
            size={size}
            rotation={window.innerWidth < 760 ? [0, Math.PI, 0] : [0, 0, 0]}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModalView;
