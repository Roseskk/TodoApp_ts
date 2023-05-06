import React from 'react';

interface INewTodoFromProps {
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
    inputChange: React.ChangeEventHandler<HTMLInputElement>,
    value: string
}

function NewTodoForm({ handleClick, inputChange, value }: INewTodoFromProps) {

    return (
        <div className={'sticky top-0 flex gap-2 rounded w-full'}>
            <input
                className={'w-3/4 border rounded p-2'}
                type={'text'}
                placeholder={'Some todo....'}
                onChange={(event) => inputChange(event)}
                value={value}
            />
            <button className={'w-1/4 bg-blue-500 rounded text-white'} onClick={handleClick}>Add todo</button>
        </div>
    );
}

export default NewTodoForm;