import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  width: 100%;
  padding: 32px 16px;

  ${({ theme }) => theme.mediaQueries.xs} {
    background-size: 100%;
    margin-top: 30px;
    min-height: 1vh;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    min-height: 85vh;
  }
`

export default Container
