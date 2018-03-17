/**
 * Created by mac on 2017/12/5.
 */

import React, {Component} from 'react';
import {View, Dimensions,Text} from 'react-native';

import {Picker,PickerTitle,MButton} from 'IFOPReact'
import cityCode from './ChinaCityCode'

export default class Picker_Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPicker : false
        };
        this.rowIndex0 = 0;
        this.rowIndex1 = 0;
        this.rowIndex2 = 0;
    }

    _onLeftButtonPress(){
        this.setState({showPicker:false});
    }

    _onRightButtonPress(){
        this.setState({showPicker:false});
        alert(cityCode.CityZoneCode.China.Province[this.rowIndex0].name+','
        +cityCode.CityZoneCode.China.Province[this.rowIndex0].City[this.rowIndex1].name+','
        +cityCode.CityZoneCode.China.Province[this.rowIndex0].City[this.rowIndex1].Area[this.rowIndex2].name);
    }

    _onPress(){
        this.setState({showPicker:true});
    }

    render() {
        const tmpHeight = Dimensions.get('window').height - 366;
        let v = this.state.showPicker ?
                <View >
                     <View style={{height:tmpHeight, opacity:0.1}}/>

                     <PickerTitle
                         title='Areas'
                         leftButton='Cancel'
                         rightButton='OK'
                         leftPress={this._onLeftButtonPress.bind(this)}
                         rightPress={this._onRightButtonPress.bind(this)}/>

                     <View style = {{height: 225, flexDirection: 'row'}}>
                         <View style = {{flex: 0.9}}>
                             <Picker
                                 data = {cityCode.CityZoneCode.China.Province}
                                 ref = '_Picker0'
                                 name = 'name'
                                 onRowChange = {index => {
                                     this.rowIndex0 = index;
                                     this.rowIndex1 = 0;
                                     this.rowIndex2 = 0;
                                     this.refs._Picker1.setDataSource(cityCode.CityZoneCode.China.Province[this.rowIndex0].City);
                                     this.refs._Picker2.setDataSource(cityCode.CityZoneCode.China.Province[this.rowIndex0].City[0].Area)}}
                             />
                         </View>
                         <View style = {{flex: 1}}>
                             <Picker
                                 data = {cityCode.CityZoneCode.China.Province[0].City}
                                 ref = '_Picker1'
                                 name = 'name'
                                 onRowChange = {index => {
                                     this.rowIndex1 = index;
                                     this.rowIndex2 = 0;
                                     this.refs._Picker2.setDataSource(cityCode.CityZoneCode.China.Province[this.rowIndex0].City[this.rowIndex1].Area)}}
                             />
                         </View>
                         <View style = {{flex: 1}}>
                             <Picker
                                 data = {cityCode.CityZoneCode.China.Province[0].City[0].Area}
                                 ref = '_Picker2'
                                 name = 'name'
                                 onRowChange = {index => this.rowIndex2 = index}
                             />
                         </View>
                     </View>
                 </View> : null;
        return (
            <View>
                <MButton
                    title={"Press"}
                    onPress={this._onPress.bind(this)}
                />
                {v}
            </View>
        )
    }
}

