import "/scss/main.scss";

//components

import { useTheme } from "./components/theme.js";
import {
  useInsightSlider,
  useTestimonialsSlider,
} from "./components/home/slider.js";
import { useBurger } from "./components/burger.js";

useInsightSlider();
useTheme();
useTestimonialsSlider();
useBurger();
