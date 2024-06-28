import { variants } from '#tailwind-config';
import type {Config} from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme';


export default <Partial<Config>> {
  
  theme: {
    extend: {
      colors:{
       primary :defaultTheme,
        // pinky:'#e2d5d9', //pinky
        orangy:'#dab7b6', //orangy
        prup1:'#c6b1c2', //prup1
        prup2:'#b09aa7',  // prup2
        prup3:'#4b454a',  //prup3
        
        pinky:'#ddd6dd',
        bluish:'#cacad7',
        greenish:'#d0ceca',
        brownish:'#c3bcba',
        darkGreenish:'#72745d',
        specIcon:'#1d4260',
        hove:'#8ce4e9',
        greyishTxt:'#abacb5',
        lightPurp:'#dddefd',//6d7184 //dcddee
        purp:'#282f49',
        darkPrup:'#191b2d',
        bitDarkPurp:'#24293d'
        
        
      },
    },
  },
  plugins: [ require('tailwindcss-animated') ],
  variants:{
    extend:{
      display:['group-hover']
    }
  }
  
}

