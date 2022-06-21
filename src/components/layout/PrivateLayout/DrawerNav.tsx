import { CloseButton, Drawer } from "@mantine/core";
import type { FC } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { SideNav } from "~/components/layout/PrivateLayout/SideNav";

export const DrawerNav: FC<{ opened: boolean; handleClose: () => void }> = ({ opened, handleClose }) => {
  const location = useLocation();

  useEffect(() => {
    handleClose();
  }, [location]);

  return (
    <Drawer opened={opened} onClose={handleClose} size="auto" withCloseButton={false} sx={{ position: "relative" }}>
      <CloseButton
        size="xl"
        radius="xl"
        variant="transparent"
        onClick={handleClose}
        sx={{
          position: "absolute",
          zIndex: 999,
          top: 8,
          right: -56,
          color: "white",
          "&:not(:disabled):active": { transform: "none" },
        }}
      />
      <SideNav type="drawer" />
    </Drawer>
  );
};
