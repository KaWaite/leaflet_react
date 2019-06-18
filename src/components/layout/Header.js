import React from "react";
import {
  TopAppBar,
  TopAppBarTitle,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarActionItem,
  // TopAppBarNavigationIcon,
  TopAppBarFixedAdjust
} from "@rmwc/top-app-bar";

import "@material/textfield/dist/mdc.textfield.css";
import "@material/top-app-bar/dist/mdc.top-app-bar.css";
import "@material/theme/dist/mdc.theme.css";

export default function Header(props) {
  return (
    <div>
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection alignStart>
            <i className="material-icons md-48">format_underlined</i>
            {/* <TopAppBarNavigationIcon icon="menu" /> */}
            <TopAppBarTitle>uDrew Maps</TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection alignEnd>
            <TopAppBarActionItem icon="map" />
            <TopAppBarActionItem icon="favorite" />
            <TopAppBarActionItem icon="star" />
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
    </div>
  );
}
