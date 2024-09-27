import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { HiBellAlert } from "react-icons/hi2";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Menu() {
  const [value, setValue] = React.useState("recents");

  const tamanhoDaTela = useMediaQuery("(min-width: 600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        maxWidth: 2500,
        position: 'fixed',
        top: tamanhoDaTela ? 0 : 'auto', 
        bottom: tamanhoDaTela ? 'auto' : 0, 
        left: 0,
        right: 0
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Alert"
        value="Alert"
        icon={<HiBellAlert size={27} />}
      />
      <BottomNavigationAction
        label="Folder"
        value="folder"
        icon={<FolderIcon />}
      />
    </BottomNavigation>
  );
}
