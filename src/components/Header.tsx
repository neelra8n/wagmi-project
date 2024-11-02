import { Download } from "lucide-react";
import {
  ControlsSection,
  FaucetButton,
  HeaderContainer,
  HeaderWrapper,
  NetworkButton,
  StatItem,
  StatLabel,
  StatsSection,
  StatValue,
  WalletButton,
} from "./StyledComponents";
import { useAppState } from "../context/AppProvider";

const DeFiHeader = () => {
  const { address, isConnected, connect } = useAppState();

  const handleFaucet = async () => {
    // Implement faucet logic here
    console.log("Requesting tokens from faucet");
  };

  const formatAddress = (addr) => {
    if (!addr) return "";
    return `${addr.slice(0, 4)}...${addr.slice(-4)}`;
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <StatsSection>
          <StatItem>
            <StatLabel>TVL</StatLabel>
            <StatValue>$1.56M</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>APR</StatLabel>
            <StatValue>15.36%</StatValue>
          </StatItem>
        </StatsSection>

        <ControlsSection>
          <FaucetButton onClick={handleFaucet}>
            <Download size={16} />
            Faucet
          </FaucetButton>

          {/* Network selection buttons */}
          <NetworkButton>
            <img
              src="https://stg.yield.fi/images/opSelectedChainIcon.svg"
              alt="Network"
              width={24}
              height={24}
            />
          </NetworkButton>

          <NetworkButton active>
            <img src="https://stg.yield.fi/images/arbChainIcon.svg" alt="" />
          </NetworkButton>

          <WalletButton onClick={connect}>
            {isConnected ? formatAddress(address) : "Connect Wallet"}
          </WalletButton>
        </ControlsSection>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

// Theme provider wrapper
const DeFiHeaderWithTheme = () => {
  return <DeFiHeader />;
};

export default DeFiHeaderWithTheme;
