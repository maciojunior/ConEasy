import { extendTheme } from 'native-base';

export const THEME = extendTheme({
    colors:{
        primary: {
            800: '#1E40AF'
        },
        secondary: {
            500: '#3b82f6'
        },
        blue:{
            600: '#2E76C7'
        },
        gray:{
            300: '#d6d3d1'
        },
        white: '#FFFFFF'
    },
    fonts: {
        heading: 'Roboto_700Bold',
        body: 'Roboto_400Regular',
    },
    fontSizes:{
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
    },
    sizes: {
        14:56
    }
});