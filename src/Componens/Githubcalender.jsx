import { Box, Flex, Heading, Image, useColorMode } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "github-calendar";
import styles from "./Nav.module.css";
import Calendar from "../pages/main";

const GithubCalendarComponent = () => {
  React.useEffect(() => {
    // GitHubCalendar(".calendar", "prashantrathour");

    // or enable responsive functionality:
    // GitHubCalendar(".calendar", "prashantrathour", { responsive: true });

    // Use a proxy

  
  }, []);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box margin="auto" maxW="100%" p={4} className="git">
      {/* <Box  Direction={"row"} overflowX="scroll" p={4} color={colorMode=="light"?"black":'white'}  fontFamily={"fantasy"} className={`${styles.calendar} calendar`}>
        Loading... */}
      {/* </Box> */}
      <Box>
        <Box className="react-activity-calendar" color={colorMode=="light"?"black":'white'} >
          <Image
            width={{ base: "100%", sm: "100%" }}
            m="auto"
            bgColor="#e0e0e0"
            borderRadius="5px"
            src="https://ghchart.rshah.org/Prashantrathour"
            alt="Git Calender"
          />
        </Box>
      </Box>
      <Box m={4}>
        <Flex
          justifyContent="center"
          direction={["column", "row", "row", "row"]}
          flexWrap="wrap"
        >
          <Box>
            <Image
              id="github-streak-stats"
              src="https://github-readme-streak-stats.herokuapp.com?user=Prashantrathour&theme=dark&exclude_days=Sun%2CMon%2CTue%2CWed%2CThu%2CFri%2CSat&type=png)](https://git.io/streak-stats)"
              alt="prashantrathour"
              boxSize={["100%", "100%", "100%", "auto"]}
              mb={4}
            />
          </Box>
          <Box>
            {" "}
            <Image
              id="github-stats-card"
              src="https://github-readme-stats.vercel.app/api?username=Prashantrathour&show_icons=true&theme=radical&locale=en"
              alt="prashantrathour"
              boxSize={["100%", "100%", "100%", "auto"]}
              mb={4}
            />
          </Box>

          <Box >
            {" "}
            <Image
             
              id="github-top-langs"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Prashantrathour&theme=tokyonight"
              alt="prashantrathour"
    
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default GithubCalendarComponent;
