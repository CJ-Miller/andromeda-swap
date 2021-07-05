import UnlockButton from 'components/ConnectWalletButton'
import useAuth from 'hooks/useAuth'
import React from 'react'
import styled from 'styled-components'
import './style.css'
import useGetLocalProfile from 'hooks/useGetLocalProfile'
import { useWeb3React } from '@web3-react/core'
import { HeaderType } from '@pancakeswap-libs/uikit'
import logo from '../../images/electrik-logo.png'

const NavBar = () => {
  const { login, logout } = useAuth()
  const { account } = useWeb3React()

  return (
    <div className="background">
      <img alt="logo" className="logo" src={logo} />
      {/* <div className="unlock">
        <UnlockButton />
      </div> */}
      {/* <div className="account">{account as string}</div> */}
    </div>
  )
}

export default NavBar
