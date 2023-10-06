import { Flex, Title, Box } from "@mantine/core"
import GeneralSetting from "./components/general/GeneralSettings"
import styles from './settings.module.css'

const Settings = () => {

  return (
    <>
      <Box className={styles.boxStyles}>

        <Flex
          gap="sm"
          justify="center"
          align="center"
        >
          <Title >Settings</Title >
        </Flex>

        <GeneralSetting />
      </Box>

    </>
  )
}


export default Settings