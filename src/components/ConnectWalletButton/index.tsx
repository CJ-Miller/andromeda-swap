import React from 'react'
import { Button, ButtonProps, useWalletModal } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import useAuth from 'hooks/useAuth'
import { useActiveWeb3React } from 'hooks'
import styled from 'styled-components'
import useGetLocalProfile from 'hooks/useGetLocalProfile'

const UnlockButton: React.FC<ButtonProps> = (props) => {
  const profile = useGetLocalProfile()
  const TranslateString = useI18n()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)
  const { account, chainId } = useActiveWeb3React()

  const Address = styled.div`
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: 0;
    border-radius: 16px;
    box-shadow: 0px -1px 0px 0px rgb(14 14 44 / 40%) inset;
    cursor: pointer;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-letter-spacing: 0.03em;
    -moz-letter-spacing: 0.03em;
    -ms-letter-spacing: 0.03em;
    letter-spacing: 0.03em;
    line-height: 1;
    opacity: 1;
    outline: 0;
    -webkit-transition: background-color 0.2s, opacity 0.2s;
    transition: background-color 0.2s, opacity 0.2s;
    height: 48px;
    padding: 0 24px;
    background-color: #4287f5;
    color: white;
    float: right;
)
  `
  const ConnectedButton = styled.div`
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: 0;
    border-radius: 16px;
    box-shadow: 0px -1px 0px 0px rgb(14 14 44 / 40%) inset;
    cursor: pointer;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-letter-spacing: 0.03em;
    -moz-letter-spacing: 0.03em;
    -ms-letter-spacing: 0.03em;
    letter-spacing: 0.03em;
    line-height: 1;
    opacity: 1;
    outline: 0;
    -webkit-transition: background-color 0.2s, opacity 0.2s;
    transition: background-color 0.2s, opacity 0.2s;
    height: 48px;
    padding: 0 24px;
    background-color: #4287f5;
    color: white;
  `
  const WalletLogo = styled.div`
    background-image: url('/images/wallet-outline.png');
    line-height: 1;

    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;

    transform: scale(0.66);
    float: left;
    padding: 0 24px;
  `
  return (
    <>
      {!account && (
        <Button onClick={onPresentConnectModal} {...props}>
          {TranslateString(292, 'Unlock Wallet')}
        </Button>
      )}
      {account && chainId && (
        <>
          <ConnectedButton>{TranslateString(292, 'Connected')}</ConnectedButton>
          <Address>
            {account.substring(0, 6)}....{account.substring(38, 42)}
          </Address>
        </>
      )}
    </>
  )
}

export default UnlockButton
