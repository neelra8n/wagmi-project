
import { useBalance, useAccount } from "wagmi";
import {
  BalanceText,
  DepositButton,
  InfoIcon,
  InfoNote,
  InfoRow,
  Input,
  InputContainer,
  InputLabel,
  InputSection,
  Tab,
  TabContainer,
  TokenIcon,
  TokenSelector,
  ArrowDown,
  Container,
} from "../components/StyledComponents";

// Main Component
const DepositInterface = () => {
  const [activeTab, setActiveTab] = useState("deposit");
  const [amount, setAmount] = useState("0");
  const { address } = useAccount();

  const { data: usdtBalance } = useBalance({
    address,
    token: "0xdAC17F958D2ee523a2206206994597C13D831ec7", // USDT contract
  });

  const handleDeposit = () => {
    // Implement deposit logic here
    console.log("Depositing:", amount);
  };

  return (
    <div>
      <TabContainer>
        <Tab
          active={activeTab === "deposit"}
          onClick={() => setActiveTab("deposit")}
        >
          Deposit
        </Tab>
        <Tab
          active={activeTab === "withdraw"}
          onClick={() => setActiveTab("withdraw")}
        >
          Withdraw
        </Tab>
      </TabContainer>
      <Container>
        <InputSection>
          <InputLabel>You Deposit</InputLabel>
          <InputContainer>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0"
            />
            <TokenSelector>
              <TokenIcon>T</TokenIcon>
              USDT
            </TokenSelector>
          </InputContainer>
          <BalanceText>
            Balance: {usdtBalance?.formatted || "0"} MAX
          </BalanceText>
        </InputSection>

        <ArrowDown>
          <img src="https://stg.yield.fi/images/expandArrow.svg" />
        </ArrowDown>

        <InputSection>
          <InputLabel>You Receive</InputLabel>
          <InputContainer>
            <Input type="number" value={amount} disabled placeholder="0.00" />
            <TokenSelector>
              <TokenIcon style={{ background: "#FF6B00" }}>y</TokenIcon>
              yUSD
            </TokenSelector>
          </InputContainer>
          <BalanceText>Balance: 0</BalanceText>
        </InputSection>

        <InfoRow>
          <div style={{ display: "flex", alignItems: "center" }}>
            yUSD APR <InfoIcon />
          </div>
          <div>15.36%</div>
        </InfoRow>

        <InfoRow>
          <div style={{ display: "flex", alignItems: "center" }}>
            Exchange Rate <InfoIcon />
          </div>
          <div>1 yUSD = 1.06 USDT</div>
        </InfoRow>

        <InfoRow>
          <div style={{ display: "flex", alignItems: "center" }}>
            Fees <InfoIcon />
          </div>
          <div>10%</div>
        </InfoRow>

        <InfoRow>
          <div style={{ display: "flex", alignItems: "center" }}>
            Rewards (YieldFi Crumbs / Day / $100) <InfoIcon />
          </div>
          <div>1</div>
        </InfoRow>

        <DepositButton onClick={handleDeposit}>Deposit</DepositButton>

        <InfoNote>
          Lend yUSD and borrow against it to leverage loop and earn higher APRs
          & 2x YieldFi Crumbs. See DeFi section for such opportunities.
        </InfoNote>
      </Container>
    </div>
  );
};

export default DepositInterface;
