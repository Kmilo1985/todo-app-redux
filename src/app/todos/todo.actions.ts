import { createAction, props } from '@ngrx/store';

export const limpiar = createAction(
    '[Counter Component] Limpiar TODOS'
);


export const crear = createAction(
    '[Counter Component] Crear',
    props<{ texto: string }>()
);

export const toggle = createAction(
    '[TODO] Togle Todo',
    props<{ id: number }>()
);

export const borrar = createAction(
    '[TODO] Borrar todo',
    props<{ id: number }>()
);

export const toggleAll = createAction(
    '[TODO] Toggle TodoAll',
    props<{ completado: boolean }>()
);