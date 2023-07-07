import { useColorMode, IconButton } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

function ColorModeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
console.log(colorMode,"---------------------");
  return (
    <IconButton
      icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
      onClick={toggleColorMode}
      variant="ghost"
    />
  );
}

export default ColorModeSwitcher;
