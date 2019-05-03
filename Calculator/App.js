/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor() {
    super()
    this.state = {
      resultText: "",
      calculationText: ""
    }
    this.ops = ['DEL', '+', '-', '*', '/']
    this.nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]
  }

  calculateResult() {
    const text = this.state.resultText
    this.setState({
      calculationText: eval(text)
    })
  }

  validate() {
    const text = this.state.resultText
    switch (text.slice(-1)) {
      case '+':
      case '-':
      case '*':
      case '/':
        return false
    }
    return true
  }

  buttonPressed(text) {

    if (this.state.resultText.slice(-1) == '.' && text == '.')
      return
    if (text == '=')
      return this.validate() && this.calculateResult()

    this.setState({
      resultText: this.state.resultText + text
    })
    if (this.state.resultText.contains('+')) {
      console.log(this.state.resultText)
    }
  }

  operate(operation) {
    switch (operation) {
      case 'DEL':
        let text = this.state.resultText.split('')
        text.pop()
        this.setState({
          resultText: text.join('')
        })
        break

      case '+':
      case '-':
      case '*':
      case '/':

        const lastChar = this.state.resultText.split('').pop()
        if (this.ops.indexOf(lastChar) > 0)
          return
        if (this.state.resultText == "")
          return

        this.setState({
          resultText: this.state.resultText + operation
        })
    }
  }

  render() {
    let rows = []
    for (let i = 0; i < 4; i++) {
      let row = []
      for (let j = 0; j < 3; j++) {
        row.push(<TouchableOpacity key={this.nums[i][j]} onPress={() => this.buttonPressed(this.nums[i][j])} style={styles.btn}>
          <Text style={styles.btnText}>{this.nums[i][j]}</Text>
        </TouchableOpacity>)
      }
      rows.push(<View key={i} style={styles.row}>{row}</View>)
    }

    let operations = []
    for (let i = 0; i < 5; i++) {
      operations.push(<TouchableOpacity key={this.ops[i]} onPress={() => this.operate(this.ops[i])} style={styles.btn}>
        <Text style={styles.operationsText}>{this.ops[i]}</Text>
      </TouchableOpacity>)
    }

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.calculationText}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
          </View>
          <View style={styles.operations}>
            {operations}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  result: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: '#434343',
  },
  operations: {
    flex: 1,
    backgroundColor: '#636363',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  resultText: {
    fontSize: 40,
    color: 'black'
  },
  calculationText: {
    fontSize: 26,
    color: 'black'
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 30,
    color: 'white'
  },
  operationsText: {
    color: 'white',
    fontSize: 24
  }
});
