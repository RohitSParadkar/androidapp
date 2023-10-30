import {
    Canvas,
    Fill,
    Image,
    BackdropBlur,
    Color,
    useImage,
  } from "@shopify/react-native-skia";
   
  const Filter = () => {
    const image = useImage(require("../assets/kitchen.jfif"));
   
    return (
      <Canvas style={{ width: 256, height: 256 }}>
        <Image image={image} x={0} y={0} width={256} height={256} fit="cover" />
        <BackdropBlur blur={4} clip={{ x: 0, y: 128, width: 256, height: 128 }}>
          <Fill color="rgba(0, 0, 0, 0.2)" />
        </BackdropBlur>
      </Canvas>
    );
  };

 export default Filter