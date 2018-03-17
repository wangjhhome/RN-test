<Animated.View style={[styles.mask, {
                            opacity: this.state.opacity.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 0.8]
                            })
                        }]} >
                        </Animated.View>