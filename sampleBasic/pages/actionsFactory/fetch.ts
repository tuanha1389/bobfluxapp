import { createAction, shallowCopy, ICursor, IState } from 'bobflux';


export interface IEditItemState<TItem> extends IState {
    item: TItem
}


export function createReceiveItemAction<TItem>(cursor: ICursor<IEditItemState<TItem>>) {

    return createAction(cursor, (state: IEditItemState<TItem>, result: TItem) => {

        const clonedState = shallowCopy(state);
        clonedState.item = result;

        return clonedState;
    });

}

