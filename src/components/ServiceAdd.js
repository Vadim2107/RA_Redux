import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeServiceField, addService, editService, viewCancel} from '../actions/actionCreators';

export default function ServiceAdd() {
    // const item = useSelector(store => store.formReducer);
    const {id, name, price, viewCancel} = useSelector(state => state.formReducer);
    const dispatch = useDispatch();
    // const isCancel = useSelector(state => state.formReducer.viewCancel);
    const selectedId = useSelector(state => state.formReducer.id)

    const handleChange = event => {
        const {name, value} = event.target;
        dispatch(changeServiceField(name, value));
    }

    const handleSubmit = event => {
        event.preventDefault();

        if(viewCancel) {
            dispatch(editService(selectedId, name, price));
            // dispatch(viewCancel(false));
            dispatch({type: 'VIEW_CANCEL', payload: false});
        } else {
            dispatch(addService(name, price));
        }

        dispatch(changeServiceField('name', ''));
        dispatch(changeServiceField('price', ''));
    }

    const handleReset = () => {
        dispatch(changeServiceField('name', ''));
        dispatch(changeServiceField('price', ''));
        // dispatch(viewCancel(false));
        dispatch({type: 'VIEW_CANCEL', payload: false});
    }

    return (
        <form className='service-add-form' onSubmit={handleSubmit} onReset={handleReset}>
            <input name='name' onChange={handleChange} value={name} />
            <input name='price' onChange={handleChange} value={price} />
            {viewCancel && <button type='reset'>Cancel</button>}
            <button type='submit'>Save</button>
        </form>
    )
}
