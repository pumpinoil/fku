// // src/components/MagickCard/MagickCard.tsx

// import React, { useRef, useState } from 'react';
// import { useTexture } from '@react-three/drei';
// import { a, useSpring } from '@react-spring/three';
// import { MagickCardProps } from '../types/magickCard'; // Adjusted path
// import { useAppDispatch } from '../store/hooks'; // Use typed hook
// import { removeCard } from '../store/actions';
// import OptionsMenu from '../components/OptionsMenu'; // Adjusted path
// import * as THREE from 'three'; // Import THREE
// import { ThreeEvent } from '@react-three/fiber';

// interface MagickCardComponentProps {
//   card: MagickCardProps;
//   onSelect: () => void;
// }

// const MagickCard: React.FC<MagickCardComponentProps> = ({ card, onSelect, ...props }) => {
//   const dispatch = useAppDispatch(); // Use typed dispatch
//   const [isMenuVisible, setMenuVisible] = useState(false);
//   const texture = useTexture(card.background || 'path_to_default_texture.jpg');
//   const meshRef = useRef<THREE.Mesh>(null);

//   // Spring for smooth tilting
//   const [{ rotation }, api] = useSpring(() => ({
//     rotation: [0, 0, 0],
//     config: { mass: 5, tension: 350, friction: 40 },
//   }));

//   // Handle mouse movement for tilting
//   const handlePointerMove = (_event: ThreeEvent<PointerEvent>) => {
//     const target = _event.target as HTMLElement;
//     const clientX = _event.clientX;
//     const clientY = _event.clientY;
//     const { width, height } = target.getBoundingClientRect();
//     const x = (clientX / width - 0.5) * 0.2;
//     const y = (clientY / height - 0.5) * -0.2;
//     api.start({ rotation: [y, x, 0] });
//   };

//   const handlePointerOut = () => {
//     api.start({ rotation: [0, 0, 0] });
//   };

//   // Handle Options Menu
//   const handleMouseEnter = () => {
//     setMenuVisible(true);
//   };

//   const handleMouseLeave = () => {
//     setMenuVisible(false);
//   };

//   const handleEdit = () => {
//     // Implement edit functionality, e.g., open customization panel
//     console.log('Edit Card:', card.id);
//   };

//   const handleDelete = () => {
//     dispatch(removeCard(card.id));
//   };

//   return (
//     <a.mesh
//       ref={meshRef}
//       rotation-x={rotation.get()[0]}
//       rotation-y={rotation.get()[1]}
//       rotation-z={rotation.get()[2]}
//       onPointerMove={handlePointerMove}
//       onPointerOut={handlePointerOut}
//       onClick={onSelect}
//       onPointerEnter={handleMouseEnter}
//       onPointerLeave={handleMouseLeave}
//       {...props}
//     >
//       <planeGeometry args={[card.w, card.h]} /> {/* Changed from planeBufferGeometry to planeGeometry */}
//       <meshStandardMaterial
//         map={texture}
//         transparent
//         opacity={card.opacity}
//         roughness={0.5}
//         metalness={0.1}
//         color={card.backgroundColor}
//       />
//       {/* Glow Effect */}
//       {card.glowEffect && (
//         <mesh>
//           <planeGeometry args={[card.w + 0.2, card.h + 0.2]} />
//           <meshBasicMaterial
//             color={card.glowColor}
//             transparent
//             opacity={0.5}
//             side={THREE.DoubleSide}
//             blending={THREE.AdditiveBlending}
//           />
//         </mesh>
//       )}
//       {/* Crystal Effect */}
//       {card.crystalEffect && (
//         <mesh>
//           <planeGeometry args={[card.w + 0.2, card.h + 0.2]} />
//           <meshStandardMaterial
//             color="#ffffff"
//             transparent
//             opacity={0.2}
//             metalness={1}
//             roughness={0}
//             envMapIntensity={1}
//           />
//         </mesh>
//       )}
//       {/* Options Menu */}
//       <OptionsMenu
//         isVisible={isMenuVisible}
//         onEdit={handleEdit}
//         onDelete={handleDelete}
//       />
//     </a.mesh>
//   );
// };

// export default MagickCard;
