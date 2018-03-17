/**
 * Created by cherrybomb on 2017/11/16.
 */
import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


import Button_Demo from './components/button/Button_Demo'
import Header_Demo from './components/header/Header_Demo'
import Picker_Demo from './components/picker/Picker_Demo'
import InformationContainer_Demo from './components/informationContainer/InformationContainer_Demo'

storiesOf('Components', module)

    .add('header',()=><Header_Demo/>)
    .add('button', () => <Button_Demo/>)
    .add('picker', () => <Picker_Demo/>)
    .add('informationContainer', ()=><InformationContainer_Demo/>)