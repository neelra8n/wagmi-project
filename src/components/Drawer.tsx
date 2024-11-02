import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import {
  DrawerContent,
  DrawerWrapper,
  Logo,
  LogoSection,
  MenuButton,
  NavItem,
  Overlay,
  TopBar,
} from "./StyledComponents";
import YieldfiLogo from "../assets/images/yieldfiLogo";
import { Link, useLocation } from "react-router-dom";
interface ResponsiveDrawerProps {
  config: MenuStructure;
}

// Component Implementation
const ResponsiveDrawer = ({ config }: ResponsiveDrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { menu, social_media } = config;
  const location = useLocation();

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <DrawerWrapper>
      <TopBar>
        <MenuButton onClick={toggleDrawer}>
          <Menu size={24} />
        </MenuButton>
        <Logo>
          <YieldfiLogo />
        </Logo>
        <div /> {/* Spacer */}
      </TopBar>

      <DrawerContent isOpen={isOpen}>
        <LogoSection>
          <YieldfiLogo />
        </LogoSection>
        <div className="drawer-content">
          {menu.map((item, index) => (
            <div key={index} className="sidebar-section">
              <div className="sidebar-label">
                <span>{item.label}</span>
                <span className="sidebar-hl"></span>
              </div>
              {item.items.map((_item) => (
                <Link to={`/${_item.id}`}>
                  <NavItem isSelected={location.pathname == `/${_item.id}`}>
                    {_item.label}{" "}
                    {_item?.status && (
                      <span className="sidebar-status">{_item.status}</span>
                    )}
                  </NavItem>
                </Link>
              ))}
            </div>
          ))}
          <div className="drawer-social-content">
            {social_media.map((item, index) => (
              <span className="drawer-social-icon" key={index}>
                <img src={item.icon} />
              </span>
            ))}
          </div>
        </div>
      </DrawerContent>
      <Overlay isOpen={isOpen} onClick={toggleDrawer} />
    </DrawerWrapper>
  );
};

export default ResponsiveDrawer;
