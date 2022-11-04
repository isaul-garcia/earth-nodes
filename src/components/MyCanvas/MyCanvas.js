import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Html } from '@react-three/drei'
import EarthNodes from "./EarthNodes"

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);
      controls.minDistance = -10;
      controls.maxDistance = 50;
      controls.maxPolarAngle = Math.PI / 2;
      controls.enablePan = false;
      controls.enableZoom = false;
      controls.enableRotate = false;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};

export const other = ([
  { markerPosition: [- 0.41, 0.61, 0.67] },
  { markerPosition: [-0.4, 0.88, 0.26] },
  { markerPosition: [-0.3, 0.46, 0.83] },
  { markerPosition: [-0.39, 0.58, 0.71] },
  { markerPosition: [-0.34, 0.59, 0.73] },
  { markerPosition: [-0.29, 0.66, 0.69] },
  { markerPosition: [-0.36, 0.74, 0.57] },
  { markerPosition: [-0.3, 0.82, 0.48] },
  { markerPosition: [-0.35, 0.87, 0.35] },
  { markerPosition: [-0.38, 0.91, 0.17] },
  { markerPosition: [-0.31, 0.93, 0.19] },
  { markerPosition: [-0.22, 0.35, 0.9] },
  { markerPosition: [-0.23, 0.52, 0.82] },
  { markerPosition: [-0.21, 0.44, 0.87] },
  { markerPosition: [-0.19, 0.64, 0.74] },
  { markerPosition: [-0.25, 0.77, 0.58] },
  { markerPosition: [-0.22, 0.81, 0.54] },
  { markerPosition: [-0.01, 0.25, 0.96] },
  { markerPosition: [-0.06, 0.32, 0.94] },
  { markerPosition: [-0.12, 0.5, 0.85] },
  { markerPosition: [-0.07, 0.5, 0.86] },
  { markerPosition: [-0.09, 0.54, 0.83] },
  { markerPosition: [-0.07, 0.63, 0.77] },
  { markerPosition: [-0.01, 0.63, 0.77] },
  { markerPosition: [-0.04, 0.71, 0.71] },
  { markerPosition: [-0.8, -0.6, -0.07] },
  { markerPosition: [-0.79, -0.46, -0.4] },
  { markerPosition: [-0.82, -0.16, -0.54] },
  { markerPosition: [-0.72, -0.69, -0.11] },
  { markerPosition: [-0.72, -0.56, -0.4] },
  { markerPosition: [-0.78, -0.32, -0.52] },
  { markerPosition: [-0.77, -0.06, -0.63] },
  { markerPosition: [-0.62, -0.24, -0.74] },
  { markerPosition: [-0.65, -0.01, -0.75] },
  { markerPosition: [-0.52, -0.04, -0.85] },
  { markerPosition: [-0.38, -0.53, -0.76] },
  { markerPosition: [-0.38, -0.12, -0.91] },
  { markerPosition: [-0.28, -0.11, -0.95] },
  { markerPosition: [-0.79, 0.24, -0.56] },
  { markerPosition: [-0.61, 0.6, -0.51] },
  { markerPosition: [-0.57, 0.68, -0.45] },
  { markerPosition: [-0.59, 0.57, -0.57] },
  { markerPosition: [-0.54, 0.55, -0.63] },
  { markerPosition: [-0.55, 0.47, -0.69] },
  { markerPosition: [-0.54, 0.16, -0.82] },
  { markerPosition: [-0.47, 0.74, -0.48] },
  { markerPosition: [-0.51, 0.58, -0.63] },
  { markerPosition: [-0.41, 0.71, -0.57] },
  { markerPosition: [-0.47, 0.42, -0.77] },
  { markerPosition: [-0.44, 0.53, -0.72] },
  { markerPosition: [-0.48, 0.11, -0.87] },
  { markerPosition: [-0.41, 0.07, -0.9] },
  { markerPosition: [-0.5, 0.25, -0.82] },
  { markerPosition: [-0.31, 0.83, -0.46] },
  { markerPosition: [-0.36, 0.5, -0.78] },
  { markerPosition: [-0.36, 0.59, -0.72] },
  { markerPosition: [-0.3, 0.66, -0.69] },
  { markerPosition: [-0.37, 0.38, -0.84] },
  { markerPosition: [-0.3, 0.27, -0.91] },
  { markerPosition: [-0.27, 0.55, -0.79] },
  { markerPosition: [-0.28, 0.2, -0.93] },
  { markerPosition: [-0.16, 0.79, -0.59] },
  { markerPosition: [-0.19, 0.59, -0.78] },
  { markerPosition: [-0.17, 0.51, -0.84] },
  { markerPosition: [-0.2, 0.06, -0.97] },
  { markerPosition: [-0.18, 0.24, -0.95] },
  { markerPosition: [-0.01, 0.83, -0.56] },
  { markerPosition: [-0.02, 0.4, -0.91] },
  { markerPosition: [0.23, -0.2, 0.95] },
  { markerPosition: [0.19, -0.12, 0.97] },
  { markerPosition: [0.19, -0.04, 0.98] },
  { markerPosition: [0.25, -0.72, 0.65] },
  { markerPosition: [0.37, -0.47, 0.8] },
  { markerPosition: [0.31, -0.29, 0.9] },
  { markerPosition: [0.32, -0.38, 0.86] },
  { markerPosition: [0.29, -0.54, 0.79] },
  { markerPosition: [0.29, -0.62, 0.73] },
  { markerPosition: [0.42, -0.3, 0.85] },
  { markerPosition: [0.43, -0.09, 0.89] },
  { markerPosition: [0.5, -0.04, 0.86] },
  { markerPosition: [0.41, -0.53, 0.74] },
  { markerPosition: [0.43, -0.56, 0.7] },
  { markerPosition: [0.48, -0.43, 0.76] },
  { markerPosition: [0.54, -0.51, 0.67] },
  { markerPosition: [0.59, -0.42, 0.69] },
  { markerPosition: [0.56, -0.37, 0.73] },
  { markerPosition: [0.64, -0.27, 0.72] },
  { markerPosition: [0.65, -0.02, 0.75] },
  { markerPosition: [0.73, -0.06, 0.67] },
  { markerPosition: [0.68, -0.34, 0.65] },
  { markerPosition: [0.69, -0.37, 0.62] },
  { markerPosition: [0.77, -0.19, 0.6] },
  { markerPosition: [0.81, -0.12, 0.56] },
  { markerPosition: [0.06, 0.25, 0.96] },
  { markerPosition: [0.11, 0.19, 0.97] },
  { markerPosition: [0.04, 0.35, 0.93] },
  { markerPosition: [0.01, 0.51, 0.85] },
  { markerPosition: [0.11, 0.48, 0.87] },
  { markerPosition: [0.12, 0.45, 0.88] },
  { markerPosition: [0.07, 0.55, 0.83] },
  { markerPosition: [0.12, 0.58, 0.8] },
  { markerPosition: [0.07, 0.63, 0.77] },
  { markerPosition: [0.02, 0.67, 0.74] },
  { markerPosition: [0.09, 0.67, 0.73] },
  { markerPosition: [0.22, 0.06, 0.97] },
  { markerPosition: [0.18, 0.16, 0.97] },
  { markerPosition: [0.25, 0.17, 0.95] },
  { markerPosition: [0.22, 0.32, 0.92] },
  { markerPosition: [0.24, 0.36, 0.9] },
  { markerPosition: [0.14, 0.5, 0.85] },
  { markerPosition: [0.2, 0.41, 0.88] },
  { markerPosition: [0.14, 0.55, 0.82] },
  { markerPosition: [0.17, 0.63, 0.76] },
  { markerPosition: [0.18, 0.61, 0.77] },
  { markerPosition: [0.2, 0.65, 0.73] },
  { markerPosition: [0.2, 0.72, 0.67] },
  { markerPosition: [0.24, 0.67, 0.7] },
  { markerPosition: [0.27, 0.07, 0.96] },
  { markerPosition: [0.27, 0.11, 0.95] },
  { markerPosition: [0.3, 0.19, 0.93] },
  { markerPosition: [0.37, 0.17, 0.91] },
  { markerPosition: [0.32, 0.32, 0.89] },
  { markerPosition: [0.38, 0.32, 0.86] },
  { markerPosition: [0.34, 0.72, 0.6] },
  { markerPosition: [0.47, 0.19, 0.86] },
  { markerPosition: [0.47, 0.25, 0.84] },
  { markerPosition: [0.62, 0.78, 0.01] },
  { markerPosition: [0.58, 0.81, 0.02] },
  { markerPosition: [0.59, 0.8, 0.06] },
  { markerPosition: [0.75, 0.65, 0.04] },
  { markerPosition: [0.77, 0.62, 0.12] },
  { markerPosition: [0.68, 0.73, 0.01] },
  { markerPosition: [0.72, 0.69, 0.02] },
  { markerPosition: [0.74, 0.66, 0.11] },
  { markerPosition: [0.85, 0.47, 0.22] },
  { markerPosition: [0.79, 0.61, 0.09] },
  { markerPosition: [0.82, 0.56, 0.09] },
  { markerPosition: [0.93, 0.24, 0.26] },
  { markerPosition: [0.99, 0.11, 0.04] },
  { markerPosition: [0.97, 0.22, 0.04] },
  { markerPosition: [0.77, -0.43, -0.47] },
  { markerPosition: [0.77, -0.11, -0.62] },
  { markerPosition: [0.79, -0.56, -0.26] },
  { markerPosition: [0.79, -0.45, -0.42] },
  { markerPosition: [0.84, -0.27, -0.47] },
  { markerPosition: [0.8, -0.02, -0.59] },
  { markerPosition: [0.98, -0.02, -0.16] },
  { markerPosition: [0.1, 0.8, -0.59] },
  { markerPosition: [0.01, 0.69, -0.72] },
  { markerPosition: [0.04, 0.39, -0.92] },
  { markerPosition: [0.19, 0.76, -0.63] },
  { markerPosition: [0.16, 0.82, -0.55] },
  { markerPosition: [0.25, 0.57, -0.78] },
  { markerPosition: [0.27, 0.66, -0.7] },
  { markerPosition: [0.2, 0.48, -0.85] },
  { markerPosition: [0.24, 0.4, -0.88] },
  { markerPosition: [0.17, 0.12, -0.97] },
  { markerPosition: [0.17, 0.22, -0.96] },
  { markerPosition: [0.19, 0.32, -0.92] },
  { markerPosition: [0.32, 0.82, -0.48] },
  { markerPosition: [0.28, 0.33, -0.9] },
  { markerPosition: [0.34, 0.42, -0.83] },
  { markerPosition: [0.5, 0.86, -0.06] },
  { markerPosition: [0.45, 0.86, -0.22] },
  { markerPosition: [0.5, 0.85, -0.16] },
  { markerPosition: [0.4, 0.84, -0.38] },
  { markerPosition: [0.45, 0.83, -0.33] },
  { markerPosition: [0.52, 0.81, -0.29] },
  { markerPosition: [0.46, 0.76, -0.46] },
  { markerPosition: [0.51, 0.74, -0.43] },
  { markerPosition: [0.52, 0.59, -0.62] },
  { markerPosition: [0.49, 0.69, -0.54] },
  { markerPosition: [0.48, 0.4, -0.77] },
  { markerPosition: [0.51, 0.5, -0.69] },
  { markerPosition: [0.52, 0.4, -0.75] },
  { markerPosition: [0.4, 0.6, -0.69] },
  { markerPosition: [0.62, 0.78, -0.06] },
  { markerPosition: [0.63, 0.78, -0.04] },
  { markerPosition: [0.65, 0.75, -0.12] },
  { markerPosition: [0.55, 0.83, -0.12] },
  { markerPosition: [0.58, 0.81, -0.11] },
  { markerPosition: [0.6, 0.77, -0.21] },
  { markerPosition: [0.63, 0.75, -0.19] },
  { markerPosition: [0.58, 0.79, -0.22] },
  { markerPosition: [0.58, 0.8, -0.14] },
  { markerPosition: [0.55, 0.75, -0.37] },
  { markerPosition: [0.59, 0.72, -0.35] },
  { markerPosition: [0.61, 0.72, -0.32] },
  { markerPosition: [0.63, 0.6, -0.5] },
  { markerPosition: [0.65, 0.65, -0.4] },
  { markerPosition: [0.64, 0.59, -0.48] },
  { markerPosition: [0.57, 0.51, -0.64] },
  { markerPosition: [0.54, 0.62, -0.57] },
  { markerPosition: [0.59, 0.55, -0.59] },
  { markerPosition: [0.66, 0.75, -0.02] },
  { markerPosition: [0.66, 0.74, -0.09] },
  { markerPosition: [0.68, 0.73, -0.11] },
  { markerPosition: [0.71, 0.7, -0.04] },
  { markerPosition: [0.75, 0.66, -0.02] },
  { markerPosition: [0.72, 0.65, -0.23] },
  { markerPosition: [0.76, 0.61, -0.21] },
  { markerPosition: [0.67, 0.7, -0.25] },
  { markerPosition: [0.73, 0.66, -0.17] },
  { markerPosition: [0.71, 0.64, -0.3] },
  { markerPosition: [0.73, 0.6, -0.31] },
  { markerPosition: [0.67, 0.65, -0.34] },
  { markerPosition: [0.73, 0.52, -0.43] },
  { markerPosition: [0.69, 0.54, -0.48] },
  { markerPosition: [0.77, 0.16, -0.61] },
  { markerPosition: [0.7, 0.32, -0.63] },
  { markerPosition: [0.72, 0.37, -0.59] },
  { markerPosition: [0.69, 0.26, -0.67] },
  { markerPosition: [0.8, 0.59, -0.04] },
  { markerPosition: [0.81, 0.53, -0.22] },
  { markerPosition: [0.85, 0.4, -0.34] },
  { markerPosition: [0.81, 0.27, -0.52] },
  { markerPosition: [0.97, 0.17, -0.16] },
])

function Marker({ children, ...props }) {
  const [occluded, occlude] = useState()
  const divStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '30px',
    background: '#4400ff'
  }
  return (
    <group position={props.markerPosition}>
      <Html
        distanceFactor={0.03}
        occlude
        onOcclude={occlude}
        style={{ transition: 'all 0.2s', opacity: occluded ? 0 : 1, transform: `scale(${occluded ? 0.25 : 1})` }}
        {...props}>
        <div style={divStyle} />
      </Html>
    </group>
  )
}

function MyCanvas() {
  const getRandom = (arr, n) => {
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }
  const randomizedMarkers = getRandom(other, 48)


  const [zoomVal, setZoomVal] = useState(true);
  const showMobileButton = () => {
      if(window.innerWidth <= 991) {
          setZoomVal(9)
      } else {
          setZoomVal(18)
      }
  };
  useEffect(() => {
      showMobileButton();
  }, []);

  return (
    <>
      <Canvas orthographic dpr={[0.1, 1]} camera={{ zoom: zoomVal, position: [10, 35, 90], near: -200, far: 400 }} >
        <CameraController />
        <ambientLight intensity={0.8} color={'#fff'} />
        <spotLight intensity={2.8} position={[15, 25, -25]} color={'#00eeff'} />
        <spotLight intensity={2.8} position={[195, 5, -295]} color={'#00eeff'} />
        <spotLight intensity={2.2} position={[-50, 50, -80]} color={'#444499'} />
        <spotLight intensity={2.2} position={[-90, 30, -80]} color={'#444499'} />
        <spotLight intensity={0.8} position={[170, 200, 200]} color={'#fff'} />
        <Suspense fallback={null}>
          <EarthNodes>
            {randomizedMarkers.map((props, key) => (
              <Marker key={key} {...props} />
            ))}
          </EarthNodes>
        </Suspense>
      </Canvas>
    </>
  );
}

export default MyCanvas