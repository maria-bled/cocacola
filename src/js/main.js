import "../assets/scss/main.scss";

//components

import {useTheme} from "./components/theme.js";
import {useInsightSlider} from "./components/slider.js"
import {useBurger} from "./components/burger.js";

useInsightSlider();
useTheme();

useBurger();
