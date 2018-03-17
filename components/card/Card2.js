import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';

class Card extends Component { 
    render() { 
        const newStyles = this.props.style || {};
        const cardStyles = this.props.full ? styles.full : styles.card;
        return (
            <TouchableHighlight
                underlayColor='transparent'
                onPress={this.props.onPress}
            >
                <View style={[cardStyles, newStyles]}>
                    {this.props.children}
                </View>
            </TouchableHighlight>    
        );
    }
}

Card.propTypes = {
    full: PropTypes.bool,
    onPress: PropTypes.func
}

class CardImage extends Component { 
    render() { 
        const newStyles = this.props.style || {};
        return (
            <View style={[styles.image, newStyles]}>
                {this.props.children}
            </View>
        );
    }
}

class CardTitle extends Component { 
    render() { 
        const newStyles = this.props.style || {};
        return (
            <View style={[styles.header, newStyles]}>
                <Text style={this.props.leftTitleStyle}>{this.props.leftTitle}</Text>
                <Text style={this.props.rightTitleStyle}>{this.props.rightTitle}</Text>
            </View>
        );
    }
}

CardTitle.propTypes = {
    leftTitle: PropTypes.string,
    leftTitleStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
    rightTitle: PropTypes.string,
    rightTitleStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number])
}

class CardContent extends Component { 
    render() { 
        const newStyles = this.props.style || {};
        return (
            <View style={[styles.body, newStyles]}>
                {this.props.children}
            </View>
        );
    }
}

class CardText extends Component { 
    render() { 
        const newStyles = this.props.style || {};
        return (
            <View style={[styles.cardText, newStyles]}>
                <Text style={[styles.text, this.props.text1Style]}>{this.props.text1}</Text>
                <Text style={[styles.text, this.props.text2Style]}>{this.props.text2}</Text>
                <Text style={[styles.text, this.props.text3Style]}>{this.props.text3}</Text>
                <Text style={[styles.text, this.props.text4Style]}>{this.props.text4}</Text>
                <Text style={[styles.text, this.props.text5Style]}>{this.props.text5}</Text>
            </View>
        );
    }
}

CardText.propTypes = {
    text1: PropTypes.string,
    text1Style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
    text2: PropTypes.string,
    text2Style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
    text3: PropTypes.string,
    text3Style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
    text4: PropTypes.string,
    text4Style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
    text5: PropTypes.string,
    text5Style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
}

class CardFooter extends Component { 
    render() { 
        const newStyles = this.props.style || {};
        return (
            <View style={[styles.footer, newStyles]}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    full: {
        marginTop: 15,
        flexDirection: "column",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: "#d8d8d8",
        backgroundColor: "#f5f7f9",
    },
    card: {
        margin: 10,
        marginTop: 15,
        flexDirection: "column",
        backgroundColor: "#f5f7f9",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#d8d8d8",
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingRight: 30,
        marginLeft: 26,
    },
    image: {
        marginRight: 0,
    },
    cardText: {
        flexDirection: 'row',
        paddingLeft: 0,
        paddingVertical: 0,
        alignItems: 'flex-end'
    },
    text: {
        marginRight: 10,
    },
    body: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingRight: 30,
        paddingLeft: 26,
        
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingRight: 30,
        paddingLeft: 26,
    }
});

export { 
    Card,
    CardImage,
    CardTitle,
    CardContent,
    CardText,
    CardFooter
}