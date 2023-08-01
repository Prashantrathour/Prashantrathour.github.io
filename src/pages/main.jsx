import { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";

const Calendar = ({ username }) => {
  username="prashantrathour"
  const [data, setData] = useState([]);

  const colors = {
    empty: "#ebedf0",
    low: "#c6e48b",
    medium: "#7bc96f",
    high: "#239a3b",
    veryHigh: "#196127",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/contributions`
        );
        const contributions = await response.json();
        setData(contributions);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [username]);

  const getCircleColor = (count) => {
    if (count === 0) {
      return colors.empty;
    } else if (count <= 2) {
      return colors.low;
    } else if (count <= 4) {
      return colors.medium;
    } else if (count <= 6) {
      return colors.high;
    } else {
      return colors.veryHigh;
    }
  };

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        GitHub Contributions
      </Text>
      <Flex justifyContent="center" flexWrap="wrap">
        {data?.map((item) => (
          <Box
            key={item.date}
            w={["14%", "7%", "4%"]} // Adjust the width for different screen sizes
            bg={getCircleColor(item.count)}
            borderRadius="50%"
            mx={1}
            my={2}
            p={1}
            // textAlign="center"
          >
            <FaCircle size={16} color="#fff" />
            <Text fontSize="xs" color="gray.800" mt={1}>
              {item.count}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Calendar;
