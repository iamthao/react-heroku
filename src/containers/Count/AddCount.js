/**
 * Created by ThaoNguyen on 12/11/2017.
 */
import React from 'react'
import { connect } from 'react-redux'
import {Tang, Giam} from '../../actions/Count'

let Counter = ({ dispatch, counts }) => {
    console.log(counts.counts)

        return (
            <div>
                <h1>{counts.counts}</h1>
                <div>
                    <button onClick={() => dispatch(Tang())}> Tang</button>
                    <button onClick={() => dispatch(Giam())}> Giam</button>
                </div>
            </div>
        )

}

const mapStateToProps = state => {
    return {
         counts: state
    }
}

const CounterView = connect(
    mapStateToProps
)(Counter)

export default CounterView