import { Layout, Menu } from "antd";
import { A } from "hookrouter";
import { useEffect } from "react";
const { Header } = Layout;

const MenuItems = [
  { key: "1", name: "Home", link: "/home" },
  { key: "2", name: "About", link: "/about" },
  { key: "3", name: "Contact", link: "/contact" },
];

const NavBar = () => {
  useEffect(() => {
    console.log("NavBar...");
  }, []);

  return (
    <Layout className="layout">
      <Menu theme="dark" mode="horizontal">
        {MenuItems.map((item) => (
          <Menu.Item key={item.key}>
            <A key={item.key} href={item.link}>
              {item.name}
            </A>
          </Menu.Item>
        ))}
      </Menu>
    </Layout>
  );
};

export default NavBar;
