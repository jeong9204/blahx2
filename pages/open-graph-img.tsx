import PrintText from '@/components/print_text';
import { Box, Img } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const OpenGraphImgPage: NextPage = function () {
  const { query } = useRouter();
  const text = query.text ?? '';
  const printText = Array.isArray(text) ? text[0] : text;
  return (
    <Box width="full" bgColor="white" p="25px" pt="58px" borderRadius="lg">
      <PrintText printText={printText} />
      <Img src="/screenshow_bg.svg" alt="frame" />
    </Box>
  );
};

export default OpenGraphImgPage;
