
"use client"

import { ActionIcon, Button } from '@mantine/core';
import Link from 'next/link';
import { IconSettings, IconPhoto } from '@tabler/icons-react';
import { signOut } from 'next-auth/react';
import styles from './navbar.module.css'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import settingsIcon from '../../../public/adjustments-horizontal.svg'
import groupIcon from '../../../public/users-group.svg'
import doorIcon from '../../../public/door-exit.svg'
const Navbar = () => {
  const pathname = usePathname()
  const handleSignOut = async () => {
    const rootPage = "/"
    try {
      await signOut({
        callbackUrl: rootPage
      })
    } catch (error) {
      console.error("Failed logging out")
    }
  }
  return (
    <nav className={styles.navbar}>
      {/* TODO add navbar */}
      <div>
        <Link href="/home/daily" className={`${styles.navbarLink} ${pathname === '/home/daily' && styles.selectedPath}`}>
          Daily
          <ActionIcon variant="transparent" color="gray" size="sm" aria-label="Settings">
            <Image src={groupIcon} alt='' />
          </ActionIcon>
        </Link>
        <Link href="/home/settings" className={`${styles.navbarLink} ${pathname === '/home/settings' && styles.selectedPath}`}>
          Settings
          <ActionIcon variant="transparent" color="gray" size="sm" aria-label="Settings">
            <Image src={settingsIcon} alt='' />
          </ActionIcon>
        </Link>
      </div>
      <Button className={styles.logoutButton} rightSection={<Image src={doorIcon} alt='' />} onClick={handleSignOut}>
        Logout
      </Button>

    </nav >
  )
}

export default Navbar