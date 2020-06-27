import * as actions from './index';

describe('actions', () => {
    it('should have a type of ADD_TODO', () => {
        const text = 'Go to teh vault';
        const id = 1;
        const expectedAction = {
            type: 'ADD_TODO',
            todo
        };
        const result = actions.addToDo(text, id);

        expectedAction(result).toEqual(expectedAction);
    });

    it('should have a type of TOGGLE_TODO', () => {
        const id = 2;
        const expectedAction = {
            type: 'TOGGLE_TODO',
            id
        };
        const result = actions.toggleToDo(id);

        expectedAction(result).toEqual(expectedAction)
    });
})