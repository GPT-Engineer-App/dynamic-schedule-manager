// Complete the Index page component here
// Use chakra-ui and react-icons for UI components
import { Box, Flex, Text, Button, VStack, HStack, useToast } from "@chakra-ui/react";
import { FaCalendarAlt, FaPlus, FaTrash, FaEdit, FaChartPie } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  // Placeholder function to simulate adding an appointment
  const handleAddAppointment = () => {
    toast({
      title: "Appointment Added",
      description: "You have successfully added a new appointment.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  // Placeholder function to simulate editing an appointment
  const handleEditAppointment = () => {
    toast({
      title: "Appointment Edited",
      description: "You have successfully edited the appointment.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  // Placeholder function to simulate deleting an appointment
  const handleDeleteAppointment = () => {
    toast({
      title: "Appointment Deleted",
      description: "The appointment has been successfully deleted.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Flex direction="column" p={5}>
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">
          NDIS Support Scheduler
        </Text>
        <HStack spacing={3}>
          <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={handleAddAppointment} isDisabled>
            Add Appointment (Details Required)
          </Button>
          <Button leftIcon={<FaEdit />} colorScheme="yellow" onClick={handleEditAppointment}>
            Edit Appointment
          </Button>
          <Button leftIcon={<FaTrash />} colorScheme="red" onClick={handleDeleteAppointment}>
            Delete Appointment
          </Button>
        </HStack>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Text mb={2}>Calendar View (Placeholder)</Text>
          <Flex justify="center" align="center" height="200px" borderWidth="1px" borderRadius="md">
            <FaCalendarAlt size="50px" />
          </Flex>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Text mb={2}>Financial Dashboard (Placeholder)</Text>
          <Flex justify="center" align="center" height="200px" borderWidth="1px" borderRadius="md">
            <FaChartPie size="50px" />
          </Flex>
        </Box>
      </VStack>
    </Flex>
  );
};

export default Index;
