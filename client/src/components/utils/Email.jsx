'use strict'

// https://github.com/msudgh/react-email-autocomplete

import React, { Component } from 'react'

class Email extends Component {
    constructor(props) {
        super(props)
        this.state = {
            placeholder: props.placeholder,
            class: props.className,
            value: '',
            domains: props.domains ? props.domains : ['yahoo.com', 'hotmail.com', 'gmail.com', 'me.com', 'aol.com', 'mac.com', 'live.com', 'googlemail.com', 'msn.com', 'hotmail.com', 'yahoo.com', 'facebook.com', 'verizon.net', 'outlook.com', 'icloud.com'], // Include important mail services
            suggestion: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.getSuggest = this.getSuggest.bind(this)
    }

    handleChange(event) {
        // Catch value of the input box by every change
        let emailAddress = event.target.value
        let suggest = this.suggest(emailAddress)

        if (typeof suggest === 'undefined' || suggest.length < 1) {
            // Set value and suggestion state by every change
            this.setState({ value: emailAddress, suggestion: suggest })
        } else {
            // Update value state plus suggested text
            this.setState({ value: emailAddress + suggest, suggestion: suggest })
        }
    }

    getSuggest(event) {
        var protectedKeyCodes = [9, 17, 18, 35, 36, 37, 38, 39, 40, 45];
        if (protectedKeyCodes.indexOf(event.keyCode) >= 0) {
            return;
        }

        if (event.keyCode === 8) {
            this.setState({ value: event.target.value.replace(this.state.suggestion, '') })
        } else {
            if (typeof this.state.suggestion === 'undefined' || this.state.suggestion.length < 1) {
                return false;
            } else {
                let startPos = this.state.value.indexOf(this.state.suggestion)
                let endPos = startPos + this.state.suggestion.length
                this.textHandler.setSelectionRange(startPos, endPos)
            }
        }
    }

    suggest(string) {
        // Shim indexOf
        // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Polyfill
        if (!Array.prototype.indexOf) {
            this.doIndexOf();
        }

        let str_arr = string.split('@')
        if (str_arr.length > 1) {
            string = str_arr.pop()
            if (!string.length) {
                return;
            }
        } else {
            return;
        }

        let match = this.state.domains.filter((domain) => {
            return 0 === domain.indexOf(string);
        }).shift() || '';

        return match.replace(string, '');
    }

    doIndexOf() {
        Array.prototype.indexOf = function (searchElement, fromIndex) {
            if (this === undefined || this === null) {
                throw new TypeError('"this" is null or not defined');
            }

            var length = this.length >>> 0; // Hack to convert object.length to a UInt32
            fromIndex = +fromIndex || 0;

            if (Math.abs(fromIndex) === Infinity) {
                fromIndex = 0;
            }

            if (fromIndex < 0) {
                fromIndex += length;
                if (fromIndex < 0) {
                    fromIndex = 0;
                }
            }

            for (; fromIndex < length; fromIndex++) {
                if (this[fromIndex] === searchElement) {
                    return fromIndex;
                }
            }

            return -1;
        }
    }

    render() {
        return (
            <div className="eac-wrapper">
                <input type="text" 
                       id="eac-input" 
                       placeholder={this.state.placeholder} 
                       className={this.state.class} 
                       value={this.state.value} 
                       onChange={this.handleChange} 
                       onKeyUp={this.getSuggest} 
                       ref={(input) => { this.textHandler = input }} />
            </div>
        )
    }
}

export default Email