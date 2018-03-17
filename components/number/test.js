<View style={[styles.container1,this.props.containerStyles]}>
                <View style={styles.titleCon}>
                    <Text style={[styles.titleTxt, this.props.leftTextStyles]}>{obj.leftText}</Text>
                </View>    
                <View style={styles.inputCon}>
                    <TextInput
                        ref="textInputRefer"
                        style={[styles.inputTxt, this.props.inputTextStyles]}
                        onChangeText={(text) => this.setState({ input: this._changeRule(text) })}
                        placeholder={this.props.placeHolder}
                        value={this.state.input}
                        maxLength={obj.maxLength}
                        keyboardType={keyboardType}
                        underlineColorAndroid={"transparent"}
                        onBlur={() => { this._onBlur() }}
                        onFocus={() => { this._onFocus()}}
                        />
                </View>
                <View style={styles.iconCon}>
                    {rightIcon}
                </View>
            </View>