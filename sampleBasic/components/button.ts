import * as b from 'bobril';

export interface IData {
    title: string;
    onClick?: () => void;
    class?: string;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const createButton = b.createComponent<IData>({

    render(ctx: IContext, me: b.IBobrilNode) {
        me.tag = 'button';
        me.children = ctx.data.title;
        me.className = ctx.data.class;
    },
    
    onClick(ctx: IContext): boolean {

        if (ctx.data.onClick) {
            ctx.data.onClick();
        }
        
        return true;
    }
});

export default createButton;