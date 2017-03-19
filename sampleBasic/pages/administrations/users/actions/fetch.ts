import { createAction, shallowCopy } from 'bobflux';
import { get } from './../../../../infrastructure/api';
import { IState } from './../state'
import { administrations_usersCursor as Cursor } from './../cursor'
import { IUserInfor } from './../dto/userInfo';

export const getUserById = (id: number) => get({

    url: './api/getUserById/' + id.toString(),

    callBack: createAction(Cursor, (state: IState, result: IUserInfor) => {

        const clonedState = shallowCopy(state);
        clonedState.item = result;

        return clonedState;
    })
})