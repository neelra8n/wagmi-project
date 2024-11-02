import styled from "styled-components";

// Styled Components
export const DrawerWrapper = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
`;

export const TopBar = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background-color: #fff;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
  z-index: 40;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const DrawerContent = styled.div`
  width: 140px;
  height: 100%;
  background-color: white;
  border-right: 1px solid #e5e7eb;
  padding: 20px;
  transition: transform 0.3s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 50;

  @media (max-width: 768px) {
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
    box-shadow: ${({ isOpen }) =>
      isOpen ? "4px 0 8px rgba(0, 0, 0, 0.1)" : "none"};
  }
`;

export const MainContent = styled.div`
  flex: 1;
  margin-left: 240px;
  padding: 16px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 64px;
  }
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  color: black;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px;
  order: 1;
  &:hover {
    opacity: 0.8;
  }
`;

export const NavItem = styled.div`
  padding: 12px;
  margin: 4px 0;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #374151;
  height: 30px;
  background-color: ${({ isSelected }) =>
    isSelected ? "rgba(255, 218, 198, 0.8)" : "unset"};
  &:hover {
    background-color: rgba(255, 218, 198, 0.8);
  }
`;

export const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 45;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  }
`;

export const LogoSection = styled.div`
  margin-bottom: 32px;
`;

// Styled Components
export const Container = styled.div`
  max-width: 480px;
  padding: 24px;
  background: white;
  border-radius: 12px;
`;

export const TabContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

export const Tab = styled.button`
  padding: 8px 16px;
  border: none;
  background: ${(props) => (props.active ? "#FFD4BC" : "transparent")};
  color: ${(props) => (props.active ? "#FF6B00" : "#666")};
  border-radius: 8px;
  cursor: pointer;
  font-size: 24px;
`;

export const InputSection = styled.div`
  margin-bottom: 24px;
`;

export const InputLabel = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;

export const InputContainer = styled.div`
  display: flex;
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
`;

export const Input = styled.input`
  flex: 1;
  padding: 16px;
  border: none;
  background: transparent;
  font-size: 24px;
  &:focus {
    outline: none;
  }
`;

export const TokenSelector = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
  background: #e8e8e8;
  border: none;
  cursor: pointer;
  &:hover {
    background: #dadada;
  }
`;

export const TokenIcon = styled.div`
  width: 20px;
  height: 20px;
  background: #00b377;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
`;

export const BalanceText = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  color: #666;
  margin-top: 4px;
`;

export const ArrowDown = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  color: #666;
  width: 24px;
  margin: auto;
  color: white;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  font-size: 14px;
  color: #666;
`;

export const InfoIcon = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  color: #666;
`;

export const DepositButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #ff6b00;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 24px;
  &:hover {
    background: #e65200;
  }
`;

export const InfoNote = styled.div`
  margin-top: 16px;
  padding: 12px;
  background: #fff0e6;
  border-radius: 8px;
  font-size: 14px;
  color: #ff6b00;
`;

export const HeaderWrapper = styled.div`
  z-index: 1;
  height: 106px;
  position: fixed;
  top: 0;
  left: 180px;
  background: #ff5c00;
  width: -webkit-fill-available;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    top: 64px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  color: white;
  height: 100%;
`;

export const StatsSection = styled.div`
  display: flex;
  gap: 32px;
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatLabel = styled.div`
  font-size: 14px;
  opacity: 0.8;
`;

export const StatValue = styled.div`
  font-size: 24px;
`;

export const ControlsSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const FaucetButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
  font-size: 18px;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const NetworkButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: none;
  background: ${(props) =>
    props.active ? "#D14000" : "rgba(255, 255, 255, 0.1)"};
  color: white;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: ${(props) =>
      props.active ? "#C13000" : "rgba(255, 255, 255, 0.2)"};
  }
`;

export const WalletButton = styled.button`
  background: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  color: #333;
  font-family: monospace;
  cursor: pointer;
  transition: background 0.2s;
  font-size: 16px;
  &:hover {
    background: #f0f0f0;
  }
`;
