import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from '../styles/Marquee.style';
const entryBorderRadius = 0;

export default StyleSheet.create({
    slideInnerContainer: {
        paddingHorizontal: 0,
        flexDirection: 'column'
    },
    imageContainer: {
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'contain',
        borderRadius: Platform.OS === 'ios' ? entryBorderRadius : 0,
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    // image's border radius is buggy on ios; let's hack it!
    radiusMask: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: entryBorderRadius
    }
});
