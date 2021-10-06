import { useReducer,useEffect,useCallback } from "react";
import axios from 'axios';
import {findMatchString} from '../helpers/match-strings';

const SET_TEST_STATUS = 'SET_TEST_STATUS' 
const SET_AUTO_SUGGEST = 'SET_AUTO_SUGGEST' 
const SET_BLOOD_TESTS = 'SET_BLOOD_TESTS' 

const bloodTestReducer = (state, action) => {
    switch (action.type){
        case SET_TEST_STATUS: 
            return {
                ...state,
                testStatus: action.payload,
                autoSuggest: null
            }
        case SET_AUTO_SUGGEST: 
            return {
                ...state,
                testStatus: action.payload == null ? null : 'unknown',
                autoSuggest: action.payload
            }
        case SET_BLOOD_TESTS:
            return {
                ...state,
                bloodTests: action.payload
            }
        default:
            return state;
    }
}

export const useBloodTest = (initialBloodTests) => {
    const [state,dispatch] = useReducer(bloodTestReducer, {
        bloodTests: initialBloodTests,
        testStatus: null,
        autoSuggest: null
    })

    const { bloodTests } = state;

    const setUserInput = useCallback((userInputs) => {
        const {testName,result} = userInputs;
        const match = findMatchString(bloodTests.map((test) => test.name), testName);
        const numResult = parseInt(result);
        if(testName){
            //if match is equal to user test name input
            if(match && testName.toLowerCase() === match.toLowerCase()) {
                //if user set result
                if(!Number.isNaN(numResult) && numResult != 0 ){
                    // check the trashold and update the status
                    const testInfo = bloodTests.find((test) => test.name.toLowerCase() == testName.toLowerCase())
                    dispatch({type: SET_TEST_STATUS, payload: testInfo.threshold >= numResult ? 'Good' : 'Bad'})
                } else { // if there is no result but there is a match with test name, clear auto suggestion
                    dispatch({type:SET_AUTO_SUGGEST, payload: null})
                }
            } else if(match){ //if the match not equel user test name input - update auto suggestion with natch
                dispatch({type:SET_AUTO_SUGGEST, payload: match})
            } else { //otherwise - update unknown status
                dispatch({type:SET_TEST_STATUS, payload: 'unknown'})
            }
        } else { // if there is no user test name input - clear auto suggestion
            dispatch({type:SET_AUTO_SUGGEST, payload: null})
        }
    },[bloodTests])


    const clearAutoSuggest = () => {
        dispatch({type:SET_AUTO_SUGGEST, payload: null})
    }

    useEffect(() => {
        axios.get('https://s3.amazonaws.com/s3.helloheart.home.assignment/bloodTestConfig.json')
        .then(res => {
            dispatch({type: SET_BLOOD_TESTS, payload: res.data.bloodTestConfig})
        }).catch(err => console.error(err))
    },[])


    return [state,setUserInput,clearAutoSuggest]
}