
import { Flex, Title, Box } from "@mantine/core";
import Countdown from "./components/Countdown"
import ParticipantList from "./components/participants/ParticipantList";
import styles from './daily.module.css'
const Dashboard = () => {

  const time = new Date();
  time.setSeconds(time.getSeconds() + 90)


  return (
    <>
      <Box className={styles.boxContainer}>
        <Box className={styles.boxStyles} >
          <Flex
            gap="sm"
            justify="center"
            align="center"
            direction="column"
          >
            <Title>Daily Stand-up</Title >

          </Flex>
          <Countdown settings={{ expiryTimestamp: time, autoStart: false }} />


        </Box>
        <Box className={styles.boxStyles}>
          <ParticipantList />
        </Box>
      </Box>
    </>
  )
}

export default Dashboard