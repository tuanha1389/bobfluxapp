import { IState } from 'bobflux';
import { IUserInfor } from './dto/userInfo';
import { IEditItemState } from './../../actionsFactory/fetch'

export interface IState extends IEditItemState<IUserInfor> {
        
}