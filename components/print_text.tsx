import { Text } from '@chakra-ui/react';

const printText = function ({ printText }: { printText: string }) {
  const textCount = printText.length;
  const useText = textCount > 200 ? `${printText.substring(0, 199)} ...` : printText;
  return (
    <Text whiteSpace="pre-line" p="4" position="absolute" fontSize="32pt" fontFamily="Pretendard">
      {useText}
    </Text>
  );
};

export default printText;
