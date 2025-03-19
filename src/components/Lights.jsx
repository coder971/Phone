import { Environment, Lightformer } from "@react-three/drei";

const Lights = () => {
  return (
    <group name="lights">
      {/* Environment lighting for realistic reflections */}
      <Environment resolution={512}>
        <group>
          {/* Soft ambient lighting */}
          <Lightformer form="rect" intensity={8} position={[-1, 0, -10]} scale={12} color="#6c757d" />
          <Lightformer form="rect" intensity={8} position={[-10, 3, 1]} scale={12} rotation-y={Math.PI / 2} />
          <Lightformer form="rect" intensity={8} position={[10, 1, 1]} scale={12} rotation-y={Math.PI / 2} />
        </group>
      </Environment>

      {/* Spotlights for depth and highlights */}
      <spotLight position={[-2, 12, 6]} angle={0.2} penumbra={1} decay={0} intensity={Math.PI * 0.4} color="#ffffff" />
      <spotLight position={[0, -20, 12]} angle={0.2} penumbra={1} decay={0} intensity={Math.PI * 0.3} color="#e9ecef" />
      <spotLight position={[0, 18, 5]} angle={0.2} penumbra={1} decay={0.1} intensity={Math.PI * 2.5} />

      {/* Soft fill light for better balance */}
      <spotLight position={[5, 5, 5]} intensity={Math.PI * 0.2} />
    </group>
  );
};

export default Lights;