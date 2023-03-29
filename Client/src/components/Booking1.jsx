import { Actionsheet, Box, useDisclose } from "native-base";

const Booking1 = () => {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content>
        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <Box w="100%" h={600} px={4} justifyContent="center">
            <Text
              fontSize="16"
              color="gray.500"
              _dark={{
                color: "gray.300",
              }}
            >
              Albums
            </Text>
          </Box>
          <Box w="100%" h={600} px={4} justifyContent="center">
            <Text
              fontSize="16"
              color="gray.500"
              _dark={{
                color: "gray.300",
              }}
            >
              Albums
            </Text>
          </Box>
        </ScrollView>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default Booking1;
